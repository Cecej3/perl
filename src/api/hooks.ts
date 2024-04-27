import { useMutation, useQuery } from "@tanstack/react-query";
import { createStaff, createStudent, disableCamera, enableCamera, getLogs, getStaff, getStudents, login, signup } from "./services";
import { MutationOptionsType, PaginationParams, SignupDTO, loginDTO } from "utils/types";

const logsKey = "user"
const staffKey = "staff"
const studentKey = "student"

export const useSignup = (options: MutationOptionsType) => {
	// const query = useQueryClient();
	const mutation = useMutation({
		mutationFn: (userData: SignupDTO) => signup(userData),
		onSuccess: (data) => {
			// query.invalidateQueries({ queryKey: [feedsKey] });
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		register: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useLogin = (options: MutationOptionsType) => {
	const mutation = useMutation({
		mutationFn: (userData: loginDTO) => login(userData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		login: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useCreateStaff = (options: MutationOptionsType) => {
	const mutation = useMutation({
		mutationFn: (userData: FormData) => createStaff(userData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		create: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useCreateStudent = (options: MutationOptionsType) => {
	const mutation = useMutation({
		mutationFn: (userData: FormData) => createStudent(userData),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		create: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useGetAllLogs = (params: PaginationParams) => {
	const response = useQuery({
		queryKey: [logsKey, params],
		queryFn: () => getLogs(params),
		enabled: true,
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};

export const useGetAllStaff = () => {
	const response = useQuery({
		queryKey: [staffKey],
		queryFn: () => getStaff(),
		enabled: true,
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};

export const useGetAllStudent = () => {
	const response = useQuery({
		queryKey: [studentKey],
		queryFn: () => getStudents(),
		enabled: true,
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data?.data : undefined,
	};
};

export const useEnableCamera = (options: MutationOptionsType) => {
	const mutation = useMutation({
		mutationFn: () => enableCamera(),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		enable: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useDisableCamera = (options: MutationOptionsType) => {
	const mutation = useMutation({
		mutationFn: () => disableCamera(),
		onSuccess: (data) => {
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error) => {
			options.onError && options.onError(error);
		},
	});

	return {
		disable: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

// export const useUploadImage = () => {

//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isSuccess, setIsSuccess] = useState(false);
//     const [error, setError] = useState(null);

//     return {
//         upload: (event: any) => {
//             const file = event.target.files[0];
//             const uploadPreset = 'maesan-open-cdn';
//             const folder = 'maesan-images';

//             if (file) {
//                 const formData = new FormData();
//                 formData.append('file', file);
//                 formData.append('upload_preset', uploadPreset);
//                 formData.append('folder', folder);
//                 setIsLoading(true)
//                 uploadImage(formData)
//                     .then(res => { setData(res); setIsLoading(false); setIsSuccess(true); setError(null) })
//                     .catch(err => { setError(err.response.data); setIsLoading(false); setIsSuccess(false); setData(null) })
//             }
//         },
//         data,
//         isLoading,
//         error,
//         isSuccess
//     }
// }

export const useUser = () => {
	const token = localStorage.getItem("mtuToken");
    const isAuthorized = token != undefined || token === "";

	return {
		isAuth: isAuthorized,
	};
};
