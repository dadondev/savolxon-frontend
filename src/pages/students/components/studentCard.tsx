/** @format */

import { useState } from "react";
import { studentI } from "../../../types/types";
import useModalStore from "../../../zustand/modal";
import useStudentStore from "../../../zustand/student";
import { Button, Typography } from "@material-tailwind/react";
import { PencilIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";

const StudentCard = ({ firstName, lastName, phoneNumber, id }: studentI) => {
	const [open, setOpen] = useState(false);
	const { preferModal } = useModalStore();
	const { catchOne } = useStudentStore();

	return (
		<div className='max-w-[300px] w-full h-[170px] bg-gradient-to-r from-blue-300 to-blue-600 relative rounded-sm cursor-pointer overflow-hidden'>
			<div
				className='w-full h-full grid place-items-center'
				onClick={() => setOpen(!open)}>
				<Typography className='text-lg font-medium'>
					{lastName + " " + firstName}
				</Typography>
			</div>
			<div className='absolute top-0 w-full p-px'>
				<Badge
					text={phoneNumber}
					color='bg-gray-800'
				/>
			</div>
			<div
				data-open={open}
				className='absolute top-0 w-full h-full flex justify-center gap-3 flex-wrap transition-all bg-black/60 -translate-y-full data-[open=true]:translate-y-0'>
				<div className='relative w-full h-full top-0 flex justify-center items-center gap-3'>
					<Button
						className='p-2 bg-orange-500'
						onClick={() => setOpen(!open)}>
						<XMarkIcon className='w-5 h-5' />
					</Button>
					<Button
						className='p-2 bg-red-500'
						onClick={() => {
							catchOne(id);
							preferModal("deleteStudent");
						}}>
						<TrashIcon className='h-5 w-5' />
					</Button>
					<Button
						className='p-2'
						variant='gradient'
						onClick={() => {
							catchOne(id);
							preferModal("updateStudent");
						}}>
						<PencilIcon className='h-5 w-5' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default StudentCard;

function Badge({ color, text }: { text: string; color: string }) {
	return (
		<p className={"text-white inline-block px-2 rounded-sm " + color}>{text}</p>
	);
}
