/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout";

const App = () => {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
			],
		},
	]);
	return <RouterProvider router={router}></RouterProvider>;
};

export default App;
