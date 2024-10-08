/** @format */

import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getAllResults, getAllStudents, getAllTests } from "../../actions";
import useResultsStore from "../../zustand/result";
import Result from "../../components/result";
import useTestsStore from "../../zustand/tests";
import useStudentStore from "../../zustand/student";
import useUserData from "../../zustand/user";
import NotFound from "../../components/notFound";

const Results = () => {
	const { giveAll, results } = useResultsStore();
	const { phoneNumber } = useUserData();
	const tests = useTestsStore();
	const students = useStudentStore();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		console.log(phoneNumber);

		getAllResults(phoneNumber).then((e) => {
			setLoading(false);
			giveAll(e);
		});
		getAllTests().then((e) => {
			tests.giveAll(e);
		});
		getAllStudents().then((e) => {
			students.giveAll(e);
		});
	}, [phoneNumber]);
	if (loading)
		return (
			<div className='h-full flex flex-col items-center justify-center'>
				<Spinner className='w-10 h-10' />
				<span className='text-xl'>Malumotlar yuklanmoqda...</span>
			</div>
		);

	const filteredDatas = results
		.filter((e) => {
			const existUser = students.students.find(
				(student) => student.id === e.userId
			);
			const existTest = tests.tests.find((test) => test.id === e.testId);

			return existTest && existUser;
		})
		.map((e, i) => {
			const existUser = students.students.find(
				(student) => student.id === e.userId
			);
			const existTest = tests.tests.find((test) => test.id === e.testId);
			return (
				<Result
					result={e}
					test={existTest as any}
					user={existUser as any}
					key={i}
				/>
			);
		});
	return (
		<div className='container mx-auto flex justify-center flex-wrap gap-3 pt-5'>
			{filteredDatas.length === 0 ? <NotFound /> : filteredDatas}
		</div>
	);
};

export default Results;
