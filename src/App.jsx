import './App.css'
import {MainLayout} from "./components/layouts/MainLayout.jsx";
import {Sidebar} from "./components/ui/Sidebar.jsx";
import {ContentContainer} from "./components/ui/ContentContainer.jsx";

function App() {
    return (
        <>
            {/*according to specific route we can render specific layout*/}
            <MainLayout>
                <Sidebar/>
                <ContentContainer/>
            </MainLayout>
        </>
    )
}

export default App
