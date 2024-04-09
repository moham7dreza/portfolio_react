import {ThemeProvider} from "@mui/material";
import {index} from "../themes/index.js";
import {HelmetProvider} from "react-helmet-async";
import {Rtl} from "../ui/Rtl.jsx";
import Grid from "@mui/material/Unstable_Grid2";

export const MainLayout = ({children}) => {
    return (
        <>
            <Rtl>
                {/*we can define multiple themes because index is object so user can easily can easily switch between themes*/}
                <ThemeProvider theme={index}>
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