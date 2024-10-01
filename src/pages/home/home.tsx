/** @format */

import { useEffect } from "react";
import { getAllTests } from "../../actions";
import { SpeedDialWithTextOutside } from "../../components/menu";

const Home = () => {
	useEffect(() => {
		getAllTests().then((e) => {
			console.log(e);
		});
	}, []);
	return (
		<main className='relative'>
			<SpeedDialWithTextOutside />
		</main>
	);
};

export default Home;
