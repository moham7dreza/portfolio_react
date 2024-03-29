import {SidebarContent} from ".";
import {DrawerActionButton, SidebarDrawer} from "../drawer";

const Sidebar = () => {
    return (
        <>
            <>
                <DrawerActionButton/>

                {/*sidebar content which follow grid system breakpoints and hidden below md*/}
                <SidebarContent/>

                <SidebarDrawer/>
            </>
        </>
    )
}

export default Sidebar;