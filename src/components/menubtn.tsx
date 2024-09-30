/** @format */

import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { mobileDrawer } from "../context/mobileDrawer";

const MenuBtn = () => {
	const { setOpen, open } = useContext(mobileDrawer);
	return (
		<Button
			onClick={() => setOpen(!open)}
			variant='gradient'
			className='px-3 py-2 sm:hidden'>
			<RiMenu4Line size={20} />
		</Button>
	);
};

export default MenuBtn;
