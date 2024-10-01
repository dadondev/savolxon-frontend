/** @format */

import { Button, IconButton, Input } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import PhoneInput from "react-phone-number-input/input";
import loginValidator from "../../../validators/login.validator";
import { login, loginPayloadI } from "../../../actions";
import { loginRespI } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";
import useUserData from "../../../zustand/user";

const initialValues = {
	phoneNumber: "",
	password: "",
};
const Login = () => {
	const { giveUser } = useUserData();
	const navigate = useNavigate();
	const { handleSubmit, handleBlur, handleChange, errors, isSubmitting } =
		useFormik({
			initialValues,
			onSubmit: handleLogin,
			validationSchema: loginValidator,
		});
	const [type, setType] = useState<"text" | "password">("password");

	async function handleLogin(values: loginPayloadI) {
		try {
			const data: loginRespI = await login(values);

			jsCookie.set("token", data.token, {
				expires: 60 * 60 * 10,
			});
			navigate("/");
			giveUser(data);
			localStorage.setItem("user", JSON.stringify(data));
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<form
			className='grid gap-2'
			onSubmit={handleSubmit}>
			<div className='relative'>
				<Typography className='text-sm'>Telefon raqam</Typography>
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
			</div>
			<div className='relative'>
				<Typography className='text-sm'>Parol</Typography>
				<div className='flex gap-3'>
					<Input
						disabled={isSubmitting}
						type={type}
						crossOrigin={"password"}
						onChange={handleChange}
						onBlur={handleBlur}
						name='password'
					/>
					<IconButton
						variant='gradient'
						className='w-14'
						onClick={() => setType(type === "password" ? "text" : "password")}>
						{type === "password" ? (
							<BsEye size={16} />
						) : (
							<BsEyeSlash size={16} />
						)}
					</IconButton>
				</div>
				{errors.password && (
					<Typography
						variant='small'
						color='red'
						data-valid={errors.password}
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
						{errors.password}
					</Typography>
				)}
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

export default Login;
