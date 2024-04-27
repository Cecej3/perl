export interface SignupDTO {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
}
export interface loginDTO {
	email: string;
	password: string;
}
export interface staffDTO {
	firstname: string;
	lastname: string;
	staff_id: number;
	phone_number: string;
	images: any[];
}

export interface studentDTO {
	firstname: string;
	lastname: string;
	matric_no: number;
	images: any[];
}

export type MutationOptionsType = {
	onSuccess?: (data: any) => void;
	onError?: (error: any) => void;
};

export type SuccessResponse = {
	status: number;
	message: string
	success: boolean;
	data: any
};

export type ErrorResponse = {
	status: number;
	message: string;
	success: boolean;
};

export type PaginationParams = {
	per_page: number;
	page_number: number;
};

export type SecurityLogsType = {};

export type SecurityPersonelsType = {
	created_at: string;
	firstname: string;
	id: string;
	lastname: string;
	phone_number: string;
	staff_id: number;
	updated_at: string;
};

export type StudentsType = {
	created_at: string;
	firstname: string;
	id: string;
	lastname: string;
	matric_no: number;
	updated_at: string;
};

// updated_at: "2024-04-09T22:53:09.171000";