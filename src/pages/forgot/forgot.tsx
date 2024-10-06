/** @format */

import { Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import PhoneInput from "react-phone-number-input/input";
import { forgotValidator } from "../../validators/login.validator";
import { forgotPassword } from "../../actions";
import { useTelegram } from "../../App";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
	phoneNumber: "+998",
};

const Forgot = () => {
	const { user } = useTelegram();
	const navigate = useNavigate();
	const { handleSubmit, handleChange, handleBlur, isSubmitting, errors } =
		useFormik({ initialValues, validationSchema: forgotValidator, onSubmit });
	async function onSubmit(values: { phoneNumber: string }) {
		try {
			await forgotPassword({
				...values,
				telegramId: user ? user.id + "" : undefined,
			});
			navigate("/auth");
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='h-full grid place-items-center'>
			<form
				onSubmit={handleSubmit}
				className='max-w-[382px] w-full px-4 border shadow py-5 rounded-xl mx-4 grid gap-5'>
				<div className='grid gap-3'>
					<Typography className='text-lg'>Telefon raqam</Typography>
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
				<Button
					type='submit'
					loading={isSubmitting}
					disabled={isSubmitting}>
					Yuborish
				</Button>
				<Link
					to={"/auth"}
					className='text-gray-600 underline'>
					Idenfikatsitaga qaytish
				</Link>
			</form>
		</div>
	);
};

export default Forgot;
