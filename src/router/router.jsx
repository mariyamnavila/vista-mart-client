import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Components/Home";
import RootLayout from "../Components/RootLayout";
import Login from "../Components/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login,
            },
        ]
    },
]);