/** @format */

import { useEffect, useState } from "react";
import { getAllTests } from "../../actions";
import useUserData from "../../zustand/user";
import useTestsStore from "../../zustand/tests";
import TestCard from "./components/test.card";
import { Spinner } from "@material-tailwind/react";
import NotFound from "../../components/notFound";

const Home = () => {
	const { tests, giveAll } = useTestsStore();
	const { giveUser } = useUserData();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const payload = localStorage.getItem("user");
		if (payload && payload.length > 0) {
			const datas = JSON.parse(payload);
			giveUser(datas);
		}
		getAllTests().then((e) => {
			giveAll(e);
			setLoading(false);
		});
	}, []);
	return (
		<>
			<main className='relative h-full'>
				{loading ? (
					<div className='h-full flex flex-col items-center justify-center'>
						<Spinner className='w-10 h-10' />
						<span className='text-xl'>Malumotlar yuklanmoqda...</span>
					</div>
				) : tests.length === 0 ? (
					<NotFound />
				) : (
					<div className='flex justify-center gap-5 flex-wrap pt-4'>
						{tests.map((e) => (
							<TestCard
								{...e}
								key={e.id}
							/>
						))}
					</div>
				)}
			</main>
		</>
	);
};

export default Home;
