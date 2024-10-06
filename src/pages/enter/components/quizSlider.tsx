/** @format */

import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import useEnterTestStore from "../../../zustand/entertest";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import useSolvingsStore from "../../../zustand/solvings";
import { finishedTest } from "../../../actions";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../../App";

const QuizSlider = () => {
	const navigate = useNavigate();
	const { user } = useTelegram();
	const { quizs } = useEnterTestStore();
	const [current, setCurrent] = useState(0);
	const [selected, setSelected] = useState<number>();
	const { pushSolving, results } = useSolvingsStore();
	const { id } = useEnterTestStore();

	function handleNext() {
		const nextRes = foundResult("next");
		if (typeof selected === "undefined") return;
		if (current !== quizs.length - 1) SyncResult();
		setSelected(nextRes === -1 ? undefined : nextRes);
		setCurrent(current + 1);
	}
	function SyncResult() {
		if (typeof selected === "undefined") return;
		const data = {
			id: quizs[current].id,
			answer: quizs[current].variants[selected].name,
		};
		pushSolving(data);
	}
	function handlePrev() {
		const prevRes = foundResult("prev");
		setCurrent(current - 1);
		setSelected(prevRes === -1 ? undefined : prevRes);
	}
	function foundResult(type: "prev" | "next") {
		const reducer = type === "prev" ? current - 1 : current + 1;
		const exist = results.find((e) => e.id === quizs[reducer].id);
		const existAns = quizs[current].variants.findIndex(
			(e) => e.name === exist?.answer
		);
		return existAns;
	}
	return (
		<div className='max-w-[400px] sm:max-w-[500px] mx-auto border shadow-sm rounded-md p-4 bg-gray-50'>
			<div className=''>
				<Typography>
					{current + 1} of {quizs.length}
				</Typography>
			</div>
			<div className='border-b pb-4'>
				<Typography className='text-xl text-black font-medium'>
					{quizs[current].text}
				</Typography>
			</div>
			<div className='mt-5 grid gap-3'>
				{quizs[current].variants.map((variant, i) => {
					return (
						<Button
							className='text-lg'
							key={i}
							onClick={() => setSelected(i)}
							variant={i === selected ? "outlined" : "text"}>
							{variant.text}
						</Button>
					);
				})}
			</div>
			<div className='mt-5 flex justify-between [&>button]:p-2 [&>button]:flex [&>button]:gap-3 [&>button]:items-center'>
				<Button
					variant='outlined'
					onClick={handlePrev}
					disabled={current === 0}>
					<BiLeftArrow size={20} />
					<span>Orqaga</span>
				</Button>
				{current !== quizs.length - 1 ? (
					<Button
						onClick={handleNext}
						variant='outlined'
						disabled={typeof selected === "undefined"}>
						<BiRightArrow size={20} />
						<span>Keyingisi</span>
					</Button>
				) : (
					<Button
						variant='gradient'
						disabled={typeof selected === "undefined"}
						onClick={async () => {
							SyncResult();
							await finishedTest(
								{
									results: [
										...results,
										{
											id: quizs[current].id,
											answer: quizs[current].variants[selected!].name,
										},
									],
									telegramId: user?.id,
									testId: id,
									phoneNumber: "",
								},
								() => navigate("/auth")
							);
						}}>
						Yakunlash
					</Button>
				)}
			</div>
		</div>
	);
};

export default QuizSlider;
