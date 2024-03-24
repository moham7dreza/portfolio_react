import {ThemeProvider, Typography} from "@mui/material";
import {theme} from "../ui/theme.js";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Rtl} from "../ui/Rtl.jsx";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Sidebar} from "../ui/Sidebar.jsx";

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
                            <Sidebar/>
                            {/*main content*/}
                            <Grid2 xs={12} sm={12} md={9} lg={9} xl={9}>
                                <Typography variant='h5' sx={{backgroundColor: 'green'}}>content</Typography>
                                {children}
                            </Grid2>
                        </Grid2>
                    </HelmetProvider>
                </ThemeProvider>
            </Rtl>
        </>
    )
}