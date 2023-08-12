import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const AdminLayout = (props: Props) => {
	return (
		<div className="container">
			<header>
				<h1>Admin</h1>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default AdminLayout;
