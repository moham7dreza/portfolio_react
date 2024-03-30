import Grid from "@mui/material/Unstable_Grid2";

export const PageContainer = ({children}) => {
    return (
        <>
            {/*main content*/}
            <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
                {children}
            </Grid>
        </>
    )
}