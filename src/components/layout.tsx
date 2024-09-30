/** @format */

import { Link, Navigate } from "react-router-dom";
import cookie from "cookie";
import { ReactNode } from "react";
import ProviderMobileDrawer from "../context/mobileDrawer";
import MenuBtn from "./menubtn";
import MobileMenu from "./menuDrawer";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {
	const cookies = cookie.parse(document.cookie);
	if (!cookies.token) return <Navigate to={"/auth"}></Navigate>;
	return (
		<ProviderMobileDrawer>
			<div>
				<header className='pb-3 border-b backdrop-blur-md'>
					<div className='container mx-auto px-5 sm:px-0 flex justify-between items-center'>
						<Link
							to={"/"}
							className='text-xl flex items-end gap-4'>
							<img
								src='/logo.png'
								width={50}
								height={50}
							/>
						</Link>
						<div className='mt-2'>
							<MenuBtn />
							<Navbar />
						</div>
					</div>
				</header>
				{children}
			</div>
			<MobileMenu />
		</ProviderMobileDrawer>
	);
};

export default Layout;
