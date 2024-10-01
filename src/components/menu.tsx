/** @format */

import {
	IconButton,
	SpeedDial,
	SpeedDialHandler,
	SpeedDialContent,
	SpeedDialAction,
} from "@material-tailwind/react";
import {
	PlusIcon,
	FolderPlusIcon,
	ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import useModalStore from "../zustand/modal";

export function SpeedDialWithTextOutside() {
	const { preferModal } = useModalStore();
	const navigate = useNavigate();

	return (
		<div className='fixed bottom-24 right-4'>
			<SpeedDial className='bg-blue-gray-50'>
				<SpeedDialHandler>
					<IconButton
						color='white'
						size='lg'
						className='rounded-full border border-blue-gray-50 shadow-xl'>
						<PlusIcon className='h-5 w-5 transition-transform group-hover:rotate-45' />
					</IconButton>
				</SpeedDialHandler>
				<SpeedDialContent
					placeholder={"menu"}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					className='rounded-full border border-blue-gray-50 bg-white shadow-xl shadow-black/10'>
					<SpeedDialAction
						onClick={() => preferModal("createTest")}
						placeholder={"menu"}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						className='bg-blue-gray-50'>
						<FolderPlusIcon className='w-5 h-5' />
					</SpeedDialAction>
					<SpeedDialAction
						onClick={() => navigate(-1)}
						placeholder={"menu"}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						className='bg-blue-gray-50'>
						<ArrowLeftCircleIcon className='h-5 w-5' />
					</SpeedDialAction>
				</SpeedDialContent>
			</SpeedDial>
		</div>
	);
}
