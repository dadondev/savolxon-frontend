/** @format */

import { Typography } from "@material-tailwind/react";

const NotFound = () => {
	return (
		<div className='grid gap-5 items-center justify-center mt-10'>
			<img
				className='max-w-[150px]'
				src='/nodata.svg'
				alt='Not Found'
			/>
			<Typography
				as={"h2"}
				className='text-xl font-medium text-gray-600'>
				Malumotlar topilmadi!
			</Typography>
		</div>
	);
};

export default NotFound;
