import Grid2 from "@mui/material/Unstable_Grid2";
import {Avatar, Box, Divider, Typography} from "@mui/material";
import avatar from "../../assets/avatar.png";
import {grey} from "@mui/material/colors";

export const Sidebar = () => {
    return (
        <>
            {/*sidebar*/}
            <Grid2 xs={0} sm={0} md={3} lg={3} xl={3} sx={{backgroundColor: grey[800]}}>
                <Box sx={{justifyContent: 'center', textAlign: 'center', mt: 2}}>
                    <Avatar src={avatar} sx={{height: 200, width: 200, m: '0 auto'}}/>
                    <Typography variant='h6' color='whitesmoke'>sidebar</Typography>
                    <Typography variant='caption' color='whitesmoke'>sidebar</Typography>
                    <Divider variant='middle' sx={{mt: 2}} color={grey[900]}/>
                </Box>
            </Grid2>
        </>
    )
}