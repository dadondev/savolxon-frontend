/** @format */

import { Spinner, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleResult } from "../../actions";
import useResultsStore from "../../zustand/result";
import useUserData from "../../zustand/user";

const SingleResult = () => {
	const { id } = useParams();
	const { phoneNumber } = useUserData();
	const [loading, setLoading] = useState(true);
	const { results, catchOne, giveOne, currentResult } = useResultsStore();

	useEffect(() => {
		const existResult = results.find((e) => e.id === id);
		if (!existResult) {
			getSingleResult(id as string, phoneNumber).then((e) => {
				giveOne(e);
				catchOne(id as string);
			});
		} else {
			catchOne(id as string);
		}
		setLoading(false);
	}, []);

	if (loading)
		return (
			<div className='h-full flex flex-col items-center justify-center'>
				<Spinner className='w-10 h-10' />
				<span className='text-xl'>Malumotlar yuklanmoqda...</span>
			</div>
		);
	return (
		<div className='h-full container mx-auto flex justify-center flex-wrap gap-5 pt-5 pb-5'>
			{currentResult?.solved.map((e, i) => (
				<div
					data-correct={e.selectedVariant === e.trueVariant}
					key={i}
					className='border ring-1 ring-red-500 grid gap-4 rounded-md p-4 max-w-[300px] sm:max-w-[500px] md:max-w-[700px] w-full border-red-500 data-[correct=true]:border-green-500 data-[correct=true]:ring-green-500'>
					<Typography className='font-medium text-lg'>{e.quizText}</Typography>
					<div className='flex justify-between'>
						<Typography className='text-orange-500 font-medium text-xl'>
							<span>Tanlandi:</span>
							{e.selectedVariant}
						</Typography>
						<Typography className='text-green-500 font-medium text-xl'>
							<span>To'g'ri javob:</span>
							{e.trueVariant}
						</Typography>
					</div>
				</div>
			))}
		</div>
	);
};

export default SingleResult;
