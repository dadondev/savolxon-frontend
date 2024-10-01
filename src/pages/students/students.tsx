/** @format */

import { useEffect, useState } from "react";
import { getAllStudents } from "../../actions";
import useStudentStore from "../../zustand/student";
import { Spinner } from "@material-tailwind/react";
import NotFound from "../../components/notFound";

const Students = () => {
	const [loading, setLoading] = useState(true);
	const { giveAll, students } = useStudentStore();
	useEffect(() => {
		getAllStudents()
			.then((e) => {
				giveAll(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	if (loading)
		<div className='h-full flex flex-col items-center justify-center'>
			<Spinner className='w-10 h-10' />
			<span className='text-xl'>Malumotlar yuklanmoqda...</span>
		</div>;

	return <div className='h-full'>{students.length === 0 && <NotFound />}</div>;
};

export default Students;
