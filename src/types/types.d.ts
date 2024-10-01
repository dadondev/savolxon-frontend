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
