/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout";
import Auth from "./pages/auth/auth";
import { Toaster } from "react-hot-toast";
import Test from "./pages/test/test";
import Modal from "./components/modal";
import Students from "./pages/students/students";

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
						path='/students'
						element={<Layout children={<Students />} />}
					/>
					<Route
						path='/tests/:id'
						element={<Layout children={<Test />} />}
					/>
				</Routes>
			</BrowserRouter>
			<Modal />
		</>
	);
};

export default App;
