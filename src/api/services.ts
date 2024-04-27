import mtuservice, { setupAxios } from "api";
import { PaginationParams, SignupDTO, loginDTO, staffDTO } from "utils/types";

const { post, patch, put, get } = mtuservice;

const config = {
	headers: {
		"Content-Type": "multipart/form-data",
	},
};

export const signup = async (data: SignupDTO) => {
	const response = post(`/user/signup`, data);
	return (await response).data;
};

export const login = async (data: loginDTO) => {
	const response = post(`/auth/login`, data);
	return (await response).data;
};

export const createStaff = async (data: FormData) => {
	setupAxios();
	const response = post(`/user/create/security_personnel`, data, config);
	return (await response).data;
};

export const createStudent = async (data: FormData) => {
	setupAxios();
	const response = post(`/user/create/student`, data, config);
	return (await response).data;
};

export const updateStaff = async (data: staffDTO) => {
	const response = put(`/user/create/staff`, data);
	return (await response).data;
};

export const deleteStaff = async (id: number) => {
	const response = mtuservice.delete(`/user/staff/${id}`);
	return (await response).data;
};

export const enableCamera = async () => {
	const response = patch(`/security/arm/`);
	return (await response).data;
};

export const disableCamera = async () => {
	const response = patch(`/security/disarm/`);
	return (await response).data;
};

export const getStaff = async () => {
	setupAxios();
	const response = get(`/user/security_personnel`);
	return (await response).data;
};

export const getStudents = async () => {
	setupAxios();
	const response = get(`/user/students`);
	return (await response).data;
};

export const getLogs = async (params: PaginationParams) => {
	setupAxios();
	const response = get(
		`/security/logs/?page_number=${params.page_number}&per_page=${params.per_page}`
	);
	return (await response).data;
};

// export const uploadImage = async (formData) => {
//     const cloudName = 'maesan-product';
//     const response = maesanService.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
//     return (await response).data
// };

export const handleFileUpload = async (file: File) => {
    const uploadPreset = 'maesan-open-cdn';
    const folder = 'maesan-images';
    const cloudName = 'maesan-product';

    if (file) {
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', uploadPreset);
            formData.append('folder', folder);

            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            return data?.secure_url
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

};

export const logout = () => {
	localStorage.removeItem("mtuToken");
	window.location.replace("/login");
};
