import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Slider,
    styled,
    Toolbar,
    Typography,
    useScrollTrigger
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import logo from '../../assets/images/react.svg'
import {MdOutlinePhotoCamera} from "react-icons/md";
import {FiSend} from "react-icons/fi";
import {LoadingButton} from "@mui/lab";

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
                {/*contents are hides behind of appbar we can fix it with static position*/}
                <AppBar position={'static'}>
                    {/*remove default padding from left and right with disableGutters*/}
                    <Toolbar disableGutters>
                        {/*sx property similar to style property but only works with mui components*/}
                        {/*inline styles in most important so h4 is applied*/}
                        {/*sx is a shortcut for defining custom style which has access to the index*/}
                        <Typography variant='h3' sx={{marginRight: '2rem', typography: 'h4'}}>وب سایت شخصی</Typography>
                        {/*<CustomizedButton variant='dashed' color='secondary'>*/}
                        {/*    کلیک کن*/}
                        {/*</CustomizedButton>*/}
                        {/*<CustomizedSlider defaultValue={30}/>*/}
                        {/*<Button css={css`*/}
                        {/*    color: red;*/}

                        {/*    :hover {*/}
                        {/*        color: gold;*/}
                        {/*    }*/}
                        {/*`}>test</Button>*/}
                        <img src={logo} alt="test" style={{width: '3rem'}}/>
                        <Button variant={'outlined'}
                            // style={{color: 'black'}}
                            // we can also define custom colors in index
                                color={'success'}
                                size={'large '}
                                onClick={() => alert('test')}>
                            test
                        </Button>
                        <IconButton color={'error'} aria-label={'upload photo'} component={'label'}>
                            <input type="file" accept={'image/*'} hidden/>
                            <MdOutlinePhotoCamera/>
                        </IconButton>
                        <Button variant={'contained'} color={'error'} startIcon={<FiSend/>}>
                            send
                        </Button>
                        <LoadingButton loading variant="outlined">
                            Submit
                        </LoadingButton>
                        <Box sx={{
                            bgcolor: 'primary.main',
                            borderColor: 'black',
                            border: 1,
                            boxShadow: 1,
                            borderRadius: 2,
                            p: 2,
                            maxWidth: 300,
                            gap: 2,
                        }}>
                            <Button color={'success'} sx={{
                                border: 1,
                                borderColor: 'primary.main',
                                width: 1 / 2,
                            }}>test</Button>
                        </Box>
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