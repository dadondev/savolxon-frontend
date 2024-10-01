/** @format */

import { useState } from "react";
import { testI } from "../../../types/types";
import { Button } from "@material-tailwind/react";
import {
	InformationCircleIcon,
	PencilIcon,
	TrashIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import useModalStore from "../../../zustand/modal";
import useTestsStore from "../../../zustand/tests";

const TestCard = ({ name, quizsCount, status, id, enterCode }: testI) => {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const { preferModal } = useModalStore();
	const { catchOne } = useTestsStore();

	return (
		<div className='max-w-[300px] w-full h-[170px] bg-gradient-to-r from-blue-300 to-blue-600 relative rounded-sm cursor-pointer overflow-hidden'>
			<div
				className='h-full w-full grid place-items-center'
				onClick={(e) => {
					setOpen(!open);
					e.stopPropagation();
				}}>
				<span className='text-xl font-serif'>{name}</span>
			</div>
			<div className='absolute top-0 w-full flex gap-px p-px'>
				{quizsCount < 5 && (
					<Badge
						color='bg-red-800'
						text="To'liqmas"
					/>
				)}
				<Badge
					color='bg-gray-800'
					text={quizsCount + " ta"}
				/>
			</div>
			<div className='absolute flex bottom-0 w-full'>
				{status === "willbe" ? (
					<Badge
						color='bg-blue-800'
						text={"Kutilmoqda"}
					/>
				) : status === "active" ? (
					<Badge
						color='bg-green-800'
						text={"Faol"}
					/>
				) : (
					<Badge
						color='bg-red-800'
						text={"Tugatilgan"}
					/>
				)}
				{status === "active" && (
					<Badge
						text={enterCode}
						color='bg-cyan-500 ml-auto'
					/>
				)}
			</div>
			<div
				className='absolute top-0 w-full h-full transition-all -translate-y-full data-[open=true]:translate-y-0 bg-black/60'
				data-open={open}>
				<div className='relative h-full w-full'>
					<Button
						className='p-2 ml-auto block mr-1 mt-1'
						onClick={() => setOpen(!open)}>
						<XMarkIcon className='w-6 h-6' />
					</Button>
					<div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex gap-3 flex-wrap'>
						{status !== "active" && (
							<Button className='p-2 bg-red-500'>
								<TrashIcon className='h-5 w-5' />
							</Button>
						)}
						<Button
							onClick={() => {
								catchOne(id);
								preferModal("updateTest");
							}}
							variant='gradient'
							className='p-2'>
							<PencilIcon className='h-5 w-5' />
						</Button>
						<Button
							onClick={() => navigate("/tests/" + id)}
							className='p-2 bg-blue-500'>
							<InformationCircleIcon className='h-5 w-5' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestCard;

function Badge({ color, text }: { text: string; color: string }) {
	return (
		<p className={"text-white inline-block px-2 rounded-sm " + color}>{text}</p>
	);
}
