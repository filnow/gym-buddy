import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/Routes";
import CardsMenu from '../pages/CardsMenu.tsx'
import Login from '../pages/Login.tsx'
import Register from "../pages/Register.tsx";
import Home from "../pages/Home.tsx";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <PrivateRoute />,
        children: [
            {   
                index: true,
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                index: true,
                path: ROUTES.SEARCH,
                element: <CardsMenu />,
            },
        ],
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
