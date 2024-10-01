/** @format */

import { create } from "zustand";
import { SingleQuiz, SingleTestI, SingleVariant } from "../types/types";

interface Actions {
	giveTest: (data: SingleTestI) => void;
	pushQuiz: (data: SingleQuiz) => void;
	pushVariant: (id: string, data: SingleVariant) => void;
	removeQuiz: (id: string) => void;
	removeVariant: (id: string) => void;
	editQuiz: (id: string, data: any) => void;
	editVariant: (id: string, variantId: string, data: any) => void;
	catchOne: (id: string) => void;
}

interface Store extends SingleTestI {
	currentQuiz: null | SingleQuiz;
}

const useTestStore = create<Store & Actions>((set) => ({
	id: "",
	name: "",
	quizs: [],
	currentQuiz: null,
	giveTest: (data: SingleTestI) => set(() => ({ ...data })),
	pushQuiz: (data: SingleQuiz) =>
		set((state) => ({ quizs: [...state.quizs, data] })),
	pushVariant: (id: string, data: SingleVariant) =>
		set((state) => ({
			quizs: state.quizs.map((e) => {
				if (e.id !== id) return e;
				const updated = { ...e };
				updated.variants.push(data);
				return updated;
			}),
		})),
	removeQuiz: (id: string) =>
		set((state) => ({ quizs: state.quizs.filter((e) => e.id !== id) })),
	removeVariant: (id: string) =>
		set((state) => ({
			quizs: state.quizs.map((e) => {
				if (e.id !== id) return e;
				const updated = { ...e };
				updated.variants = updated.variants.filter((e) => e.id !== id);
				return updated;
			}),
		})),
	editQuiz: (id: string, data) =>
		set((state) => ({
			quizs: state.quizs.map((e) => {
				if (e.id !== id) return e;
				return { ...e, ...data };
			}),
		})),
	editVariant: (id: string, variantId: string, data) =>
		set((state) => ({
			quizs: state.quizs.map((e) => {
				if (e.id !== id) return e;
				const updated = { ...e };
				updated.variants = updated.variants.map((e) => {
					if (e.id !== variantId) return e;
					return { ...e, ...data };
				});
				return updated;
			}),
		})),
	catchOne: (id: string) =>
		set((state) => ({ currentQuiz: state.quizs.find((e) => e.id === id) })),
}));

export default useTestStore;
