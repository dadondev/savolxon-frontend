/** @format */

// types.d.ts
import { ButtonProps } from "@material-tailwind/react";

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
}
