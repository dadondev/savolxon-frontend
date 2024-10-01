/** @format */

import {
	Button,
	DialogBody,
	DialogFooter,
	Textarea,
	Typography,
} from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import VariantCol from "./variantCol";
import { variantsColsI } from "../types/types";
import useModalStore from "../zustand/modal";
import { addQuiz } from "../actions";
import useTestStore from "../zustand/test";
import toast from "react-hot-toast";

const initialValues = {
	active: 1,
	text: "",
	variants: [
		{
			text: "",
			index: 1,
		},
		{
			text: "",
			index: 2,
		},
	],
};
const letters = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const AddQuiz = () => {
	const { id, pushQuiz } = useTestStore();
	const { close } = useModalStore();
	const [variants, setVariant] = useState<variantsColsI>(initialValues);
	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const quizText = new FormData(e.currentTarget).get("quizText");
		let datas = {
			text: quizText,
			variants: variants.variants.map((e) => {
				return {
					name: letters[e.index - 1],
					text: e.text,
				};
			}),
			true_variant: letters[variants.active - 1],
		};
		try {
			close();
			const fetchedData = addQuiz(id, datas);
			const resp = await toast.promise(fetchedData, {
				error: "Savol qo'shishda xatolik!",
				loading: "Savol qo'shilmoqda...",
				success: "Savol qo'shildi!",
			});
			pushQuiz(resp);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<form onSubmit={onSubmit}>
			<DialogBody className='grid gap-4'>
				<div className='grid gap-2'>
					<Typography className='font-medium'>Savol matni</Typography>
					<Textarea
						defaultValue={variants.text}
						onChange={(e) =>
							setVariant((prev) => ({
								...prev,
								text: e.currentTarget?.value || prev.text,
							}))
						}
						name='quizText'
						className='text-black text-lg'
						style={{ color: "black" }}
					/>
				</div>
				<div className='grid gap-3'>
					<Typography className='font-medium'>Javoblar</Typography>
					<div className='grid gap-5'>
						{variants.variants.map((e, i) => (
							<VariantCol
								{...e}
								active={variants.active}
								setVariants={setVariant}
								key={i}
								allLength={variants.variants.length}
							/>
						))}
					</div>
				</div>
				<Button
					type='button'
					onClick={() =>
						setVariant((prev) => ({
							...prev,
							variants: [
								...prev.variants,
								{
									text: "",
									index: prev.variants.length + 1,
								},
							],
						}))
					}
					variant='outlined'>
					Variant qo'shish
				</Button>
			</DialogBody>
			<DialogFooter>
				<Button
					onClick={close}
					type='button'
					variant='text'
					color='gray'>
					Bekor qilish
				</Button>
				<Button
					type='submit'
					variant='gradient'
					color='gray'
					onClick={() => {}}>
					Tastiqlayman
				</Button>
			</DialogFooter>
		</form>
	);
};

export default AddQuiz;
