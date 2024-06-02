import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/index.jsx";
import {Provider} from "react-redux";
import {store} from "./app/index.js";
import {fetchUsers} from "./features/users/user.slice.js";

const main = () => {

    store.dispatch(fetchUsers())

    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </StrictMode>,
    )
}


main()