/** @format */

import { useFormik } from "formik";
import useTestsStore from "../zustand/tests";
import useModalStore from "../zustand/modal";
import { update } from "../actions";
import editTestValidator from "../validators/editTest.validator";
import { Button, DialogBody, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import moment from "moment";
import { DialogFooter } from "@material-tailwind/react";
import toast from "react-hot-toast";

function UpdateTest() {
	const { close } = useModalStore();
	const { currentTest, updateOne } = useTestsStore();
	if (!currentTest) return <>{close()}</>;
	let afterHalfHour = new Date();
	afterHalfHour.setMinutes(afterHalfHour.getMinutes() + 30);

	const initialValues = {
		name: currentTest.name,
		start_date: moment(currentTest.start_date || new Date()).format(
			"YYYY-MM-DDTHH:mm"
		),
		finish_date: moment(currentTest.finish_date || afterHalfHour).format(
			"YYYY-MM-DDTHH:mm"
		),
	};

	const formik = useFormik({
		initialValues,
		onSubmit: async (values) => {
			const isWillBe = moment(values.finish_date).isAfter(new Date());
			const datas = {
				start_date:
					currentTest.quizsCount > 4
						? new Date(moment(values.start_date).format("YYYY-MM-DDTHH:mm"))
						: null,
				finish_date:
					currentTest.quizsCount > 4
						? new Date(moment(values.finish_date).format("YYYY-MM-DDTHH:mm"))
						: null,
				name: values.name,
				status: isWillBe
					? "willbe"
					: currentTest.quizsCount > 4
					? currentTest.status
					: "willbe",
			};
			close();
			const fetchedData = update(currentTest.id, datas);
			try {
				const resp = await toast.promise(fetchedData, {
					loading: "Tahrirlanmoqda...",
					error: "Tahrirlashda xatolik",
					success: "Tahrirlandi!",
				});
				updateOne(currentTest.id, resp);
			} catch (error) {
				console.log(error);
			}
		},
		validationSchema: editTestValidator,
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<DialogBody className='grid gap-4'>
				<div className='grid gap-2'>
					<Typography
						className='-mb-1'
						color='blue-gray'
						variant='h6'>
						Nomi
					</Typography>
					<Input
						name='name'
						crossOrigin={"name"}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						type='text'
						label='Nomi'
						defaultValue={initialValues.name}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.name && (
						<Typography
							variant='small'
							color='red'
							className='mt-2 flex items-center gap-1 font-normal'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='-mt-px h-4 w-4'>
								<path
									fillRule='evenodd'
									d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
									clipRule='evenodd'
								/>
							</svg>
							{formik.errors.name}
						</Typography>
					)}
				</div>

				<div className='grid gap-2'>
					<Typography
						className='-mb-1'
						color='blue-gray'
						variant='h6'>
						Boshlanish sanasi
					</Typography>
					<Input
						crossOrigin={"text"}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						name='start_date'
						type='datetime-local'
						label='Boshlanish sanasi'
						disabled={formik.isSubmitting || currentTest.status === "active"}
						value={formik.values.start_date} // Ensure the input value comes from Formik state
					/>
					{formik.errors.start_date && (
						<Typography
							variant='small'
							color='red'
							className='mt-2 flex items-center gap-1 font-normal'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='-mt-px h-4 w-4'>
								<path
									fillRule='evenodd'
									d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
									clipRule='evenodd'
								/>
							</svg>
							{formik.errors.start_date}
						</Typography>
					)}
				</div>

				<div className='grid gap-2'>
					<Typography
						className='-mb-1'
						color='blue-gray'
						variant='h6'>
						Tugash sanasi
					</Typography>
					<Input
						crossOrigin={"salom"}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						name='finish_date'
						type='datetime-local'
						label='Tugash sanasi'
						disabled={formik.isSubmitting || currentTest.status === "active"}
						value={formik.values.finish_date} // Ensure the input value comes from Formik state
					/>
					{formik.errors.finish_date && (
						<Typography
							variant='small'
							color='red'
							className='mt-2 flex items-center gap-1 font-normal'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='-mt-px h-4 w-4'>
								<path
									fillRule='evenodd'
									d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
									clipRule='evenodd'
								/>
							</svg>
							{formik.errors.finish_date}
						</Typography>
					)}
				</div>
			</DialogBody>
			<DialogFooter className='space-x-2'>
				<Button
					onClick={close}
					type='button'
					variant='text'
					color='gray'>
					Bekor qilish
				</Button>
				<Button
					loading={formik.isSubmitting}
					type='submit'
					variant='gradient'
					color='gray'>
					Tahrirlash
				</Button>
			</DialogFooter>
		</form>
	);
}

export default UpdateTest;
