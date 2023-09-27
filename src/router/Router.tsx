import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/Routes";
import CardsMenu from '../pages/CardsMenu.js'
import Login from '../pages/Login.js'
import Register from "../pages/Register.js";


const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <CardsMenu />,
    },
    {
        path: ROUTES.LOGIN,
        element: <Login />,
    },
    {
        path: ROUTES.REGISTER,
        element: <Register />,

    }
]);


export function Router() {
    return <RouterProvider router={router} />;
}
