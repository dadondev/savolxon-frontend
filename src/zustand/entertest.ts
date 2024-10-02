/** @format */

import { create } from "zustand";
import { singleEnterQuiz } from "../types/types";

interface State {
	id: string;
	name: string;
	quizs: singleEnterQuiz[] | [];
}

interface Actions {
	giveAll: (data: State) => void;
	deleteAll: () => void;
}

const useEnterTestStore = create<State & Actions>((set) => ({
	id: "",
	name: "",
	quizs: [],
	giveAll: (data: State) => set(() => data),
	deleteAll: () => set(() => ({ id: "", name: "", quizs: [] })),
}));

export default useEnterTestStore
