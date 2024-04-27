import React from "react";
import { Navbar } from "components";

const BlankLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<section className="layout-header">
				<Navbar isNonAuth={false}/>
				<section className="layout-content">
					<div className="layout-wrapper">
						{children}
					</div>
				</section>
			</section>
		</>
	);
};

export default BlankLayout;
