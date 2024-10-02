/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout";
import Auth from "./pages/auth/auth";
import { Toaster } from "react-hot-toast";
import Test from "./pages/test/test";
import Modal from "./components/modal";
import Students from "./pages/students/students";
import EnterTestPage from "./pages/enter/enterTest";
import { ITelegramUser, IWebApp } from "./types/types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface ITelegramContext {
	webApp?: IWebApp;
	user?: ITelegramUser;
}
export const TelegramContext = createContext<ITelegramContext>({});

const App = () => {
	const [webApp, setWebApp] = useState<IWebApp | null>(null);

	useEffect(() => {
		const app = (window as any).Telegram?.WebApp;
		if (app) {
			app.ready();
			setWebApp(app);
		}
	}, []);
	const value = useMemo(() => {
		return webApp
			? {
					webApp,
					unsafeData: webApp.initDataUnsafe,
					user: webApp.initDataUnsafe.user,
			  }
			: {};
	}, [webApp]);
	return (
		<TelegramContext.Provider value={value}>
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
					<Route
						path='/entertest/:id'
						element={<EnterTestPage />}
					/>
				</Routes>
			</BrowserRouter>
			<Modal />
		</TelegramContext.Provider>
	);
};

export default App;

export const useTelegram = () => useContext(TelegramContext);
