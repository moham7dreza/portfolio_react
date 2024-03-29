import {Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";
import {useContext} from "react";
import MainContext from "../../../context";

const SidebarTabs = () => {
    const {pageNumber, handlePageNumber, setDrawerOpen} = useContext(MainContext)

    // we setup unique id for each tab
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tab-panel-${index}`,
        }
    }
    return (
        <>
            {/*parent tab gets value and handle change*/}
            <Tabs value={pageNumber} onChange={handlePageNumber} orientation='vertical' variant={'scrollable'}
                  scrollButtons={'auto'} allowScrollButtonsMobile>
                {/*each tab has unique index*/}
                <Tab sx={{
                    "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2
                    }
                }} onClick={() => setDrawerOpen(false)} {...tabProps(0)} label={'home page'} icon={<HomeRounded/>}
                     iconPosition={'start'}/>
                <Tab sx={{
                    "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2
                    }
                }} onClick={() => setDrawerOpen(false)} {...tabProps(1)} label={'about me'} icon={<FaceRounded/>}
                     iconPosition={'start'}/>
                <Tab sx={{
                    "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2
                    }
                }} onClick={() => setDrawerOpen(false)} {...tabProps(2)} label={'my resume'}
                     icon={<TextSnippetRounded/>}
                     iconPosition={'start'}/>
                <Tab sx={{
                    "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2
                    }
                }} onClick={() => setDrawerOpen(false)} {...tabProps(3)} label={'my projects'}
                     icon={<TerminalRounded/>}
                     iconPosition={'start'}/>
                <Tab sx={{
                    "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2
                    }
                }} onClick={() => setDrawerOpen(false)} {...tabProps(4)} label={'comments'} icon={<MessageRounded/>}
                     iconPosition={'start'}/>
                <Tab sx={{
                    "&.MuiTab-root": {
                        minHeight: 50,
                        backgroundColor: grey[800],
                        borderRadius: 2
                    }
                }} onClick={() => setDrawerOpen(false)} {...tabProps(5)} label={'contact'}
                     icon={<ConnectWithoutContactRounded/>}
                     iconPosition={'start'}/>
            </Tabs>
        </>
    )
}

export default SidebarTabs;