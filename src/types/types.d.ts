/** @format */

// types.d.ts
import {
	ButtonProps,
	TabProps,
	TabsHeaderProps,
	TabsBodyProps,
	InputProps,
	TypographyProps,
	IconButtonProps,
	DrawerProps,
	SpeedDialProps,
	DialogProps,
	DialogBodyProps,
	DialogHeaderProps,
	DialogFooterProps,
	SpinnerProps,
	TextareaProps,
} from "@material-tailwind/react";

declare module "@material-tailwind/react" {
	interface ButtonProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface IconButtonProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface TabProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface TabsBodyProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface TabsHeaderProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface InputProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface TypographyProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface DrawerProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface DrawerProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface SpeedDialProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface DialogProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface DialogBodyProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface DialogHeaderProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface DialogFooterProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface SpinnerProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface TextareaProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
	interface CheckboxProps {
		placeholder?: string;
		onPointerEnterCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
		onPointerLeaveCapture?: (
			event: React.PointerEvent<HTMLButtonElement>
		) => void;
	}
}

export interface loginRespI {
	firstName: string;
	id: string;
	lastName: string;
	phoneNumber: string;
	telegramId: null | string;
	token: string;
}

export interface testI {
	id: string;
	name: string;
	status: "willbe" | "active" | "finished";
	start_date: null | Date;
	finish_date: null | Date;
	quizsCount: number;
	enterCode: string;
	teacher: {
		id: string;
		firstName: string;
		lastName: string;
		phoneNumber: string;
	};
}

export interface SingleVariant {
	id: string;
	text: string;
	name: string;
}

export interface SingleQuiz {
	id: string;
	text: string;
	variants: SingleVariant[];
	true_variant: string;
}

export interface SingleTestI {
	id: string;
	name: string;
	quizs: [] | SingleQuiz[];
}

export interface variantSingleColI {
	text: string;
	index: number;
}

export interface variantsColsI {
	active: number;
	text: string;
	variants: variantSingleColI[];
}

export interface studentI {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

export interface addStudentI {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

export interface singleEnterVariant {
	id: string;
	name: string;
	text: string;
}

export interface singleEnterQuiz {
	id: string;
	text: string;
	variants: singleEnterVariant[] | [];
}

export interface singleSolving {
	id: string;
	answer: string;
}

export interface ITelegramUser {
	id: number;
	first_name: string;
	last_name: string;
	username: string;
	language_code: string;
}

export interface IWebApp {
	initData: string;
	initDataUnsafe: {
		query_id: string;
		user: ITelegramUser;
		auth_date: string;
		hash: string;
	};
	version: string;
	platform: string;
	colorScheme: string;
	themeParams: {
		link_color: string;
		button_color: string;
		button_text_color: string;
		secondary_bg_color: string;
		hint_color: string;
		bg_color: string;
		text_color: string;
	};
	isExpanded: boolean;
	viewportHeight: number;
	viewportStableHeight: number;
	isClosingConfirmationEnabled: boolean;
	headerColor: string;
	backgroundColor: string;
	BackButton: {
		isVisible: boolean;
	};
	MainButton: {
		text: string;
		color: string;
		textColor: string;
		isVisible: boolean;
		isProgressVisible: boolean;
		isActive: boolean;
	};
	HapticFeedback: any;
}
