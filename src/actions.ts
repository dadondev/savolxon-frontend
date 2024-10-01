/** @format */

import axios from "axios";
import toast from "react-hot-toast";
import cookie from "cookie";

export interface loginPayloadI {
	phoneNumber: string;
	password: string;
}
export const baseUrl = "https://savolxon.up.railway.app/api";

export async function login(values: loginPayloadI) {
	const resp = axios.post(baseUrl + "/auth/teacher/login", values);
	const data = await toast.promise(resp, {
		loading: "Malumotlar tekshirilmoqda...",
		error: "Iltimos qayta urinib ko'ring!",
		success: "Jarayon yakunlandi! Iltimos kutib turing...",
	});
	if (data.status !== 200) throw new Error("Xatolik");
	return data.data;
}

export async function getAllTests() {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.get(baseUrl + "/teacher/tests/alltests", {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200) throw new Error("Malumotlarni olishda xatolik!");
	return resp.data;
}
