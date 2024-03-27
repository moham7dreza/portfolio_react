import Grid from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";

export const ContentContainer = ({children}) => {
    return (
        <>
            {/*main content*/}
            <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
                <Typography variant='h5' sx={{backgroundColor: 'green'}}>content</Typography>
                {children}
            </Grid>
        </>
    )
}