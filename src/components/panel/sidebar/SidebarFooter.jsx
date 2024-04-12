import {Box, Divider, Typography} from "@mui/material";
import {CopyrightRounded, FavoriteRounded} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

const SidebarFooter = () => {
    return (
        <>
            <Box sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
                height: 50
            }}>
                <Typography variant='subtitle2' color='text.primary'
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
                height: 50
            }}>
                <Typography variant='subtitle2' color='text.primary'
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
        </>
    )
}

export default SidebarFooter;