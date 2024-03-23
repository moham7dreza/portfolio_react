import {AppBar, Box, Button, Container, Slider, styled, Toolbar, Typography, useScrollTrigger} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import {css} from "@emotion/react"

const Header = () => {

    function ElevationScroll(props) {
        const {children} = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true, // make appbar floating fast
            threshold: 5, // max scroll threshold
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    const CustomizedSlider = styled(Slider)`
        color: #20b2aa;

        :hover {
            color: #2e8b57;
        }
    `;

    const CustomizedButton = styled(Button)`
        color: lime;

        :hover {
            color: blue;
        }
    `;

    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <Typography variant='h3'>وب سایت شخصی</Typography>
                        <CustomizedButton variant='dashed' color='secondary'>
                            کلیک کن
                        </CustomizedButton>
                        {/*<CustomizedSlider defaultValue={30}/>*/}
                        <Button css={css`
                            color: red;

                            :hover {
                                color: gold;
                            }
                        `}>test</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Container>
                <Box sx={{my: 2}}>
                    {[...new Array(100)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </>
    )
}

export default Header;