/** @format */

import * as yup from "yup";
const loginValidator = yup.object().shape({
	phoneNumber: yup
		.string()
		.required("Telefon raqamni kiritish majburiy!")
		.min(13, "Raqam juda qisqa!")
		.max(13, "Raqam juda uzun!"),
	password: yup
		.string()
		.required("Parolni kiritish majburiy!")
		.min(8, "Parol juda qisqa!")
		.max(16, "Parol juda uzun!"),
});

export default loginValidator;
