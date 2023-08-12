import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
	return (
		<div className="container">
			<header className="headre">
				<h1>The Header</h1>
			</header>
			<main className="main">
				<Outlet />
			</main>
			<footer>
				<h1>The Footer</h1>
			</footer>
		</div>
	);
};

export default MainLayout;
