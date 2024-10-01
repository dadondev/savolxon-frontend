/** @format */

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOne } from "../../actions";
import { Button, Spinner, Typography } from "@material-tailwind/react";
import useTestStore from "../../zustand/test";
import { ArrowLeftIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import useModalStore from "../../zustand/modal";
import NotFound from "../../components/notFound";
import QuizCard from "./component/quiz";

const Test = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const { giveTest, quizs, name } = useTestStore();
	const { preferModal } = useModalStore();

	useEffect(() => {
		getOne(id as string).then((e) => {
			giveTest(e);
			setLoading(false);
		});
	}, []);

	if (loading)
		return (
			<div className='h-full flex flex-col items-center justify-center'>
				<Spinner className='w-10 h-10' />
				<span className='text-xl'>Malumotlar yuklanmoqda...</span>
			</div>
		);

	return (
		<main className='container mx-auto pt-4 px-4 md:px-0 max-h-full h-full overflow-auto'>
			<div className='flex justify-between items-center'>
				<div className='flex gap-5 items-center'>
					<Button
						onClick={() => navigate(-1)}
						variant='text'
						className='p-2 hidden sm:block'>
						<ArrowLeftIcon className='w-7 h-7' />
					</Button>
					<Typography
						as={"h1"}
						className='text-xl md:text-4xl font-medium'>
						{name}
					</Typography>
				</div>
				<div className='flex gap-5 [&>button]:p-2'>
					<Button onClick={() => preferModal("addQuiz")}>
						<PlusCircleIcon className='w-5 h-5 sm:w-7 sm:h-7' />
					</Button>
				</div>
			</div>
			{quizs.length === 0 ? (
				<NotFound />
			) : (
				<div className='flex flex-wrap justify-center gap-5 py-5'>
					{quizs.map((e) => (
						<QuizCard
							{...e}
							allCounts={quizs.length}
							key={e.id}
						/>
					))}
				</div>
			)}
		</main>
	);
};

export default Test;
