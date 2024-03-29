import {Box, Typography} from "@mui/material";

export const TabPanel = (props) => {
    // other props is placed inside others prop
    const {children, pageNumber, index, ...others} = props;
    return (
        <>
            {/*is hidden when index not equal to pageNumber*/}
            <div role='tabpanel' hidden={pageNumber !== index} id={`tab-panel-${index}`}
                 aria-labelledby={`tab-panel-${index}`} {...others}>
                {/*show component when index equal to pageNumber*/}
                {pageNumber === index && (
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