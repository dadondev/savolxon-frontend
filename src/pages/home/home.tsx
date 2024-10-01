/** @format */

import { useEffect, useState } from "react";
import { getAllTests } from "../../actions";
import { SpeedDialWithTextOutside } from "../../components/menu";
import Modal from "../../components/modal";
import useUserData from "../../zustand/user";
import { loginRespI } from "../../types/types";
import useTestsStore from "../../zustand/tests";
import TestCard from "./components/test.card";
import { Spinner } from "@material-tailwind/react";

const Home = () => {
	const { tests, giveAll } = useTestsStore();
	const [data, setData] = useState(tests);
	const { id, giveUser } = useUserData();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const payload: loginRespI = JSON.parse(localStorage.getItem("user") || "");
		if (id.length === 0 && payload.id) giveUser(payload);
		getAllTests().then((e) => {
			giveAll(e);
			setLoading(false);
		});
	}, []);
	useEffect(() => {
		setData(tests);
	}, [tests]);
	return (
		<>
			<main className='relative h-full'>
				<SpeedDialWithTextOutside />

				{loading ? (
					<div className='h-full flex flex-col items-center justify-center'>
						<Spinner className='w-10 h-10' />
						<span className='text-xl'>Malumotlar yuklanmoqda...</span>
					</div>
				) : (
					<div className='flex justify-center gap-5 flex-wrap pt-4'>
						{data.map((e) => (
							<TestCard
								{...e}
								key={e.id}
							/>
						))}
					</div>
				)}
			</main>
			<Modal />
		</>
	);
};

export default Home;
