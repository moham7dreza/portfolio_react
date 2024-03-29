import '../App.css'
import {MainLayout} from "../templates/layouts/MainLayout.jsx";
import {Sidebar} from "../components/panel/sidebar/Sidebar.jsx";
import {ContentContainer} from "./panel/ContentContainer.jsx";
import {useState} from "react";
import {TabPanel} from "../components/panel/TabPanel.jsx";
import {Typography} from "@mui/material";
import {SidebarContainer} from "./panel/SidebarContainer.jsx";

function App() {
    const [value, setValue] = useState(0)
    // event arg not used but is needed to receive new value for mui functionality
    const handleChange = (event, newValue) => {
        // receive new value on tab changes and set to the value
        setValue(newValue);
    }
    return (
        <>
            {/*according to specific route we can render specific layout*/}
            <MainLayout>
                {/*value first in sending to the sidebar tabs and changing state is called in sidebar tabs*/}
                <SidebarContainer>
                    <Sidebar value={value} handleChange={handleChange}/>
                </SidebarContainer>
                <ContentContainer>
                    {/*tab panel scenario*/}
                    {/*we use value state and define some unique indices for each tab that user can change them so the value is updated*/}
                    {/*although we have unique indices in content container*/}
                    {/*so when the selected index from sidebar is equal to content section index the component will be shown*/}
                    <TabPanel value={value} index={0}>
                        <Typography>
                            home page
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography>
                            about me
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Typography>
                            my resume
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Typography>
                            my projects
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <Typography>
                            comments
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <Typography>
                            contact
                        </Typography>
                    </TabPanel>
                </ContentContainer>
            </MainLayout>
        </>
    )
}

export default App
