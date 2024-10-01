/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout";
import Auth from "./pages/auth/auth";
import { Toaster } from "react-hot-toast";
import Test from "./pages/test/test";

const App = () => {
	return (
		<>
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route
						path='/auth'
						element={<Auth />}
					/>
					<Route
						path='/'
						element={<Layout children={<Home />} />}
					/>
					<Route
						path='/tests/:id'
						element={<Layout children={<Test />} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
