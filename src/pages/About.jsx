import {Avatar, Box, Card, CardContent, Chip, Divider, Tooltip, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
    CodeRounded,
    Coffee,
    DataObjectRounded,
    DomainVerificationRounded,
    Html,
    SchoolRounded,
    SelfImprovementRounded
} from "@mui/icons-material";
import avatar from "../assets/images/avatar.png";
import {Info} from "./components/panel/Info.jsx";
import {Skill} from "./components/panel/Skill.jsx";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import CountUp from "react-countup";

const About = () => {
    const [html, setHtml] = useState(0)
    const [js, setJs] = useState(0)

    const devWorkInfo = [
        {
            tooltipTitle: "تعداد قهوه های خورده شده",
            icon: <Coffee/>,
            total: 1650,
            color: "lightcoral",
        },
        {
            tooltipTitle: "تعداد دوره های من",
            icon: <SchoolRounded/>,
            total: 25,
            color: "lightskyblue",
        },
        {
            tooltipTitle: "تعداد پروژه های من",
            icon: <DataObjectRounded/>,
            total: 34,
            color: "lightslategray",
        },
        {
            tooltipTitle: "تعداد پروژه های به پایان رسیده",
            icon: <DomainVerificationRounded/>,
            total: 12,
            color: "lightseagreen",
        },
    ];

    useEffect(() => {
        function getRand() {
            return Math.round(Math.random() * 10)
        }

        // use setInterval to increase old values every 100 ms
        const timer = setInterval(() => {
            // create rand number between 0 and 10 and add it to old value to receive to html skill value
            setHtml(html => Math.min(html + getRand(), 82))
            setJs(js => Math.min(js + getRand(), 90))
        }, 100)

        // when unmounting
        return () => {
            clearInterval(timer)
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>about me</title>
            </Helmet>
            <Card sx={{
                height: '100vh',
                backgroundColor: 'whitesmoke',
                overflowY: 'auto'
            }}>
                <CardContent>
                    <Grid container sx={{mx: 3}}>
                        <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Divider textAlign='right'>
                                <Chip color='primary' label={
                                    <Typography variant='body1' color='black' sx={{textAlign: 'center'}}>
                                        i am a backend developer
                                    </Typography>
                                } sx={{p: 3}} icon={<CodeRounded/>}></Chip>
                            </Divider>
                            <Grid container>
                                <Grid xs={4} sm={4} md={3} lg={3} xl={3} sx={{
                                    mt: 3,
                                    display: {
                                        'xs': 'none',
                                        'sm': 'block',
                                        'md': 'block',
                                    }
                                }}>
                                    {
                                        devWorkInfo.map((item, index) => (
                                            <Box component='div' key={index} sx={{width: 1, mb: 2}}>
                                                <Tooltip title={item.tooltipTitle} placement='right' arrow>
                                                    <Chip icon={item.icon} label={
                                                        <Typography variant='body1' color='whitesmoke'>
                                                            <CountUp start={0} end={item.total} duration={2}/>
                                                        </Typography>
                                                    } sx={{p: 2, backgroundColor: item.color, width: 1}}/>
                                                </Tooltip>
                                            </Box>
                                        ))
                                    }
                                </Grid>
                                <Grid xs={12} sm={8} md={9} lg={9} xl={9}>
                                    <Info>i am backend dev</Info>
                                    <Info>i am backend dev</Info>
                                    <Info>i am backend dev</Info>
                                    <Info>i am backend dev</Info>
                                    <Info>i am backend dev</Info>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                            <Avatar alt='avatar' src={avatar} variant='rounded'
                                    sx={{
                                        height: 250,
                                        width: 250,
                                        m: '0 auto',
                                        display: {xs: 'none', sm: 'none', md: 'block'}
                                    }}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid sx={{width: 1, mt: 1}}>
                            <Divider textAlign='center' sx={{'&::before, &::after': {borderColor: 'white'}}}>
                                <Chip color='secondary' label={
                                    <Typography variant='body1' color='black' sx={{textAlign: 'center'}}>
                                        i am a backend developer
                                    </Typography>
                                } sx={{p: 3}} icon={<SelfImprovementRounded/>}></Chip>
                            </Divider>
                            <Skill label='Html' icon={<Html/>} percent={html} color={'primary'}/>
                            <Skill label='Js' icon={<Html/>} percent={js} color={'secondary'}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default About;