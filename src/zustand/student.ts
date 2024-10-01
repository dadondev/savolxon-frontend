/** @format */

import { create } from "zustand";
import { studentI } from "../types/types";

interface State {
	students: [] | studentI[];
	currentStudent: studentI | null;
}

interface Actions {
	giveAll: (data: studentI[]) => void;
	giveOne: (data: studentI) => void;
	deleteOne: (id: string) => void;
	updateOne: (id: string, payload: studentI) => void;
	catchOne: (id: string) => void;
}

const useStudentStore = create<State & Actions>((set) => ({
	students: [],
	currentStudent: null,
	giveAll: (data: studentI[]) =>
		set((state) => ({ students: [...state.students, ...data] })),
	giveOne: (data: studentI) =>
		set((state) => ({ students: [...state.students, data] })),
	deleteOne: (id: string) =>
		set((state) => ({ students: state.students.filter((e) => e.id !== id) })),
	updateOne: (id: string, payload: studentI) =>
		set((state) => ({
			students: state.students.map((e) =>
				e.id !== id ? e : { ...e, ...payload }
			),
		})),
	catchOne: (id: string) =>
		set((state) => ({
			currentStudent: state.students.find((e) => e.id === id),
		})),
}));

export default useStudentStore;
