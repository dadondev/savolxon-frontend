/** @format */

import * as yup from "yup";
const createTest = yup.object().shape({
	name: yup
		.string()
		.required("Test nomini kiritish majburiy!")
		.min(3, "Test nomi uzunligi juda qisqa!")
		.max(100, "Test nomi uzunligi juda uzun!"),
});

export default createTest;
