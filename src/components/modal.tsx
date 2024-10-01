/** @format */

import { Dialog, DialogHeader, Typography } from "@material-tailwind/react";
import useModalStore from "../zustand/modal";
import CreateTestModal from "./createTest.modal";
import UpdateTest from "./updateTest";
import { XCircleIcon } from "@heroicons/react/24/outline";

const modals = {
	createTest: <CreateTestModal />,
	deleteTest: <></>,
	updateTest: <UpdateTest></UpdateTest>,
};

const Modal = () => {
	const { open, close, modal } = useModalStore();

	return (
		<Dialog
			handler={close}
			open={open}
			size='xs'>
			<div className='flex items-center justify-between'>
				<DialogHeader className='flex flex-col items-start'>
					<Typography
						className='mb-1'
						variant='h4'>
						{modal === "createTest"
							? "Test qo'shish"
							: modal === "deleteTest"
							? "Testni o'chirish"
							: "Testni tahrirlash"}
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
