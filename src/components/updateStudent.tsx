/** @format */

import { Button, DialogFooter, Input } from "@material-tailwind/react";
import { DialogBody, Typography } from "@material-tailwind/react";
import useModalStore from "../zustand/modal";
import { useFormik } from "formik";
import addStudentValidator from "../validators/addstudent.validator";
import PhoneInput from "react-phone-number-input/input";
import { createStudent, updateStudent } from "../actions";
import toast from "react-hot-toast";
import useStudentStore from "../zustand/student";
import { addStudentI } from "../types/types";
import { useEffect, useState } from "react";

const initialValues = {
	firstName: "",
	lastName: "",
	phoneNumber: "",
};

const UpdateStudent = () => {
	const { updateOne, currentStudent } = useStudentStore();
	const [data, setData] = useState(currentStudent || initialValues);
	const { close } = useModalStore();
	const { handleBlur, handleChange, handleSubmit, errors, isSubmitting } =
		useFormik({
			initialValues: data,
			validationSchema: addStudentValidator,
			onSubmit,
		});
	async function onSubmit(values: addStudentI) {
		try {
			const fetchedData = updateStudent(currentStudent!.id, values);
			close();
			const resp = await toast.promise(fetchedData, {
				error: "O'quvchi tahrirlashda xatolik",
				loading: "O'quvchi tahrirlanmoqda...",
				success: "O'quvchi tahrirlandi!",
			});
			updateOne(currentStudent!.id, resp);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		setData({ ...initialValues, ...currentStudent });
	}, [currentStudent]);
	return (
		<form onSubmit={handleSubmit}>
			<DialogBody className='grid gap-3'>
				<div className='grid gap-3'>
					<Typography>Ismi</Typography>
					<Input
						crossOrigin={"name"}
						name='firstName'
						label='Ismi'
						type='text'
						onChange={handleChange}
						onBlur={handleBlur}
						defaultValue={data.firstName}
					/>
					{errors.firstName && (
						<Typography
							variant='small'
							color='red'
							data-valid={errors.phoneNumber}
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
							{errors.firstName}
						</Typography>
					)}
				</div>
				<div className='grid gap-3'>
					<Typography>Familya</Typography>
					<Input
						crossOrigin={"surname"}
						name='lastName'
						label='Familya'
						type='text'
						onChange={handleChange}
						onBlur={handleBlur}
						defaultValue={data.lastName}
					/>
					{errors.lastName && (
						<Typography
							variant='small'
							color='red'
							data-valid={errors.phoneNumber}
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
							{errors.lastName}
						</Typography>
					)}
				</div>
				<div className='grid gap-3'>
					<Typography>Telefon raqam</Typography>
					<PhoneInput
						disabled={isSubmitting}
						country='UZ'
						value={data.phoneNumber}
						onChange={(value) =>
							handleChange({
								target: { value, name: "phoneNumber" },
								name: "phoneNumber",
							})
						}
						onBlur={handleBlur}
						name='phoneNumber'
						className='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
					/>
					{errors.phoneNumber && (
						<Typography
							variant='small'
							color='red'
							data-valid={errors.phoneNumber}
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
							{errors.phoneNumber}
						</Typography>
					)}
				</div>
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
					loading={isSubmitting}
					type='submit'
					variant='gradient'
					color='gray'>
					Tastiqlayman
				</Button>
			</DialogFooter>
		</form>
	);
};

export default UpdateStudent;
