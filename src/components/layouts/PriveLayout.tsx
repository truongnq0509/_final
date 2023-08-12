import React, { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

type Props = {};

const PriveLayout = (props: Props) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") as any));

	useEffect(() => {
		if (user?.role == 1) {
			navigate("/admin");
		} else {
			navigate("/login");
		}
	}, [user]);

	return user?.role == 1 ? <Outlet /> : <Navigate to="/admin" />;
};

export default PriveLayout;
