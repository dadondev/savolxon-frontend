/** @format */

import { Dialog, DialogHeader, Typography } from "@material-tailwind/react";
import useModalStore from "../zustand/modal";
import CreateTestModal from "./createTest.modal";
import UpdateTest from "./updateTest";
import { XCircleIcon } from "@heroicons/react/24/outline";
import DeleteTest from "./deleteTest";
import AddQuiz from "./addQuiz";
import UpdateQuiz from "./updateQuiz";
import DeleteQuiz from "./deleteQuiz";
import FileUpload from "./fileUpload";
import AddStudent from "./addStudent";
import UpdateStudent from "./updateStudent";
import DeleteStudent from "./deleteStudent";

const modals = {
	createTest: <CreateTestModal />,
	deleteTest: <DeleteTest></DeleteTest>,
	updateTest: <UpdateTest></UpdateTest>,
	addQuiz: <AddQuiz />,
	updateQuiz: <UpdateQuiz></UpdateQuiz>,
	deleteQuiz: <DeleteQuiz></DeleteQuiz>,
	uploadFile: <FileUpload></FileUpload>,
	addStudent: <AddStudent></AddStudent>,
	deleteStudent: <DeleteStudent></DeleteStudent>,
	updateStudent: <UpdateStudent></UpdateStudent>,
};

const Modal = () => {
	const { open, close, modal } = useModalStore();

	return (
		<Dialog
			handler={close}
			open={open}
			size='xs'
			className='max-w-[90dvw] sm:max-w-full overflow-auto max-h-full'>
			<div className='flex items-center justify-between'>
				<DialogHeader className='flex flex-col items-start'>
					<Typography
						className='mb-1'
						variant='h4'>
						{modal === "createTest"
							? "Test qo'shish"
							: modal === "deleteTest"
							? "Testni o'chirish"
							: modal === "updateTest"
							? "Testni tahrirlash"
							: modal === "addQuiz"
							? "Savol qo'shish"
							: modal === "updateQuiz"
							? "Savolni tahrirlash"
							: modal === "deleteQuiz"
							? "Savolni o'chirish"
							: modal === "addStudent"
							? "O'quvchi qo'shish"
							: modal === "deleteStudent"
							? "O'quvchi o'chirish"
							: modal === "updateStudent"
							? "O'quvchini tahrirlash"
							: "Faylni yuklash"}
					</Typography>
				</DialogHeader>
				<XCircleIcon
					onClick={close}
					className='w-8 h-8 text-black mr-2 cursor-pointer'
				/>
			</div>
			{modals[modal]}
		</Dialog>
	);
};

export default Modal;
