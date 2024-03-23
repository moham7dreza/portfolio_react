import './App.css'
import {ThemeProvider} from "@mui/material";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {Helmet, HelmetProvider} from "react-helmet-async";
import Header from "./components/ui/Header.jsx";
import {theme} from "./components/ui/theme.js";

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
        <Rtl>
            {/*we can define multiple themes because theme is object so user can easily can easily switch between themes*/}
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>test</title>
                    </Helmet>
                    <Header/>
                </HelmetProvider>
            </ThemeProvider>
        </Rtl>
    )
}

export default App
