/** @format */

import { useEffect, useState } from "react";
import { getAllStudents } from "../../actions";
import useStudentStore from "../../zustand/student";
import { Spinner } from "@material-tailwind/react";
import NotFound from "../../components/notFound";
import StudentCard from "./components/studentCard";

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

	return (
		<div className='h-full'>
			{students.length === 0 && <NotFound />}

			{students.length !== 0 && (
				<div className='h-full flex gap-5 justify-center pt-4 flex-wrap'>
					{students.map((e) => (
						<StudentCard
							{...e}
							key={e.id}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Students;
