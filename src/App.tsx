/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout";
import Auth from "./pages/auth/auth";
import { Toaster } from "react-hot-toast";
import Test from "./pages/test/test";
import Modal from "./components/modal";
import EnterTestPage from "./pages/enter/enterTest";
import { ITelegramUser, IWebApp } from "./types/types";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Results from "./pages/results/results";
import SingleResult from "./pages/singleresult/singleResult";
import Settings from "./pages/settings/settings";
import Forgot from "./pages/forgot/forgot";

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
						path='/tests/:id'
						element={<Layout children={<Test />} />}
					/>
					<Route
						path='/entertest/:id'
						element={<EnterTestPage />}
					/>
					<Route
						path='/results'
						element={<Layout children={<Results />} />}
					/>
					<Route
						path='/results/:id'
						element={<Layout children={<SingleResult />} />}
					/>
					<Route
						path='/settings'
						element={<Layout children={<Settings />} />}
					/>
					<Route
						path='/forgot'
						element={<Forgot />}
					/>
				</Routes>
			</BrowserRouter>
			<Modal />
		</TelegramContext.Provider>
	);
};

export default App;

export const useTelegram = () => useContext(TelegramContext);
