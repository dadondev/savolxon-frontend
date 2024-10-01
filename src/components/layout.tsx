/** @format */

import { Link, Navigate } from "react-router-dom";
import cookie from "cookie";
import { ReactNode } from "react";
import Navbar from "./navbar";
import { FaFolder } from "react-icons/fa";
import FooterLink from "./navlink";
import { GrScorecard } from "react-icons/gr";
import { RiSettings4Fill } from "react-icons/ri";
import { UserGroupIcon } from "@heroicons/react/24/outline";

const Layout = ({ children }: { children: ReactNode }) => {
	const cookies = cookie.parse(document.cookie);
	if (!cookies.token) return <Navigate to={"/auth"}></Navigate>;
	return (
		<div className='h-full grid grid-rows-[auto_1fr_auto]'>
			<header className='pb-3 border-b backdrop-blur-md z-50 sticky top-0'>
				<div className='container mx-auto px-5 sm:px-0 flex justify-between items-center'>
					<Link
						to={"/"}
						className='text-xl flex items-end gap-4'>
						<img
							src='/logov2.png'
							width={50}
							height={50}
						/>
					</Link>
					<div className='mt-2'>
						<Navbar />
					</div>
				</div>
			</header>
			<div className='h-full'>{children}</div>
			<footer className='sm:hidden bg-blue-gray-50 sticky bottom-0'>
				<div className='container mx-auto border-t flex justify-between'>
					<FooterLink
						url='/'
						icon={<FaFolder size={20} />}
						text='Testlarim'
					/>
					<FooterLink
						url='/results'
						icon={<GrScorecard size={20} />}
						text='Natijalar'
					/>
					<FooterLink
						url='/students'
						icon={<UserGroupIcon className='w-5 h-5' />}
						text="O'quvchilar"
					/>
					<FooterLink
						url='/settings'
						icon={<RiSettings4Fill size={20} />}
						text='Sozlamalar'
					/>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
