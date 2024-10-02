/** @format */

import { Button, Input } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import PhoneInput from "react-phone-number-input/input";
import enterTestValidator from "../../../validators/entertest.validator";
import { enterTest } from "../../../actions";
import toast from "react-hot-toast";
import useEnterTestStore from "../../../zustand/entertest";
import { useNavigate } from "react-router-dom";

const initialValues = { phoneNumber: "+998", testCode: "" };

const EnterTest = () => {
	const navigate = useNavigate();
	const { giveAll } = useEnterTestStore();
	const { handleBlur, handleChange, handleSubmit, errors, isSubmitting } =
		useFormik({
			initialValues,
			validationSchema: enterTestValidator,
			onSubmit,
		});
	async function onSubmit(values = initialValues) {
		try {
			const fetchedData = enterTest(values);
			const resp = await toast.promise(fetchedData, {
				loading: "Malumotlar tekshirilmoqda...",
				error: "Iltimos ma'lumotlarni qayta tekshirib ko'ring!",
				success: "Jarayon yakunlandi iltimos kutib turing!",
			});
			giveAll(resp);
			navigate("/entertest/" + resp.id);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<form
			className='grid gap-2'
			onSubmit={handleSubmit}>
			<div className='grid gap-2'>
				<Typography>Telefon raqam</Typography>
				<div className='relative w-full min-w-[200px]'>
					<PhoneInput
						disabled={isSubmitting}
						country='UZ'
						value={"+998"}
						onChange={(value) =>
							handleChange({
								target: { value, name: "phoneNumber" },
								name: "phoneNumber",
							})
						}
						onBlur={handleBlur}
						name='phoneNumber'
						className='peer w-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
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
			</div>
			<div className='grid gap-2'>
				<Typography className='text-sm'>Test kodi</Typography>
				<div className='relative w-full min-w-[200px]'>
					<Input
						type={"number"}
						name='testCode'
						onChange={handleChange}
						onBlur={handleBlur}
						inputMode='text'
						crossOrigin={"password"}
						className='focus:border-gray-900 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
					/>
					{errors.testCode && (
						<Typography
							variant='small'
							color='red'
							data-valid={errors.testCode}
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
							{errors.testCode}
						</Typography>
					)}
				</div>
			</div>
			<Button
				type='submit'
				loading={isSubmitting}
				disabled={isSubmitting}
				variant='gradient'
				className='mt-4 w-auto mx-auto rounded-full'>
				Kirish
			</Button>
		</form>
	);
};

export default EnterTest;
