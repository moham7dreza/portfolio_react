import {ThemeProvider, Typography} from "@mui/material";
import {theme} from "../ui/theme.js";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Rtl} from "../ui/Rtl.jsx";
import Grid2 from "@mui/material/Unstable_Grid2";

export const MainLayout = ({children}) => {
    return (
        <>
            <Rtl>
                {/*we can define multiple themes because theme is object so user can easily can easily switch between themes*/}
                <ThemeProvider theme={theme}>
                    <HelmetProvider>
                        <Helmet>
                            <title>test</title>
                        </Helmet>
                        {/*Grid system*/}
                        <Grid2 container sx={{height: "100vh"}}>
                            {/*sidebar*/}
                            <Grid2 xs={0} sm={0} md={3} lg={3} xl={3}>
                                <Typography variant='h5' sx={{backgroundColor: 'red'}}>sidebar</Typography>
                            </Grid2>
                            {/*main content*/}
                            <Grid2 xs={12} sm={12} md={9} lg={9} xl={9}>
                                <Typography variant='h5' sx={{backgroundColor: 'green'}}>content</Typography>
                            </Grid2>
                        </Grid2>
                        {children}
                    </HelmetProvider>
                </ThemeProvider>
            </Rtl>
        </>
    )
}