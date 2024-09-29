/** @format */

import { Navigate, Outlet } from "react-router-dom";
import cookie from "cookie";

const Layout = () => {
	const cookies = cookie.parse(document.cookie);
	if (!cookies.token && document.location.pathname !== "/auth")
		return <Navigate to={"/auth"}></Navigate>;
	return (
		<div>
			<header>header</header>
			<Outlet />
		</div>
	);
};

export default Layout;
