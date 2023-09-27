import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants/Routes";
import CardsMenu from '../pages/CardsMenu.js'
import LoginForm from '../pages/LoginForm.js'


const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <CardsMenu />,
    },
    {
        path: ROUTES.LOGIN,
        element: <LoginForm />,
    }
]);


export function Router() {
    return <RouterProvider router={router} />;
}
