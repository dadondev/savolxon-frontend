/** @format */

import { Button, Typography } from "@material-tailwind/react";
import { SingleResult } from "../types/types";
import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { deleteSingleResult } from "../actions";
import toast from "react-hot-toast";
import { useState } from "react";
import useResultsStore from "../zustand/result";
import useUserData from "../zustand/user";

const Result = ({ result, test, user }: SingleResult) => {
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();
	const { deleteOne } = useResultsStore();
	const { phoneNumber } = useUserData();

	async function handleDelete() {
		setDisabled(true);
		try {
			const fetchedData = deleteSingleResult(result.id, phoneNumber);
			await toast.promise(fetchedData, {
				error: "Natijani ochirishda xatolik",
				loading: "Natija o'chirilmoqda...",
				success: "Natija o'chirildi!",
			});
			deleteOne(result.id);
		} catch (error) {
			console.log(error);
		} finally {
			setDisabled(false);
		}
	}

	return (
		<div
			className='max-w-[300px] w-full min-h-[140px] p-4 border bg-gray-50 flex justify-between flex-col data-[disabled=true]:opacity-60'
			data-disabled={disabled}>
			<div>
				<Typography className='font-medium text-xl'>{test.name}</Typography>
				<Typography className='text-lg'>
					{user.lastName} {user.firstName}
				</Typography>
			</div>
			<div className='flex justify-between items-center'>
				<div className='flex gap-5 flex-wrap [&>*]:font-medium'>
					<Typography className='text-green-500'>
						{result.corrects} ta
					</Typography>
					<Typography className='text-red-500'>{result.wrongs} ta</Typography>
					<Typography className='text-gray-500'>
						{result.allQuizsCount - parseInt(result.corrects + result.wrongs)}{" "}
						ta
					</Typography>
				</div>
				<div className='flex gap-4'>
					<Button
						className='p-1'
						onClick={() => navigate("/results/" + result.id)}>
						<InformationCircleIcon className='w-7 h-7' />
					</Button>
					<Button
						className='p-1 bg-red-500'
						onClick={handleDelete}>
						<TrashIcon className='w-7 h-7' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Result;
