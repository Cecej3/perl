import { useState, useEffect } from "react";
import {
	Box,
	Heading,
	Input,
	Card,
	CardHeader,
	Button,
	Stack,
	CardBody,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import "./create-staff.scss";
import { useFormik } from "formik";
import { staffSchema } from "utils/input-validation/validation";
import { ErrorResponse, staffDTO } from "utils/types";
import { useCreateStaff } from "api/hooks";
import { MdLocalPhone, MdCancel } from "react-icons/md";
import { LiaCameraSolid } from "react-icons/lia";
import { IoAddCircleOutline } from "react-icons/io5";

const Createstaff = () => {
	const { create, isLoading } = useCreateStaff({
		onSuccess: () => {},
		onError: (error: ErrorResponse) => {
			console.log({ error });
		},
	});
	const [imageFiles, setImageFiles] = useState<File[]>([]);
	const handleFileChange = (e: { target: HTMLInputElement }) => {
		const selectedFiles: FileList = (e.target as HTMLInputElement).files!;
		const filesArray: File[] = Array.from(selectedFiles);
		setImageFiles([...imageFiles, ...filesArray]);
	};

	const deleteImage = (i: number) => {
		const updatedImages = [...imageFiles];
		updatedImages.splice(i, 1);
		setImageFiles(updatedImages);
	};
	const formik = useFormik<staffDTO>({
		initialValues: {
			firstname: "",
			lastname: "",
			staff_id: 0,
			phone_number: "",
			images: imageFiles,
		},
		validateOnBlur: true,
		validationSchema: staffSchema,
		onSubmit: (values) => {
			if (imageFiles.length !== 9) {
				setFieldError(
					"images",
					"images cannot be less than or greater than 9 files"
				);
			} else {
				let data = new FormData();
				data.append("firstname", values.firstname);
				data.append("lastname", values.lastname);
				data.append("staff_id", `${values.staff_id}`);
				data.append("phone_number", values.phone_number);
                // data.append("images", imageFiles as unknown as Blob[]);
				imageFiles.map((image) => {
					return data.append("images", image);
				});
                // console.log(imageFiles)
				create(data);
			}
		},
	});
	const {
		handleSubmit,
		handleChange,
		errors,
		touched,
		setFieldError,
	} = formik;

	useEffect(() => {
		if (imageFiles.length !== 9) {
			setFieldError(
				"images",
				"images cannot be less than or greater than 9 files"
			);
		} else {
			setFieldError("images", undefined);
		}
	}, [imageFiles.length]);
	return (
        <Box>
            <Card maxW="md" marginY={"auto"}>
                <CardHeader>
                    <Heading as={"h4"} size="md">
                        Create MTU staff
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
                                    placeholder="enter your first name"
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
                                    placeholder="enter your last name"
                                    isInvalid={Boolean(errors.lastname) && touched.lastname}
                                    onChange={handleChange}
                                />
                                {touched.lastname && Boolean(errors.lastname) ? (
                                    <small>{errors.lastname}</small>
                                ) : null}
                            </Box>

                            <Box>
                                <Input
                                    id="staff_id"
                                    name="staff_id"
                                    type="number"
                                    errorBorderColor="crimson"
                                    placeholder="enter staff id"
                                    isInvalid={Boolean(errors.staff_id) && touched.staff_id}
                                    onChange={handleChange}
                                />
                                {touched.staff_id && Boolean(errors.staff_id) ? (
                                    <small>{errors.staff_id}</small>
                                ) : null}
                            </Box>

                            <Box>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <MdLocalPhone color="gray.300" />
                                    </InputLeftElement>
                                    <Input
                                        id="phone_number"
                                        name="phone_number"
                                        type="text"
                                        placeholder="enter phone number"
                                        isInvalid={
                                            Boolean(errors.phone_number) && touched.phone_number
                                        }
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                                {touched.phone_number && Boolean(errors.phone_number) ? (
                                    <small>{errors.phone_number}</small>
                                ) : null}
                            </Box>

                            <Box>
                                <Box className="image-container">
                                    {imageFiles.length > 0 ? (
                                        imageFiles.map((item, i) => (
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
                                                htmlFor="image-input"
                                                className="staff-image-upload"
                                            >
                                                Upload Image
                                                <LiaCameraSolid size={24} />
                                                <input
                                                    id="image-input"
                                                    name="image-input"
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
                                {imageFiles.length > 0 && imageFiles.length < 9 && (
                                    <label
                                        htmlFor="add-image-input"
                                        className="add-image-upload"
                                    >
                                        <IoAddCircleOutline size={24} />
                                        add more images
                                        <input
                                            id="add-image-input"
                                            name="add-image-input"
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

export default Createstaff;
