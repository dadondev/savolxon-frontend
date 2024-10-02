/** @format */

import { create } from "zustand";
import { singleSolving } from "../types/types";

interface State {
	results: singleSolving[];
}

interface Actions {
	pushSolving: (data: singleSolving) => void;
	updateSolving: (id: string, data: singleSolving) => void;
}

const useSolvingsStore = create<State & Actions>((set) => ({
	results: [],
	pushSolving: (data: singleSolving) =>
		set((state) => ({ results: [...state.results, data] })),
	updateSolving: (id: string, data: singleSolving) =>
		set((state) => ({
			results: state.results.map((e) => {
				if (id !== e.id) return e;
				return { ...e, ...data };
			}),
		})),
}));

export default useSolvingsStore;
