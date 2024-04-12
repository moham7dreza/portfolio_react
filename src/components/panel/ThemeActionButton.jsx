import {Box, Fab, useTheme} from "@mui/material";
import {NightlightOutlined, WbSunnyOutlined} from "@mui/icons-material";
import {useContext} from "react";
import MainContext from '../../context/index.js'

export const ThemeActionButton = () => {
    const theme = useTheme()
    const {handleThemeChange} = useContext(MainContext)
    const mode = theme.palette.mode
    return (
        <>
            <Box sx={{display: {sm: 'none', md: 'block'}, position: 'absolute'}}>
                <Fab color='secondary' variant='extended' aria-label={'floating action button'} size='small'
                     sx={{m2: 2, color: mode === 'dark' ? 'gray' : 'black'}}
                     onClick={handleThemeChange}>
                    {mode === 'dark' ? <WbSunnyOutlined sx={{mr: 1}}/> :
                        <NightlightOutlined sx={{mr: 1}}/>}
                    {mode === 'dark' ? 'Light' : 'Dark'}
                </Fab>
            </Box>
        </>
    )
}