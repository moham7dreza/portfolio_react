import {ThemeProvider} from "@mui/material";
import {theme} from "../ui/theme.js";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Rtl} from "../ui/Rtl.jsx";

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
                        {children}
                    </HelmetProvider>
                </ThemeProvider>
            </Rtl>
        </>
    )
}