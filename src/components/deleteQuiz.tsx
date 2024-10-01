/** @format */

import {
	Button,
	DialogBody,
	DialogFooter,
	Typography,
} from "@material-tailwind/react";
import useTestStore from "../zustand/test";
import useModalStore from "../zustand/modal";
import { deleteQuiz } from "../actions";
import toast from "react-hot-toast";

const DeleteQuiz = () => {
	const { close } = useModalStore();
	const { id, currentQuiz, removeQuiz } = useTestStore();
	async function handleClick() {
		const fetchedData = deleteQuiz(id, currentQuiz!.id);
		try {
			close();
			await toast.promise(fetchedData, {
				loading: "Savol o'chirilmoqda...",
				error: "Savolni o'chirishda xatolik!",
				success: "Savol o'chirildi!",
			});
			removeQuiz(currentQuiz!.id);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<DialogBody>
				<Typography className='text-xl'>
					Siz aynan shu savolni o'chirmoqchimisiz? Buni tastiqlashingiz lozim!
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
					type='submit'
					variant='gradient'
					color='gray'
					onClick={handleClick}>
					Tastiqlayman
				</Button>
			</DialogFooter>
		</>
	);
};

export default DeleteQuiz;
