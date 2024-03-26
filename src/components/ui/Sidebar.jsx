import Grid from "@mui/material/Unstable_Grid2";
import {Avatar, Box, Divider, Hidden, Tab, Tabs, Typography} from "@mui/material";
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

export const Sidebar = () => {
    return (
        <>
            {/*sidebar*/}
            <Grid xs={0} sm={0} md={3} lg={3} xl={3} sx={{backgroundColor: grey[800]}}>
                <Box sx={{justifyContent: 'center', textAlign: 'center', mt: 2}}>
                    {/*can be dynamically down ex according to state*/}
                    <Hidden mdDown={true}>
                        <Avatar alt='avatar' src={avatar} sx={{height: 200, width: 200, m: '0 auto'}}/>
                    </Hidden>
                    <Typography variant='h6' color='whitesmoke'>sidebar</Typography>
                    <Typography variant='caption' color='whitesmoke'>sidebar</Typography>
                    <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>
                    <Tabs orientation='vertical' variant={'scrollable'} scrollButtons={'auto'} allowScrollButtonsMobile>
                        <Tab label={'home page'} icon={<HomeRounded/>} iconPosition={'start'}/>
                        <Tab label={'about me'} icon={<FaceRounded/>} iconPosition={'start'}/>
                        <Tab label={'my resume'} icon={<TextSnippetRounded/>} iconPosition={'start'}/>
                        <Tab label={'my projects'} icon={<TerminalRounded/>} iconPosition={'start'}/>
                        <Tab label={'comments'} icon={<MessageRounded/>} iconPosition={'start'}/>
                        <Tab label={'contact'} icon={<ConnectWithoutContactRounded/>} iconPosition={'start'}/>
                    </Tabs>
                    <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>
                    <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'end', height: 100}}>
                        <Typography variant='subtitle2' color={'whitesmoke'}
                                    sx={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse', gap: 1}}>
                            designed
                            <FavoriteRounded sx={{color: 'tomato', height: 20}}/>
                        </Typography>
                    </Box>
                    <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>
                    <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'end', height: 100}}>
                        <Typography variant='subtitle2' color={'whitesmoke'}
                                    sx={{display: 'flex', alignItems: 'center', flexDirection: 'row-reverse', gap: 1}}>
                            copyright 2024
                            <CopyrightRounded sx={{color: 'green', height: 20}}/>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}