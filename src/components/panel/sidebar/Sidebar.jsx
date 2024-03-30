import {SidebarContent} from ".";
import {SidebarDrawer} from "../drawer";

const Sidebar = () => {
    return (
        <>
            <>
                {/*sidebar content which follow grid system breakpoints and hidden below md*/}
                <SidebarContent/>

                <SidebarDrawer/>
            </>
        </>
    )
}

export default Sidebar;