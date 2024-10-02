/** @format */

import * as yup from "yup";
const addStudentValidator = yup.object().shape({
	firstName: yup
		.string()
		.required("Ismni kiritish majburiy")
		.min(3, "Ismning uzunligi juda qisqa!"),

	lastName: yup
		.string()
		.required("Familyani kiritish majburiy")
		.min(3, "Familyaning uzunligi juda qisqa!"),
	phoneNumber: yup
		.string()
		.required("Telefon raqamni kiritish majburiy!")
		.min(13, "Raqam juda qisqa!")
		.max(13, "Raqam juda uzun!"),
});

export default addStudentValidator;
