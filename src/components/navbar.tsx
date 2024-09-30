/** @format */

import { NavLink } from "react-router-dom";

const links = [
	{
		text: "Testlarim",
		url: "/",
	},
	{
		text: "Natijalar",
		url: "/results",
	},
	{
		text: "Sozlamalar",
		url: "/settings",
	},
];

const Navbar = () => {
	return (
		<nav className='hidden sm:flex gap-5 items-center'>
			{links.map((e) => (
				<NavLink
					key={e.url}
					to={e.url}
					className={"lg:opacity-70 lg:hover:opacity-100"}>
					{e.text}
				</NavLink>
			))}
		</nav>
	);
};

export default Navbar;
