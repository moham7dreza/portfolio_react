import Grid from "@mui/material/Unstable_Grid2";
import {Drawer} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useState} from "react";
import {DrawerContent} from "./ui/DrawerContent.jsx";

export const Sidebar = ({value, handleChange}) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
            {/*sidebar*/}
            <Grid xs={0} sm={0} md={3} lg={3} xl={3} sx={{backgroundColor: grey[800]}}>
                {/*sidebar content which follow grid system breakpoints and hidden below md*/}
                <DrawerContent value={value} handleChange={handleChange}/>
                {/*if we use drawer to toggle sidebar it has not inherited of grid system width because of grid have many breakpoints*/}
                {/*drawer has not compatible with grid system width*/}
                {/*drawer have been created a new layer in layout seperated from grid system*/}
                {/*so we can not give width to drawer dynamically according to grid breakpoints*/}
                {/*use drawer and show it below md*/}
                {/*use sx with custom css to modify drawer width*/}
                {/*use temporary variant to get shadow in content section which means drawer can be hidden*/}
                <Drawer sx={{"& .MuiDrawer-paper": {width: 320}}} open={drawerOpen} variant={'temporary'}
                        onClose={() => setDrawerOpen(false)}>
                    <DrawerContent value={value} handleChange={handleChange}/>
                </Drawer>
            </Grid>
        </>
    )
}