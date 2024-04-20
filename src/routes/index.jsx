import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.jsx";
import App from "../App.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: (<h3>Error</h3>),
        children: [
            {
                path: '/',
                element: <App/>
            }
        ]
    }
])