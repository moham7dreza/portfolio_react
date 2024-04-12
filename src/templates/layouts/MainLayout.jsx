import {ThemeProvider} from "@mui/material";
import {darkTheme, lightTheme} from "../themes/index.js";
import {HelmetProvider} from "react-helmet-async";
import {Rtl} from "../ui/Rtl.jsx";
import Grid from "@mui/material/Unstable_Grid2";

export const MainLayout = ({children, mode}) => {
    const theme = mode === 'dark' ? darkTheme : lightTheme;

    return (
        <>
            <Rtl>
                {/*we can define multiple themes because index is object so user can easily can easily switch between themes*/}
                <ThemeProvider theme={theme}>
                    <HelmetProvider>
                        {/*Grid system*/}
                        <Grid container sx={{height: "100vh", width: '100vh'}}>
                            {children}
                        </Grid>
                    </HelmetProvider>
                </ThemeProvider>
            </Rtl>
        </>
    )
}