import {Tab, Tabs, useTheme} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useContext} from "react";
import MainContext from "../../../context";
// import {tabsData} from "../../data/tabsData.sidebar.js";
import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";

const SidebarTabs = () => {
    const theme = useTheme()
    const mode = theme.palette.mode

    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext)
    // const data = tabsData();
    // we setup unique id for each tab
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tab-panel-${index}`,
        }
    }

    const tabs = [
        {
            label: 'home page',
            icon: <HomeRounded/>,
            ...tabProps(0)
        },
        {
            label: 'about me',
            icon: <FaceRounded/>,
            ...tabProps(1)
        },
        {
            label: 'my resume',
            icon: <TextSnippetRounded/>,
            ...tabProps(2)
        },
        {
            label: 'my projects',
            icon: <TerminalRounded/>,
            ...tabProps(3)
        },
        {
            label: 'comments',
            icon: <MessageRounded/>,
            ...tabProps(4)
        },
        {
            label: 'contact',
            icon: <ConnectWithoutContactRounded/>,
            ...tabProps(5)
        },
    ]
    return (
        <>
            {/*parent tab gets value and handle change*/}
            <Tabs value={pageNumber} onChange={handlePageNumber} orientation='vertical' variant={'scrollable'}
                  scrollButtons={'auto'} allowScrollButtonsMobile
                  indicatorColor={mode === 'dark' ? 'secondary' : 'primary'}
                  textColor={mode === 'dark' ? 'secondary' : 'primary'}>
                {/*each tab has unique index*/}
                {
                    tabs.map((tab, index) => (
                        <Tab key={index} sx={{
                            "&.MuiTab-root": {
                                minHeight: 50,
                            },
                            backgroundColor: mode === 'dark' ? grey[800] : grey[500],
                            borderRadius: 2,
                            my: .5,
                            mx: 1.5,
                            color: 'text.primary'
                        }} onClick={() => setDrawerOpen(false)}
                             label={tab.label} icon={tab.icon}
                             iconPosition={'start'}
                             {...tab}
                        />
                    ))
                }
            </Tabs>
        </>
    )
}

export default SidebarTabs;