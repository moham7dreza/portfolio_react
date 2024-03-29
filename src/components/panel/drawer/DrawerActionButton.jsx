import {Box, Fab} from "@mui/material";
import {red} from "@mui/material/colors";
import {MenuRounded} from "@mui/icons-material";

const DrawerActionButton = ({setDrawerOpen}) => {
    return (
        <>
            {/*hidden box below md*/}
            <Box sx={{display: {md: 'none'}}}>
                <Fab aria-label={'floating action button'} size='small' sx={{m: 2, backgroundColor: red[500]}}
                     onClick={() => setDrawerOpen(true)}>
                    <MenuRounded/>
                </Fab>
            </Box>
        </>
    )
}

export default DrawerActionButton;