import {Box, Typography} from "@mui/material";

export const TabPanel = (props) => {
    // other props is placed inside others prop
    const {children, value, index, ...others} = props;
    return (
        <>
            <div role='tabpanel' hidden={value !== index} id={`tab-panel-${index}`}
                 aria-labelledby={`tab-panel-${index}`} {...others}>
                {value === index && (
                    <>
                        <Box sx={{p: 3}}>
                            <Typography>
                                {children}
                            </Typography>
                        </Box>
                    </>
                )}
            </div>
        </>
    )
}