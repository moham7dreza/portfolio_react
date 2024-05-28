import {Outlet} from "react-router-dom";
import {Navbar} from "../components/Navbar.jsx";

export const MainLayout = () => {
    return (
        <div className="max-w-full h-screen flex flex-col mx-auto size-full bg-gray-800">
            <Navbar/>

            <main id="content">
                <Outlet/>
            </main>

            <footer className="mt-auto text-center py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-gray-400 dark:text-neutral-400">Cover template for <a
                        className="text-white decoration-2 underline underline-offset-2 font-medium hover:text-gray-200 hover:decoration-gray-400"
                        href="">Preline</a></p>
                </div>
            </footer>

        </div>
    )
}