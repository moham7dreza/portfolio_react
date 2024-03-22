import './App.css'
import {Button, createTheme, ThemeProvider} from "@mui/material";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {Helmet, HelmetProvider} from "react-helmet-async";

const theme = createTheme({
    direction: 'rtl',
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
                    <Button variant={'contained'}>test</Button>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default App
