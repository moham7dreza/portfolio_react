import '../App.css'
import {MainLayout} from "../templates/layouts/MainLayout.jsx";
import {Sidebar} from "../components/panel/sidebar";
import {PageContainer} from "./panel/PageContainer.jsx";
import {useState} from "react";
import {Page} from "../pages/components/panel/Page.jsx";
import {Typography} from "@mui/material";
import {SidebarContainer} from "./panel/SidebarContainer.jsx";
import MainContext from "../context";
import {DrawerActionButton} from "../components/panel/drawer/index.js";
import SwipeableViews from "react-swipeable-views";
import {Home} from "../pages";

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const [pageNumber, setPageNumber] = useState(0)
    // event arg not used but is needed to receive new value for mui functionality
    const handlePageNumber = (event, newPage) => {
        // receive new value on tab changes and set to the value
        setPageNumber(newPage);
    }
    return (
        <MainContext.Provider value={{
            pageNumber,
            handlePageNumber,
            drawerOpen,
            setDrawerOpen,
        }}>
            {/*according to specific route we can render specific layout*/}
            <MainLayout>
                {/*value first in sending to the sidebar tabs and changing state is called in sidebar tabs*/}
                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>

                <DrawerActionButton/>

                <PageContainer>
                    {/*tab panel scenario*/}
                    {/*we use value state and define some unique indices for each tab that user can change them so the value is updated*/}
                    {/*although we have unique indices in content container*/}
                    {/*so when the selected index from sidebar is equal to content section index the component will be shown*/}
                    <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
                        <Page pageNumber={pageNumber} index={0}>
                            <Home/>
                        </Page>
                        <Page pageNumber={pageNumber} index={1}>
                            <Typography>
                                about me
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={2}>
                            <Typography>
                                my resume
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={3}>
                            <Typography>
                                my projects
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={4}>
                            <Typography>
                                comments
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={5}>
                            <Typography>
                                contact
                            </Typography>
                        </Page>
                    </SwipeableViews>
                </PageContainer>
            </MainLayout>
        </MainContext.Provider>
    )
}

export default App
