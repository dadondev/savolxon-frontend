/** @format */

import {
	Button,
	DialogBody,
	DialogFooter,
	Typography,
} from "@material-tailwind/react";
import useStudentStore from "../zustand/student";
import useModalStore from "../zustand/modal";
import { deleteStudent } from "../actions";
import toast from "react-hot-toast";

const DeleteStudent = () => {
	const { currentStudent, deleteOne } = useStudentStore();
	const { close } = useModalStore();
	async function handleClick() {
		try {
			const fetchedData = deleteStudent(currentStudent!.id);
			close();
			await toast.promise(fetchedData, {
				error: "O'chirishda xatolik!",
				loading: "O'chirilmoqda...",
				success: "O'chirildi",
			});
			deleteOne(currentStudent!.id);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<DialogBody>
				<Typography>
					Siz aynan shu o'quvchini o'chirmoqchimisiz? Buni tastiqlashingiz
					lozim!
				</Typography>
			</DialogBody>
			<DialogFooter>
				<Button
					onClick={close}
					type='button'
					variant='text'
					color='gray'>
					Bekor qilish
				</Button>
				<Button
					onClick={handleClick}
					type='submit'
					variant='gradient'
					color='gray'>
					Tastiqlayman
				</Button>
			</DialogFooter>
		</>
	);
};

export default DeleteStudent;
