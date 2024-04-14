import {Card, CardContent} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import avatar from "../assets/images/avatar.png";
import {WorkCounter} from "../components/panel/pages";
import {Helmet} from "react-helmet-async";
import {CustomAvatar, CustomDivider} from "../components/panel/common/index.js";
import Skills from "../components/panel/Skills.jsx";
import DevInfo from "../components/panel/pages/Info.jsx";

const About = ({helmetTitle}) => {
    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Card sx={{
                height: '100vh',
                backgroundColor: 'whitesmoke',
                overflowY: 'auto'
            }}>
                <CardContent>
                    <Grid container sx={{mx: 3}}>
                        <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                            <CustomDivider borderColor='primary.main' chipColor='primary' align='right'
                                           icon={<CodeRounded/>} text='i am a backend developer'/>
                            <Grid container>
                                <Grid xs={4} sm={4} md={3} lg={3} xl={3} sx={{
                                    mt: 3,
                                    display: {
                                        'xs': 'none',
                                        'sm': 'block',
                                        'md': 'block',
                                    }
                                }}>
                                    <WorkCounter/>
                                </Grid>
                                <Grid xs={12} sm={8} md={9} lg={9} xl={9}>
                                    <DevInfo/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                            <CustomAvatar avatar={avatar} alt='developer' size={250} fallback='developer'/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid sx={{width: 1, mt: 1}}>
                            <CustomDivider borderColor='secondary.main' chipColor='secondary' align='center'
                                           icon={<SelfImprovementRounded/>} text='my skills'/>
                            <Skills/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default About;