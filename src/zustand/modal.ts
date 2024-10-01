/** @format */

import { create } from "zustand";

type modalT = "createTest" | "deleteTest" | "updateTest";
interface State {
	modal: modalT;
	open: boolean;
}

interface Actions {
	preferModal: (type: modalT) => void;
	close: () => void;
}

const useModalStore = create<State & Actions>((set) => ({
	modal: "createTest",
	open: false,
	preferModal: (type) => set(() => ({ modal: type, open: true })),
	close: () => set(() => ({ open: false })),
}));

export default useModalStore;
