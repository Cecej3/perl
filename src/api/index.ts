import axios from "axios";

export const mtuservice = axios.create({
	baseURL: import.meta.env.VITE_APP_URL,
});

export const localMtuservice = axios.create({
	baseURL: "http://localhost:3009/",
});

export const setupAxios = () => {
	const token = localStorage.getItem("mtuToken");
	mtuservice.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const setupLocalAxios = () => {
	const token = localStorage.getItem("mtuToken");
	localMtuservice.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default mtuservice;
