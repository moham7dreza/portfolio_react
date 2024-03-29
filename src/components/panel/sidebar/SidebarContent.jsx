import {Box, Divider} from "@mui/material";
import {grey} from "@mui/material/colors";
import {SidebarFooter, SidebarHeader, SidebarTabs} from ".";

const SidebarContent = () => {
    return (
        <>
            <Box sx={{justifyContent: 'center', textAlign: 'center', mt: 2}}>
                <SidebarHeader/>

                <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>

                <SidebarTabs/>

                <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>

                <SidebarFooter/>
            </Box>
        </>
    )
}

export default SidebarContent;