/** @format */

import axios from "axios";
import toast from "react-hot-toast";
import cookie from "cookie";

export interface loginPayloadI {
	phoneNumber: string;
	password: string;
}
export interface createTestI {
	name: string;
	teacher_id: string;
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

export async function createTest(payload: createTestI) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.post(baseUrl + "/teacher/tests/create", payload, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 201) throw new Error("Malumotlarni yaratishda xatolik!");
	return resp.data;
}
export async function update(id: string, payload: any) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.put(baseUrl + "/teacher/tests/edit/" + id, payload, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200) throw new Error("Malumotlarni yaratishda xatolik!");
	return resp.data;
}
