import './App.css'
import {createTheme, ThemeProvider} from "@mui/material";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {Helmet, HelmetProvider} from "react-helmet-async";
import Header from "./components/ui/Header.jsx";

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: 'Vazirmatn'
    }
});

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function Rtl(props) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

function App() {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>test</title>
                    </Helmet>
                    <Header/>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default App
