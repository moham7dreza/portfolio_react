import '../App.css'
import {MainLayout} from "../templates/layouts/MainLayout.jsx";
import {Sidebar} from "../components/panel/sidebar";
import {PageContainer} from "./panel/PageContainer.jsx";
import {useEffect, useState} from "react";
import {Page} from "../pages/components/panel/Page.jsx";
import {useMediaQuery, useTheme} from "@mui/material";
import {SidebarContainer} from "./panel/SidebarContainer.jsx";
import MainContext from "../context";
import {DrawerActionButton} from "../components/panel/drawer/index.js";
import SwipeableViews from "react-swipeable-views";
import {About, Comment, Contact, Course, Home, Resume} from "../pages";

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const [pageNumber, setPageNumber] = useState(0)
    // event arg not used but is needed to receive new value for mui functionality
    const handlePageNumber = (event, newPage) => {
        // receive new value on tab changes and set to the value
        setPageNumber(newPage);
    }

    const theme = useTheme()
    // if display is above small breakpoint
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

    const userDarkModeDetection = useMediaQuery('(prefers-color-scheme: dark)')

    // update cycle and listen for isSmUp event -> and close the drawer
    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false)
        }
    }, [isMdUp]);

    const [mode, setMode] = useState()

    useEffect(() => {
        setMode(userDarkModeDetection ? 'dark' : 'light')
    }, [userDarkModeDetection]);

    const handleThemeChange = () => {
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light')
    }

    return (
        <MainContext.Provider value={{
            pageNumber,
            handlePageNumber,
            drawerOpen,
            setDrawerOpen,
            handleThemeChange
        }}>
            {/*according to specific route we can render specific layout*/}
            <MainLayout mode={mode}>
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
                            <Home helmetTitle='home page'/>
                        </Page>
                        <Page pageNumber={pageNumber} index={1}>
                            <About helmetTitle='about page'/>
                        </Page>
                        <Page pageNumber={pageNumber} index={2}>
                            <Resume helmetTitle='resume page'/>
                        </Page>
                        <Page pageNumber={pageNumber} index={3}>
                            <Course helmetTitle='course page'/>
                        </Page>
                        <Page pageNumber={pageNumber} index={4}>
                            <Comment helmetTitle='course page'/>
                        </Page>
                        <Page pageNumber={pageNumber} index={5}>
                            <Contact helmetTitle='contact page'/>
                        </Page>
                    </SwipeableViews>
                </PageContainer>
            </MainLayout>
        </MainContext.Provider>
    )
}

export default App
