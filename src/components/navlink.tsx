/** @format */

import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FooterLink = ({
	icon,
	text,
	url,
}: {
	icon: ReactNode;
	text: string;
	url: string;
}) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	function handleNavigate() {
		navigate(url);
	}

	return (
		<Button
			className='flex flex-col justify-center items-center gap-2 data-[active=true]:text-black/50 !max-w-[100px] w-full'
			onClick={handleNavigate}
			variant='text'
			data-active={pathname === url}>
			{icon}
			<span>{text}</span>
		</Button>
	);
};

export default FooterLink;
