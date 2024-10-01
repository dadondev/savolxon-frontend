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

const modals = {
	createTest: <CreateTestModal />,
	deleteTest: <DeleteTest></DeleteTest>,
	updateTest: <UpdateTest></UpdateTest>,
	addQuiz: <AddQuiz />,
	updateQuiz: <UpdateQuiz></UpdateQuiz>,
	deleteQuiz: <DeleteQuiz></DeleteQuiz>,
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
							: "Savolni o'chirish"}
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
