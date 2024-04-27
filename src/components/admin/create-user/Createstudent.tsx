import { useState, useEffect } from "react";
import {
	Box,
	Heading,
	Input,
	Card,
	CardHeader,
	Button,
	Stack,
	CardBody
} from "@chakra-ui/react";
import "./create-staff.scss";
import { useFormik } from "formik";
import { studentSchema } from "utils/input-validation/validation";
import { ErrorResponse, studentDTO } from "utils/types";
import { useCreateStudent } from "api/hooks";
import { MdCancel } from "react-icons/md";
import { LiaCameraSolid } from "react-icons/lia";
import { IoAddCircleOutline } from "react-icons/io5";

const Createstudent = () => {
	const { create, isLoading } = useCreateStudent({
		onSuccess: () => {},
		onError: (error: ErrorResponse) => {
			console.log({ error });
		},
	});
	const [studentImages, setStudentImages] = useState<File[]>([]);
	const handleFileChange = (e: { target: HTMLInputElement }) => {
		const selectedFiles: FileList = (e.target as HTMLInputElement).files!;
		const filesArray: File[] = Array.from(selectedFiles);
		setStudentImages([...studentImages, ...filesArray]);
	};

	const deleteImage = (i: number) => {
		const updatedImages = [...studentImages];
		updatedImages.splice(i, 1);
		setStudentImages(updatedImages);
	};
	const formik = useFormik<studentDTO>({
		initialValues: {
			firstname: "",
			lastname: "",
			matric_no: 0,
			images: studentImages,
		},
		validateOnBlur: true,
		validationSchema: studentSchema,
		onSubmit: (values) => {
			if (studentImages.length !== 9) {
				setFieldError(
					"images",
					"images cannot be less than or greater than 9 files"
				);
			} else {
				let data = new FormData();
				data.append("firstname", values.firstname);
				data.append("lastname", values.lastname);
				data.append("matric_no", `${values.matric_no}`);
				// data.append("images", studentImages as unknown as Blob[]);
				studentImages.map((image) => {
					return data.append("images", image);
				});
				// console.log(studentImages)
				create(data);
			}
		},
	});
	const { handleSubmit, handleChange, errors, touched, setFieldError } = formik;

	useEffect(() => {
		if (studentImages.length !== 9) {
			setFieldError(
				"images",
				"images cannot be less than or greater than 9 files"
			);
		} else {
			setFieldError("images", undefined);
		}
	}, [studentImages.length]);
	return (
		<Box>
			<Card maxW="md" marginY={"auto"}>
				<CardHeader>
					<Heading as={"h4"} size="md">
						Create MTU student
					</Heading>
				</CardHeader>
				<CardBody>
					<form onSubmit={handleSubmit}>
						<Stack spacing={4}>
							<Box>
								<Input
									id="firstname"
									name="firstname"
									type="text"
									errorBorderColor="crimson"
									placeholder="enter student first name"
									isInvalid={Boolean(errors.firstname) && touched.firstname}
									onChange={handleChange}
								/>
								{touched.firstname && Boolean(errors.firstname) ? (
									<small>{errors.firstname}</small>
								) : null}
							</Box>

							<Box>
								<Input
									id="lastname"
									name="lastname"
									type="text"
									errorBorderColor="crimson"
									placeholder="enter student last name"
									isInvalid={Boolean(errors.lastname) && touched.lastname}
									onChange={handleChange}
								/>
								{touched.lastname && Boolean(errors.lastname) ? (
									<small>{errors.lastname}</small>
								) : null}
							</Box>

							<Box>
								<Input
									id="matric_no"
									name="matric_no"
									type="number"
									errorBorderColor="crimson"
									placeholder="enter matric number"
									isInvalid={Boolean(errors.matric_no) && touched.matric_no}
									onChange={handleChange}
								/>
								{touched.matric_no && Boolean(errors.matric_no) ? (
									<small>{errors.matric_no}</small>
								) : null}
							</Box>

							<Box>
								<Box className="image-container">
									{studentImages.length > 0 ? (
										studentImages.map((item, i) => (
											<div className="image-display" key={i}>
												<Button onClick={() => deleteImage(i)}>
													<MdCancel size={22} />
												</Button>
												<img
													key={i}
													src={URL.createObjectURL(item)}
													alt=""
													className="tem-pic"
												/>
											</div>
										))
									) : (
										<>
											<label
												htmlFor="student-image-input"
												className="staff-image-upload"
											>
												Upload Image
												<LiaCameraSolid size={24} />
												<input
													id="student-image-input"
													name="student-image-input"
													type="file"
													accept="image/*"
													multiple
													style={{ display: "none" }}
													onChange={handleFileChange}
												/>
											</label>
										</>
									)}
								</Box>
								{Boolean(errors.images) ? (
									<small>{errors.images as string}</small>
								) : null}
								{studentImages.length > 0 && studentImages.length < 9 && (
									<label htmlFor="student-image" className="add-image-upload">
										<IoAddCircleOutline size={24} />
										add more images
										<input
											id="student-image"
											name="student-image"
											type="file"
											accept="image/*"
											multiple
											style={{ display: "none" }}
											onChange={handleFileChange}
										/>
									</label>
								)}
							</Box>

							<Button
								isLoading={isLoading}
								loadingText="Submitting"
								type="submit"
								colorScheme="teal"
								variant="outline"
							>
								Submit
							</Button>
						</Stack>
					</form>
				</CardBody>
			</Card>
		</Box>
	);
};

export default Createstudent;
