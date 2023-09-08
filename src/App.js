import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const ProductPage = lazy(() => import("./pages/Product"));

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				{
					path: "product",
					element: (
						<Suspense fallback={<div>Loading...</div>}>
							<ProductPage />
						</Suspense>
					),
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
