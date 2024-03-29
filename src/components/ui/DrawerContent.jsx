import {Avatar, Box, Divider, Tab, Tabs, Typography} from "@mui/material";
import avatar from "../../assets/avatar.png";
import {grey} from "@mui/material/colors";
import {
    ConnectWithoutContactRounded,
    CopyrightRounded,
    FaceRounded,
    FavoriteRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";

export const DrawerContent = ({value, handleChange}) => {
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
                {/*can be dynamically down ex according to state*/}
                <Avatar alt='avatar' src={avatar}
                        sx={{height: 200, width: 200, m: '0 auto', display: {xs: 'none', sm: 'none', md: 'block'}}}/>
                <Typography variant='h6' color='whitesmoke'>sidebar</Typography>
                <Typography variant='caption' color='whitesmoke'>sidebar</Typography>
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
                    }} {...tabProps(0)} label={'home page'} icon={<HomeRounded/>} iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} {...tabProps(1)} label={'about me'} icon={<FaceRounded/>} iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} {...tabProps(2)} label={'my resume'} icon={<TextSnippetRounded/>}
                         iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} {...tabProps(3)} label={'my projects'} icon={<TerminalRounded/>}
                         iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} {...tabProps(4)} label={'comments'} icon={<MessageRounded/>} iconPosition={'start'}/>
                    <Tab sx={{
                        "& .MuiTab-root": {
                            minHeight: 50,
                            backgroundColor: grey[800],
                            borderRadius: 2
                        }
                    }} {...tabProps(5)} label={'contact'} icon={<ConnectWithoutContactRounded/>}
                         iconPosition={'start'}/>
                </Tabs>
                <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'end',
                    height: 100
                }}>
                    <Typography variant='subtitle2' color={'whitesmoke'}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row-reverse',
                                    gap: 1
                                }}>
                        designed
                        <FavoriteRounded sx={{color: 'tomato', height: 20}}/>
                    </Typography>
                </Box>
                <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>
                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'end',
                    height: 100
                }}>
                    <Typography variant='subtitle2' color={'whitesmoke'}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row-reverse',
                                    gap: 1
                                }}>
                        copyright 2024
                        <CopyrightRounded sx={{color: 'green', height: 20}}/>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}