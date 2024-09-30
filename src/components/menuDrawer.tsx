/** @format */

import {
	Button,
	Drawer,
	IconButton,
	Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { mobileDrawer } from "../context/mobileDrawer";
import { BsFolder } from "react-icons/bs";
import { BiChart } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
	const navigate = useNavigate();
	const { open, setOpen } = useContext(mobileDrawer);
	const handleNavigate = (url: string) => {
		navigate(url);
	};
	return (
		<Drawer
			placement='bottom'
			open={open}
			onClose={() => setOpen(!open)}
			className='p-4 sm:hidden'>
			<div className='mb-6 flex items-center justify-between'>
				<Typography
					variant='h5'
					color='blue-gray'>
					O'zingizga kerakli menyuni tanlang!
				</Typography>
				<IconButton
					variant='text'
					color='blue-gray'
					onClick={() => setOpen(!open)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						className='h-5 w-5'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</IconButton>
			</div>
			<div className='flex flex-wrap justify-center gap-5'>
				<Button
					onClick={() => handleNavigate("/")}
					variant='outlined'
					className='grid gap-2 min-w-[100px] justify-center items-center place-items-center'>
					<BsFolder size={30} />
					<span>Testlarim</span>
				</Button>
				<Button
					onClick={() => handleNavigate("/results")}
					variant='outlined'
					className='grid gap-2 max-w-[130px] justify-center items-center place-items-center'>
					<BiChart size={30} />
					<span>Natijalar</span>
				</Button>
				<Button
					onClick={() => handleNavigate("/settings")}
					variant='outlined'
					className='grid gap-2 max-w-[130px] justify-center items-center place-items-center'>
					<IoSettings size={30} />
					<span>Sozlamalar</span>
				</Button>
			</div>
		</Drawer>
	);
};

export default MobileMenu;
