import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Products from "../components/products/Products";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/products',
                element: <Products></Products>
            }
        ]
    }
])
export default router;