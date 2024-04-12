import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'light',
        primary: {
            main: '#8be9fd'
        },
        secondary: {
            main: '#50fa7b'
        },
    },
    typography: {
        fontFamily: 'Vazirmatn',
        button: {
            fontFamily: 'tahoma',
            fontSize: 16,
        }
    },
    // components: {
    //     MuiButtonBase: {
    //         defaultProps: {
    //             disableRipple: false
    //         }
    //     },
    //     MuiButton: {
    //         variants: [
    //             {
    //                 props: {variant: 'dashed'},
    //                 style: {
    //                     textTransform: 'none',
    //                     border: `2px dashed ${blue[500]}`,
    //                 },
    //             },
    //             {
    //                 props: {variant: 'dashed', color: 'secondary'},
    //                 style: {
    //                     border: `4px dashed ${red[500]}`,
    //                 },
    //             },
    //         ],
    //         styleOverrides: {
    //             root: {
    //                 fontSize: '1.2rem',
    //                 fontFamily: 'Vazirmatn',
    //                 padding: '.6rem',
    //             }
    //         }
    //     }
    // }
});

export const darkTheme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'dark',
        primary: {
            main: '#8be9fd'
        },
        secondary: {
            main: '#50fa7b'
        },
    },
    typography: {
        fontFamily: 'Vazirmatn',
        button: {
            fontFamily: 'tahoma',
            fontSize: 16,
        }
    }
})