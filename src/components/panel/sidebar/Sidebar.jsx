import {SidebarContent} from ".";
import {DrawerActionButton, SidebarDrawer} from "../drawer";

const Sidebar = ({value, handleChange}) => {
    return (
        <>
            <>
                <DrawerActionButton setDrawerOpen={setDrawerOpen}/>

                {/*sidebar content which follow grid system breakpoints and hidden below md*/}
                <SidebarContent value={value} handleChange={handleChange}/>

                <SidebarDrawer value={value} handleChange={handleChange} drawerOpen={drawerOpen}
                               setDrawerOpen={setDrawerOpen}/>
            </>
        </>
    )
}

export default Sidebar;