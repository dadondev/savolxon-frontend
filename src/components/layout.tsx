/** @format */

import { Navigate } from "react-router-dom";
import cookie from "cookie";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
	const cookies = cookie.parse(document.cookie);
	if (!cookies.token) return <Navigate to={"/auth"}></Navigate>;
	return (
		<div>
			<header>header</header>
			{children}
		</div>
	);
};

export default Layout;
