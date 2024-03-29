import {Box, Drawer, Fab} from "@mui/material";
import {red} from "@mui/material/colors";
import {useState} from "react";
import {SidebarContent} from ".";
import {MenuRounded} from "@mui/icons-material";

const Sidebar = ({value, handleChange}) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <>
            <>
                {/*hidden box below md*/}
                <Box sx={{display: {md: 'none'}}}>
                    <Fab aria-label={'floating action button'} size='small' sx={{m: 2, backgroundColor: red[500]}}
                         onClick={() => setDrawerOpen(true)}>
                        <MenuRounded/>
                    </Fab>
                </Box>

                {/*sidebar content which follow grid system breakpoints and hidden below md*/}
                <SidebarContent value={value} handleChange={handleChange}/>
                {/*if we use drawer to toggle sidebar it has not inherited of grid system width because of grid have many breakpoints*/}
                {/*drawer has not compatible with grid system width*/}
                {/*drawer have been created a new layer in layout seperated from grid system*/}
                {/*so we can not give width to drawer dynamically according to grid breakpoints*/}
                {/*use drawer and show it below md*/}
                {/*use sx with custom css to modify drawer width*/}
                {/*use temporary variant to get shadow in content section which means drawer can be hidden*/}
                <Drawer sx={{"& .MuiDrawer-paper": {width: 320}, display: {md: 'none'}}} open={drawerOpen}
                        variant={'temporary'}
                        onClose={() => setDrawerOpen(false)}>
                    <SidebarContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen}/>
                </Drawer>
            </>
        </>
    )
}

export default Sidebar;