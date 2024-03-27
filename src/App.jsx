import './App.css'
import {MainLayout} from "./components/layouts/MainLayout.jsx";
import {Sidebar} from "./components/ui/Sidebar.jsx";
import {ContentContainer} from "./components/ui/ContentContainer.jsx";
import {useState} from "react";

function App() {
    const [value, setValue] = useState(0)
    // event arg not used but is needed to receive new value for mui functionality
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <>
            {/*according to specific route we can render specific layout*/}
            <MainLayout>
                <Sidebar value={value} handleChange={handleChange}/>
                <ContentContainer/>
            </MainLayout>
        </>
    )
}

export default App
