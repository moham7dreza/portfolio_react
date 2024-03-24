import './App.css'
import {MainLayout} from "./components/layouts/MainLayout.jsx";

function App() {
    return (
        <>
            {/*according to specific route we can render specific layout*/}
            <MainLayout>
                {/*<Header/>*/}
            </MainLayout>
        </>
    )
}

export default App
