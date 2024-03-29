import {Avatar, Typography} from "@mui/material";
import avatar from "../../../assets/images/avatar.png";

const SidebarHeader = () => {
    return (
        <>
            {/*can be dynamically down ex according to state*/}
            <Avatar alt='avatar' src={avatar}
                    sx={{height: 200, width: 200, m: '0 auto', display: {xs: 'none', sm: 'none', md: 'block'}}}/>
            <Typography variant='h6' color='whitesmoke'>sidebar</Typography>
            <Typography variant='caption' color='whitesmoke'>sidebar</Typography>
        </>
    )
}

export default SidebarHeader;