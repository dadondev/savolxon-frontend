/** @format */

import { useFormik } from "formik";
import useModalStore from "../zustand/modal";
import useTestsStore from "../zustand/tests";
import useUserData from "../zustand/user";
import createTestValidator from "../validators/createtest.validator";
import { createTest, createTestI } from "../actions";
import toast from "react-hot-toast";
import {
	Button,
	DialogBody,
	DialogFooter,
	Input,
	Typography,
} from "@material-tailwind/react";

const initialValues = {
	name: "",
};

function CreateTestModal() {
	const { giveOne } = useTestsStore();
	const { id } = useUserData();
	const { close } = useModalStore();
	const { handleChange, handleBlur, handleSubmit, isSubmitting, errors } =
		useFormik({
			initialValues,
			validationSchema: createTestValidator,
			onSubmit,
		});
	async function onSubmit(values = initialValues) {
		const payload: createTestI = { ...values, teacher_id: id };
		const fetched = createTest(payload);
		close();
		const data = await toast.promise(fetched, {
			loading: "Yaratilmoqda...",
			error: "Xatolik yuz berdi!",
			success: "Yaratildi!",
		});
		giveOne(data);
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<DialogBody>
					<div className='grid gap-3'>
						<Typography
							className='-mb-1'
							color='blue-gray'
							variant='h6'>
							Nomi
						</Typography>
						<Input
							onBlur={handleBlur}
							onChange={handleChange}
							crossOrigin={"text"}
							name='name'
							type='text'
							label='Nomi'
							disabled={isSubmitting}
						/>
						{errors.name && (
							<Typography
								variant='small'
								color='red'
								data-valid={errors.name}
								className='mt-2 flex items-center gap-1 font-normal'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='-mt-px h-4 w-4'>
									<path
										fillRule='evenodd'
										d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
										clipRule='evenodd'
									/>
								</svg>
								{errors.name}
							</Typography>
						)}
					</div>
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
						loading={isSubmitting}
						type='submit'
						variant='gradient'
						color='gray'>
						Yaratish
					</Button>
				</DialogFooter>
			</form>
		</>
	);
}

export default CreateTestModal;
