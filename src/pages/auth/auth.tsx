/** @format */

import {
	Tab,
	TabPanel,
	Tabs,
	TabsBody,
	TabsHeader,
} from "@material-tailwind/react";
import EnterTest from "./components/enterTest";
import Login from "./components/login";

const Auth = () => {
	return (
		<div className='h-full grid place-items-center'>
			<div className='max-w-[382px] w-full px-4 border shadow pt-5 rounded-xl'>
				<Tabs value='enterTest'>
					<TabsHeader>
						<Tab
							key={1}
							value={"enterTest"}>
							Testga kirish
						</Tab>
						<Tab
							key={2}
							value={"admin"}>
							Login
						</Tab>
					</TabsHeader>
					<TabsBody>
						<TabPanel
							key={1}
							value={"enterTest"}>
							<EnterTest />
						</TabPanel>
						<TabPanel
							key={2}
							value={"admin"}>
							<Login />
						</TabPanel>
					</TabsBody>
				</Tabs>
			</div>
		</div>
	);
};

export default Auth;
