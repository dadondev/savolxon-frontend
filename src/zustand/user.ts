/** @format */

import { create } from "zustand";
import { loginRespI } from "../types/types";

interface Actions {
	giveUser: (data: loginRespI) => void;
}

const useUserData = create<loginRespI & Actions>((set) => ({
	firstName: "",
	id: "",
	lastName: "",
	phoneNumber: "",
	telegramId: null,
	token: "",
	giveUser: (payload) => set(() => ({ ...payload })),
}));

export default useUserData;
