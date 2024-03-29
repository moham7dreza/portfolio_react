import {Drawer} from "@mui/material";
import {SidebarContent} from "../sidebar/index.js";

const SidebarDrawer = ({value, handleChange, drawerOpen, setDrawerOpen}) => {
    return (
        <>
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
    )
}

export default SidebarDrawer;