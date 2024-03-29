import {Box, Divider, Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";
import {SidebarHeader} from "./sidebar/SidebarHeader.jsx";
import {SidebarFooter} from "./sidebar/SidebarFooter.jsx";

export const DrawerContent = ({value, handleChange, setDrawerOpen}) => {
    // we setup unique id for each tab
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tab-panel-${index}`,
        }
    }
    return (
        <>
            <Box sx={{justifyContent: 'center', textAlign: 'center', mt: 2}}>
                <SidebarHeader/>
                <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>
                {/*parent tab gets value and handle change*/}
                <Tabs value={value} onChange={handleChange} orientation='vertical' variant={'scrollable'}
                      scrollButtons={'auto'} allowScrollButtonsMobile>
                    {/*each tab has unique index*/}
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} onClick={() => setDrawerOpen(false)} {...tabProps(0)} label={'home page'} icon={<HomeRounded/>}
                         iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} onClick={() => setDrawerOpen(false)} {...tabProps(1)} label={'about me'} icon={<FaceRounded/>}
                         iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} onClick={() => setDrawerOpen(false)} {...tabProps(2)} label={'my resume'}
                         icon={<TextSnippetRounded/>}
                         iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} onClick={() => setDrawerOpen(false)} {...tabProps(3)} label={'my projects'}
                         icon={<TerminalRounded/>}
                         iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} onClick={() => setDrawerOpen(false)} {...tabProps(4)} label={'comments'} icon={<MessageRounded/>}
                         iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} onClick={() => setDrawerOpen(false)} {...tabProps(5)} label={'contact'}
                         icon={<ConnectWithoutContactRounded/>}
                         iconPosition={'start'}/>
                </Tabs>
                <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>
                <SidebarFooter/>
            </Box>
        </>
    )
}