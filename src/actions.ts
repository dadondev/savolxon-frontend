/** @format */

import axios from "axios";
import toast from "react-hot-toast";

export interface loginPayloadI {
	phoneNumber: string;
	password: string;
}
export const baseUrl =
	"https://savolxon-backend-production.up.railway.app/api/auth/teacher/login";

export async function login(values: loginPayloadI) {
	const resp = axios.post(baseUrl, values);
	const data = await toast.promise(resp, {
		loading: "Malumotlar tekshirilmoqda...",
		error: "Iltimos qayta urinib ko'ring!",
		success: "Jarayon yakunlandi! Iltimos kutib turing...",
	});
	if (data.status !== 200) throw new Error("Xatolik");
	return data.data;
}
