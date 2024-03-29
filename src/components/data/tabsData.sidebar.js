import {
    ConnectWithoutContactRounded,
    FaceRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";

export const tabsData = () => {
    // we setup unique id for each tab
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tab-panel-${index}`,
        }
    }

    const tabs = [
        {
            label: 'home page',
            icon: <HomeRounded/>,
            ...tabProps(0)
        },
        {
            label: 'about me',
            icon: <FaceRounded/>,
            ...tabProps(1)
        },
        {
            label: 'my resume',
            icon: <TextSnippetRounded/>,
            ...tabProps(2)
        },
        {
            label: 'my projects',
            icon: <TerminalRounded/>,
            ...tabProps(3)
        },
        {
            label: 'comments',
            icon: <MessageRounded/>,
            ...tabProps(4)
        },
        {
            label: 'contact',
            icon: <ConnectWithoutContactRounded/>,
            ...tabProps(5)
        },
    ]

    return tabs;
}