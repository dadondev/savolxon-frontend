/** @format */

import { Input } from "@material-tailwind/react";
import { variantsColsI, variantSingleColI } from "../types/types";
import { Dispatch, SetStateAction } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const VariantCol = ({
	index,
	text,
	active,
	setVariants,
	allLength,
}: variantSingleColI & {
	setVariants: Dispatch<SetStateAction<variantsColsI>>;
	active: number;
	allLength: number;
}) => {
	return (
		<div className='grid grid-cols-[auto_1fr_auto] gap-3 items-center justify-center place-items-center'>
			<div
				data-active={index === active}
				className='w-5 h-5 border-4 rounded-full transition-all data-[active=true]:border-green-500'
				onClick={() =>
					setVariants((prev) => ({ ...prev, active: index }))
				}></div>
			<Input		
				className='!pt-0 !pb-0 font-medium'
				style={{ color: "black" }}
				name='variant'
				variant='outlined'
				required={true}
				type='text'
				crossOrigin={"variant"}
				value={text}
				onChange={(event) =>
					setVariants((prev) => {
						let payload = { ...prev };
						const variant = payload.variants.findIndex(
							(e) => e.index === index
						);
						payload.variants[variant].text = event.target.value;
						return payload;
					})
				}
			/>
			<TrashIcon
				onClick={() => {
					if (allLength <= 2) return;
					setVariants((prev) => {
						let payload = { ...prev };
						payload.variants = payload.variants.filter(
							(e) => e.index !== index
						);
						payload.variants = payload.variants.map((e) => ({
							...e,
							index: index < e.index ? e.index - 1 : e.index,
						}));
						return payload;
					});
				}}
				aria-disabled={allLength <= 2}
				className='w-5 h-5 transition-all text-black aria-disabled:text-gray-600'
			/>
		</div>
	);
};

export default VariantCol;
