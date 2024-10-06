/** @format */

import axios from "axios";
import toast from "react-hot-toast";
import cookie from "cookie";
import { addStudentI } from "./types/types";

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
export async function getOne(id: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.get(baseUrl + "/teacher/tests/getone/" + id, {
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
	if (resp.status !== 200)
		throw new Error("Malumotlarni tahrirlashda xatolik!");
	return resp.data;
}

export async function deleteTest(id: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.delete(baseUrl + "/teacher/tests/delete/" + id, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200)
		throw new Error("Malumotlarni o'chirishdada xatolik!");
	return resp.data;
}

export async function addQuiz(id: string, payload: any) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.post(baseUrl + "/teacher/tests/add/" + id, payload, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 201)
		throw new Error("Malumotlarni o'chirishdada xatolik!");
	return resp.data;
}

export async function updateQuiz(id: string, quizId: string, payload: any) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.put(
		baseUrl + "/teacher/tests/editquiz/" + id + "/" + quizId,
		payload,
		{
			headers: {
				Authorization: cookies.token,
			},
		}
	);
	if (resp.status !== 200)
		throw new Error("Malumotlarni o'chirishdada xatolik!");
	return resp.data;
}

export async function deleteQuiz(id: string, quizId: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.delete(
		baseUrl + "/teacher/tests/deletequiz/" + id + "/" + quizId,
		{
			headers: {
				Authorization: cookies.token,
			},
		}
	);
	if (resp.status !== 200)
		throw new Error("Malumotlarni o'chirishdada xatolik!");
	return resp.data;
}

export async function getAllStudents() {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.get(baseUrl + "/auth/student/getall", {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200)
		throw new Error("Malumotlarni o'chirishdada xatolik!");
	return resp.data;
}

export async function uploadFile(id: string, file: File) {
	const cookies = cookie.parse(document.cookie);
	const form = new FormData();
	form.append("file", file);
	const resp = await axios.post(
		baseUrl + "/teacher/tests/file/upload/" + id,
		form,
		{
			headers: {
				Authorization: cookies.token,
			},
		}
	);
	if (resp.status !== 200) throw new Error("Faylni yuklashda xatolik!");
	return resp.data;
}

export async function createStudent(payload: addStudentI) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.post(baseUrl + "/auth/student/create", payload, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 201) throw new Error("Malumotlarni yaratishda xatolik!");
	return resp.data;
}

export async function updateStudent(id: string, payload: addStudentI) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.put(baseUrl + "/auth/student/edit/" + id, payload, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200) throw new Error("Malumotlarni yaratishda xatolik!");
	return resp.data;
}

export async function deleteStudent(id: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.delete(baseUrl + "/auth/student/delete/" + id, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200)
		throw new Error("Malumotlarni o'chirishdada xatolik!");
	return resp.data;
}

export async function enterTest(payload: any) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.post(baseUrl + "/student/test/enter", payload, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200) throw new Error("Testga kirishda xatolik!");
	return resp.data;
}

export async function finishTest(payload: any) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.post(baseUrl + "/student/test/finished", payload, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200) throw new Error("Testga kirishda xatolik!");
	return resp.data;
}

export async function finishedTest(payload: any, navigate: () => void) {
	try {
		const phoneNumber = localStorage.getItem("phone");
		navigate();
		const fetchedData = finishTest({ ...payload, phoneNumber });
		await toast.promise(fetchedData, {
			error: "Xatolik yuz berdi! Qayta kirishingizni so'raymiz!",
			loading: "Tekshirilmoqda...",
			success:
				"Tekshirildi! Natijangiz sizga telegram va sms orqali yuboriladi!",
		});
		return "ok";
	} catch (error) {
		throw error;
	}
}

export async function getAllResults(phone: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.get(baseUrl + "/results/getAll?teacher=" + phone, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200) throw new Error("Natijalarni olishshda xatolik!");
	return resp.data;
}

export async function getSingleResult(id: string, phone: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.get(
		baseUrl + "/results/getone/" + id + "?teacher=" + phone,
		{
			headers: {
				Authorization: cookies.token,
			},
		}
	);
	if (resp.status !== 200) throw new Error("Natijalarni olishshda xatolik!");
	return resp.data;
}

export async function deleteSingleResult(id: string, phone: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.delete(
		baseUrl + "/results/delete/" + id + "?teacher=" + phone,
		{
			headers: {
				Authorization: cookies.token,
			},
		}
	);
	if (resp.status !== 200) throw new Error("Natijalarni olishshda xatolik!");
	return resp.data;
}

export async function getOneUser(id: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.get(baseUrl + "/auth/student/getone/" + id, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200) throw new Error("Natijalarni olishshda xatolik!");
	return resp.data;
}

export async function getOneTest(id: string) {
	const cookies = cookie.parse(document.cookie);
	const resp = await axios.get(baseUrl + "/teacher/tests/getone/" + id, {
		headers: {
			Authorization: cookies.token,
		},
	});
	if (resp.status !== 200) throw new Error("Natijalarni olishshda xatolik!");
	return resp.data;
}

export async function forgotPassword(values: {
	phoneNumber: string;
	telegramId?: string;
}) {
	const resp = axios.patch(baseUrl + "/auth/teacher/forget", values);
	const data = await toast.promise(resp, {
		loading: "Malumotlar tekshirilmoqda...",
		error: "Iltimos qayta urinib ko'ring!",
		success: "Jarayon yakunlandi! Iltimos kutib turing...",
	});
	if (data.status !== 200) throw new Error("Xatolik");
	return data.data;
}
