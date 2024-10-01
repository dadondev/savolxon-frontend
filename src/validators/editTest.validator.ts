/** @format */

import * as yup from "yup";
const editTestValidator = yup.object().shape({
	name: yup
		.string()
		.required("Test nomini kiritish majburiy!")
		.min(3, "Test nomi uzunligi juda qisqa!")
		.max(100, "Test nomi uzunligi juda uzun!"),
	start_date: yup.string().required("Boshlanish sanasini kiritish majburiy!"),
	finish_date: yup.string().required("Tugash sanasini kiritish majburiy!"),
});

export default editTestValidator;
