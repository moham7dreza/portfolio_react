import {Card, CardContent, Slide, Typography} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {useEffect, useState} from "react";
import {AccountCircle} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import MainImage from "../assets/images/Portfolio-Desk.jpg";
import {CustomDivider} from "../components/panel/common/index.js";
import {ContactForm} from "../components/panel/pages/index.js";


const Contact = ({helmetTitle}) => {

    const [loading, setLoading] = useState(false)

    // mounting
    useEffect(() => {
        setLoading(true)

        // unmounting
        return () => {
            setLoading(false)
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Card sx={{
                height: '100vh',
                backgroundColor: 'whitesmoke',
                overflowY: 'scroll',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <CardContent>

                    <CustomDivider borderColor='warning.main' chipColor='warning' align='center'
                                   icon={<AccountCircle/>} text='contact'/>
                    <Grid container sx={{mt: 5}}>
                        <Slide direction='up' in={loading}
                               style={{transitionDelay: loading ? '200ms' : '0ms'}}>
                            <Grid xs={12} sm={12} md={8}>
                                <Card sx={{justifyContent: 'center', alignItems: 'center'}}>
                                    <ContactForm/>
                                </Card>
                            </Grid>
                        </Slide>
                        <Slide direction='up' in={loading}
                               style={{transitionDelay: loading ? '200ms' : '0ms'}}>
                            <Grid xs={0} sm={0} md={4} sx={{
                                textAlign: 'center',
                                backgroundImage: `url(${MainImage})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}>
                                <Typography variant='h6' color='black' sx={{
                                    mt: 4, display: {
                                        xs: 'none',
                                        sm: 'none',
                                        md: 'block'
                                    }
                                }}>
                                    talk to me
                                </Typography>
                                <Typography variant='body1' color='black' sx={{
                                    mt: 2, display: {
                                        sm: 'none',
                                        md: 'block'
                                    }
                                }}>
                                    talk to me
                                </Typography>
                            </Grid>
                        </Slide>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Contact;