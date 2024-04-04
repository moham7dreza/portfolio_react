import {Avatar, Card, CardContent, Chip, Divider, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {CodeRounded, Html, SelfImprovementRounded} from "@mui/icons-material";
import avatar from "../assets/images/avatar.png";
import {Info} from "./components/panel/Info.jsx";
import {Skill} from "./components/panel/Skill.jsx";

const About = () => {
    return (
        <>
            <Card sx={{
                height: '100vh',
                backgroundColor: 'whitesmoke',
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
                            <Info>i am backend dev</Info>
                            <Info>i am backend dev</Info>
                            <Info>i am backend dev</Info>
                            <Info>i am backend dev</Info>
                            <Info>i am backend dev</Info>
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
                            <Skill label='Html' icon={<Html/>} percent={90} color={'primary'}/>
                            <Skill label='Js' icon={<Html/>} percent={80} color={'secondary'}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default About;