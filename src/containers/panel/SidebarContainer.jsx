import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors";
import {useTheme} from "@mui/material";

export const SidebarContainer = ({children}) => {
    const theme = useTheme()
    return (
        <>
            <Grid xs={0} sm={0} md={3} lg={3} xl={3}
                  sx={{
                      backgroundColor: theme.palette.mode === 'dark' ? grey[900] : grey[400],
                      overflowY: 'auto',
                      overflowX: 'hidden',
                      height: '100vh'
                  }}>
                {children}
            </Grid>
        </>
    )
}