/** @format */

import { Navigate, useNavigate } from "react-router-dom";
import useEnterTestStore from "../../zustand/entertest";
import { Typography } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import QuizSlider from "./components/quizSlider";
import { finishedTest } from "../../actions";
import useSolvingsStore from "../../zustand/solvings";
import { useTelegram } from "../../App";

const EnterTestPage = () => {
	const navigate = useNavigate();
	const { id, name, quizs } = useEnterTestStore();
	const { results } = useSolvingsStore();
	const { user } = useTelegram();

	if (id.length === 0 || quizs.length === 0 || name.length === 0)
		return <Navigate to='/auth'></Navigate>;
	const [timer, setTimer] = useState(
		(quizs.length > 9 ? quizs.length : "0" + quizs.length) + ":00"
	);
	const intervalRef = useRef(0);

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setTimer((prev) => {
				const time = manageTimer(prev);
				if (time === "00:00") {
					finishedTest(
						{ results, telegramId: user?.id, testId: id, phoneNumber: "" },
						() => navigate("/auth")
					);
					clearInterval(intervalRef.current);
					return "00:00";
				}
				return time;
			});
		}, 1000);

		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<main className='h-full'>
			<div className='border-b px-3'>
				<div className='flex justify-between items-center container mx-auto py-4'>
					<Typography className='text-2xl font-medium'>{name}</Typography>
					<Typography className='text-xl font-medium'>{timer}</Typography>
				</div>
			</div>
			<div className='pt-5'>
				<QuizSlider />
			</div>
		</main>
	);
};

export default EnterTestPage;

function manageTimer(time: string) {
	const minutes = time.slice(0, 2);
	const seconds = time.slice(3);

	const secondsReduce = +seconds - 1;
	const minutesReduce = +minutes - 1;

	if (secondsReduce > 9) {
		return minutes + ":" + secondsReduce;
	}

	if (secondsReduce > 0 && secondsReduce <= 9) {
		return minutes + ":0" + secondsReduce;
	}

	if (secondsReduce === 0 && minutesReduce === 0) {
		return "01:00";
	}

	if (secondsReduce === -1 && minutesReduce >= 0) {
		return (minutesReduce > 9 ? minutesReduce : "0" + minutesReduce) + ":59";
	}

	if (secondsReduce >= 0 && minutesReduce > 0) {
		return (minutesReduce > 9 ? minutesReduce : "0" + minutesReduce) + ":00";
	}
	return "00:00";
}
