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
}

export interface loginRespI {
	firstName: string;
	id: string;
	lastName: string;
	phoneNumber: string;
	telegramId: null | string;
	token: string;
}
