import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors";

export const SidebarContainer = ({children}) => {
    return (
        <>
            <Grid xs={0} sm={0} md={3} lg={3} xl={3}
                  sx={{
                      backgroundColor: grey[800],
                      overflowY: 'auto',
                      overflowX: 'hidden',
                      height: '100vh'
                  }}>
                {children}
            </Grid>
        </>
    )
}