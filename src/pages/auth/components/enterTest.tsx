/** @format */

import { Button, Input } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";

const EnterTest = () => {
	const [loading, setLoading] = useState(false);
	return (
		<div className='grid gap-2'>
			<div>
				<Typography className='text-sm'>Telefon raqam</Typography>
				<div className='relative w-full min-w-[200px] h-10'>
					<PhoneInput
						country='UZ'
						value={"+998"}
						onChange={(value) => value}
						className='peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
					/>
				</div>
			</div>
			<div>
				<Typography className='text-sm'>Test kodi</Typography>
				<div className='relative w-full min-w-[200px] h-10 flex gap-3'>
					<Input
						max={6}
						type={"number"}
						inputMode='text'
						crossOrigin={"password"}
						className='focus:border-gray-900 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
					/>
				</div>
			</div>
			<Button
				loading={loading}
				onClick={() => setLoading(!loading)}
				disabled={loading}
				variant='gradient'
				className='mt-4 w-auto mx-auto rounded-full'>
				Kirish
			</Button>
		</div>
	);
};

export default EnterTest;
