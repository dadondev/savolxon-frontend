/** @format */

import { Button } from "@material-tailwind/react";
import { FiLogOut } from "react-icons/fi";
import { MdVpnKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";
import { Badge } from "@material-tailwind/react";

const Settings = () => {
	const navigate = useNavigate();
	function handleLogOut() {
		localStorage.clear();
		jsCookie.remove("token");
		navigate("/auth");
	}
	return (
		<div className='pt-5 flex justify-center gap-5 flex-wrap'>
			<Button
				className='flex gap-4 items-center'
				variant='gradient'>
				<MdVpnKey size={24} />
				<span className='text-sm'>Parolni o'zgartirish</span>
				<Badge content='beta'></Badge>
			</Button>
			<Button
				className='flex gap-4 items-center bg-red-500'
				onClick={handleLogOut}>
				<FiLogOut size={24} />
				<span className='text-sm'>Chiqish</span>
			</Button>
		</div>
	);
};

export default Settings;
