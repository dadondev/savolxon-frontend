/** @format */

import { create } from "zustand";
import { SingleResults } from "../types/types";

interface State {
	results: SingleResults[] | [];
	currentResult: SingleResults | null;
}

interface Actions {
	giveAll: (state: SingleResults[]) => void;
	giveOne: (state: SingleResults) => void;
	deleteOne: (id: string) => void;
	catchOne: (id: string) => void;
}

const useResultsStore = create<State & Actions>((set) => ({
	results: [],
	currentResult: null,
	giveAll: (datas: SingleResults[]) =>
		set((state) => ({ results: [...state.results, ...datas] })),
	giveOne: (data: SingleResults) =>
		set((state) => ({ results: [...state.results, data] })),
	deleteOne: (id: string) =>
		set((state) => ({ results: state.results.filter((e) => e.id !== id) })),
	catchOne: (id: string) =>
		set((state) => ({ currentResult: state.results.find((e) => e.id === id) })),
}));

export default useResultsStore;
