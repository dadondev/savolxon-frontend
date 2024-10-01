/** @format */

import { Button, Typography } from "@material-tailwind/react";
import { SingleQuiz } from "../../../types/types";
import { useState } from "react";
import { PencilIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import useModalStore from "../../../zustand/modal";
import useTestStore from "../../../zustand/test";

const QuizCard = ({
	id,
	text,
	true_variant,
	variants,
	allCounts,
}: SingleQuiz & { allCounts: number }) => {
	const { catchOne } = useTestStore();
	const [open, setOpen] = useState(false);
	const { preferModal } = useModalStore();

	return (
		<div className='border rounded-sm grid gap-3 max-w-[300px] w-full p-3 text-lg relative overflow-hidden bg-gray-50'>
			<article>
				<Typography className='text-gray-800 text-xl font-medium'>
					{text}
				</Typography>
			</article>
			<article
				className='gap-2 grid'
				onClick={() => setOpen(!open)}>
				{variants.map((e) => (
					<div
						key={e.id}
						data-true={true_variant === e.name}
						className='flex gap-2 font-medium items-center data-[true=true]:text-green-500'>
						<Typography>
							{e.name.toLocaleUpperCase()}
							{")"}
						</Typography>
						<Typography className='font-medium'> {e.text}</Typography>
					</div>
				))}
			</article>
			<div
				data-open={open}
				className='absolute top-0 w-full h-full bg-black/70 transition-all -translate-y-full data-[open=true]:translate-y-0'>
				<div className='h-full w-full relative'>
					<Button
						className='p-2 ml-auto block mr-1 mt-1 relative z-10'
						onClick={() => setOpen(!open)}>
						<XMarkIcon className='w-6 h-6' />
					</Button>
					<div className='absolute w-full h-full flex items-center justify-center top-0 gap-3'>
						{allCounts > 5 && (
							<Button
								className='p-2 bg-red-500'
								onClick={() => {
									catchOne(id);
									preferModal("deleteQuiz");
								}}>
								<TrashIcon className='h-5 w-5' />
							</Button>
						)}
						<Button
							onClick={() => {
								catchOne(id);
								preferModal("updateQuiz");
							}}
							variant='gradient'
							className='p-2'>
							<PencilIcon className='h-5 w-5' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizCard;
