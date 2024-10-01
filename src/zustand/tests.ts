/** @format */

import { create } from "zustand";
import { testI } from "../types/types";

interface State {
	tests: testI[] | [];
	deleted: [] | testI[];
	currentTest: testI | null;
}
interface Actions {
	giveAll: (tests: testI[]) => void;
	giveOne: (test: testI) => void;
	deleteOne: (id: string) => void;
	clear: () => void;
	returnToBack: (id: string) => void;
	catchOne: (id: string) => void;
	updateOne: (id: string, payload: any) => void;
}

const useTestsStore = create<State & Actions>((set) => ({
	tests: [],
	deleted: [],
	currentTest: null,
	clear: () =>
		set((state) => ({
			deleted: [...state.deleted, ...state.tests],
			tests: [],
		})),
	deleteOne: (id: string) =>
		set((state) => {
			const existOne = state.tests.find((e) => e.id === id);
			if (!existOne) return { tests: state.tests };
			return {
				tests: state.tests.filter((e) => e.id !== id),
				deleted: [...state.deleted, existOne],
			};
		}),
	giveAll: (tests: testI[]) => set(() => ({ tests })),
	giveOne: (test: testI) => set((state) => ({ tests: [...state.tests, test] })),
	returnToBack: (id: string) =>
		set((state) => {
			const existOne = state.deleted.find((e) => e.id === id);
			if (!existOne) return state;
			return {
				tests: [...state.tests, existOne],
				deleted: state.deleted.filter((e) => e.id !== id),
			};
		}),
	catchOne: (id: string) =>
		set((state) => ({
			currentTest:
				state.tests.find((e) => e.id === id) ||
				state.deleted.find((e) => e.id === id),
		})),
	updateOne: (id: string, payload: any) =>
		set((state) => ({
			tests: state.tests.map((e) => (e.id === id ? { ...e, ...payload } : e)),
		})),
}));

export default useTestsStore;
