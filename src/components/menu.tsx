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
	CogIcon,
	Square3Stack3DIcon,
	FolderPlusIcon,
} from "@heroicons/react/24/outline";

export function SpeedDialWithTextOutside() {
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
						placeholder={"menu"}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						className='bg-blue-gray-50'>
						<FolderPlusIcon className='w-5 h-5' />
					</SpeedDialAction>
					<SpeedDialAction
						placeholder={"menu"}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						className='bg-blue-gray-50'>
						<CogIcon className='h-5 w-5' />
					</SpeedDialAction>
					<SpeedDialAction
						placeholder={"menu"}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						className='bg-blue-gray-50'>
						<Square3Stack3DIcon className='h-5 w-5' />
					</SpeedDialAction>
				</SpeedDialContent>
			</SpeedDial>
		</div>
	);
}
