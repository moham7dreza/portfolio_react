import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.jsx";
import App from "../App.jsx";
import {ShowBlog} from "../components/blog/ShowBlog.jsx";
import {NotFound} from "../layouts/NotFound.jsx";
import {CreateBlog} from "../components/blog/CreateBlog.jsx";

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
                element: <ShowBlog/>
            },
            {
                path: '/blogs/create',
                element: <CreateBlog/>
            }
        ]
    }
])