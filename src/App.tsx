/** @format */

import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout";
import Auth from "./pages/auth/auth";
import { Toaster } from "react-hot-toast";

const App = () => {
	const router = createHashRouter([
		{
			path: "/auth",
			element: <Auth />,
		},
		{
			path: "*",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
			],
		},
	]);
	return (
		<>
			<Toaster />
			<RouterProvider router={router}></RouterProvider>
		</>
	);
};

export default App;
