import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.jsx";
import App from "../App.jsx";
import {Show} from "../components/blog/Show.jsx";
import {NotFound} from "../layouts/NotFound.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <App/>
            },
            {
                path: '/blogs/:blogId',
                element: <Show/>
            }
        ]
    }
])