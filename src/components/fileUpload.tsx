/** @format */

import {
	Button,
	DialogBody,
	DialogFooter,
	Typography,
} from "@material-tailwind/react";
import { RiFileUploadLine } from "react-icons/ri";
import useModalStore from "../zustand/modal";
import { useRef, useState } from "react";
import { uploadFile } from "../actions";
import useTestsStore from "../zustand/tests";
import toast from "react-hot-toast";

const FileUpload = () => {
	const { currentTest, updateOne } = useTestsStore();
	const { close } = useModalStore();
	const [file, setFile] = useState<File | null>(null);
	const ref = useRef<HTMLInputElement>(null);
	function handleUpload() {
		if (!ref.current) return;
		ref.current.click();
	}
	async function handleSubmit() {
		try {
			if (!file) return;
			const fetchedData = uploadFile(currentTest!.id, file);
			close();
			const resp = await toast.promise(fetchedData, {
				error: "Faylni yuklashda xatolik!",
				loading: "Faylni yuklanmoqda...",
				success: "Fayl yuklandi!",
			});
			updateOne(currentTest!.id, resp);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<DialogBody>
				<div
					className='w-full h-[100px] rounded-sm bg-gray-100 grid place-items-center cursor-pointer'
					onClick={handleUpload}>
					<RiFileUploadLine
						size={50}
						color='#000'
					/>
					<Typography>Yuklash uchun bosing!</Typography>
				</div>
				<input
					onChange={(e) => {
						const file = e.target.files;
						if (!file || !file[0]) return;
						setFile(file[0]);
					}}
					ref={ref}
					type='file'
					className='hidden'
				/>
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
					disabled={!file}
					type='submit'
					variant='gradient'
					color='gray'
					onClick={handleSubmit}>
					Tastiqlayman
				</Button>
			</DialogFooter>
		</>
	);
};

export default FileUpload;
