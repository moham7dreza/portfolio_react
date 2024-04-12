import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors";
import {useTheme} from "@mui/material";

export const PageContainer = ({children}) => {
    const theme = useTheme()
    return (
        <>
            {/*main content*/}
            <Grid xs={12} sm={12} md={9} lg={9} xl={9}
                  sx={{
                      backgroundColor: theme.palette.mode === 'dark' ? grey[900] : grey[400],
                  }}>
                {children}
            </Grid>
        </>
    )
}