/** @format */
import * as yup from "yup";

const enterTestValidator = yup.object().shape({
	phoneNumber: yup
		.string()
		.required("Telefon raqamni kiritish majburiy!")
		.min(13, "Raqam juda qisqa!")
		.max(13, "Raqam juda uzun!"),
	testCode: yup
		.string()
		.required("Kodni kiritish majburiy!")
		.min(6, "Kod juda qisqa!")
		.max(6, "Kod juda uzun!"),
});

export default enterTestValidator;
