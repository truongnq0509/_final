import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomeView from "./views/HomeView";
import SigupView from "./views/SigupView";
import SiginView from "./views/SiginView";
import AdminLayout from "./components/layouts/AdminLayout";
import PriveLayout from "./components/layouts/PriveLayout";
import ProductManager from "./views/ProductManager";
import AddView from "./views/Add";
import UpdateView from "./views/Update";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomeView />,
			},
			{
				path: "register",
				element: <SigupView />,
			},
			{
				path: "login",
				element: <SiginView />,
			},
		],
	},
	{
		path: "/admin",
		element: <PriveLayout />,
		children: [
			{
				path: "",
				element: <AdminLayout />,
				children: [
					{
						index: true,
						element: <ProductManager />,
					},
					{
						path: "add",
						element: <AddView />,
					},
					{
						path: ":id/update",
						element: <UpdateView />,
					},
				],
			},
		],
	},
]);

export default router;
