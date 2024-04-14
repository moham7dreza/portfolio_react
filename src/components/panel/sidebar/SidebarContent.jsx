import {Box, Divider} from "@mui/material";
import {SidebarFooter, SidebarHeader, SidebarTabs} from ".";

const SidebarContent = () => {
    return (
        <>
            <Box sx={{justifyContent: 'center', textAlign: 'center', mt: 2}}>
                <SidebarHeader/>

                <Divider variant='middle' sx={{mt: 2}}/>

                <SidebarTabs/>

                <Divider variant='middle' sx={{mt: 2}} sx={{mt: 2}}/>

                <SidebarFooter/>
            </Box>
        </>
    )
}

export default SidebarContent;