/** @format */

import {
	Button,
	DialogBody,
	DialogFooter,
	Typography,
} from "@material-tailwind/react";
import useTestsStore from "../zustand/tests";
import { deleteTest } from "../actions";
import toast from "react-hot-toast";
import useModalStore from "../zustand/modal";

const DeleteTest = () => {
	const { deleteOne, currentTest, returnToBack } = useTestsStore();
	const { close } = useModalStore();

	async function deleteExist() {
		const fetchedData = deleteTest(currentTest!.id);
		try {
			close();
			deleteOne(currentTest!.id);
			await toast.promise(fetchedData, {
				loading: "O'chirilmoqda...",
				error: "O'chirishda xatolik",
				success: "Test o'chirildi!",
			});
		} catch (error) {
			returnToBack(currentTest!.id);
		}
	}

	return (
		<>
			<DialogBody>
				<Typography>
					Siz aynan shu testni o'chirib tashlamoqchimisiz? Buni tastiqlashingiz
					lozim!
				</Typography>
			</DialogBody>
			<DialogFooter className='space-x-2'>
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
					onClick={deleteExist}>
					Tastiqlayman
				</Button>
			</DialogFooter>
		</>
	);
};

export default DeleteTest;
