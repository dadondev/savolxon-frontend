/** @format */

import { createContext, ReactNode, useState } from "react";

const mobileDrawer = createContext({
	open: false,
	setOpen: (_: boolean) => {},
});

function ProviderMobileDrawer({ children }: { children: ReactNode }) {
	const [open, setOpen] = useState(false);
	return (
		<mobileDrawer.Provider
			value={{
				open,
				setOpen,
			}}>
			{children}
		</mobileDrawer.Provider>
	);
}

export default ProviderMobileDrawer;

export { mobileDrawer };
