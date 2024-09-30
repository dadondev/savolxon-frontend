/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout";
import Auth from "./pages/auth/auth";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const telegram: any = "Telegram" in window ? window.Telegram : "";

const App = () => {
	useEffect(() => {
		if (telegram.Telegram.WebApp) telegram.Telegram.WebApp.expand();
	}, []);

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
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
