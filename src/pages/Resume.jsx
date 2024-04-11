import {Card, CardContent, Chip, Divider, Typography} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";


const Resume = ({helmetTitle}) => {

    const devEdu = [
        {
            year: "۱۳۸۸ - ۱۳۸۹",
            cert: "دیپلم",
            major: "رشته کامپیوتر گرایش نرم افزار",
            place: "فنی حرفه ایی دبیرستان شهید زارعی",
        },
        {
            year: "۱۳۹۰ - ۱۳۹۳",
            cert: "کاردانی",
            major: "رشته کامپیوتر گرایش نرم افزار",
            place: "دانشگاه آزاد اسلامی",
        },
        {
            year: "۱۳۹۲ - ۱۳۹۳",
            cert: "کارشناسی",
            major: "رشته کامپیوتر گرایش نرم افزار",
            place: "دانشگاه آزاد اسلامی",
        },
        {
            year: "۱۳۹۴ - ۱۳۹۵",
            cert: "کارشناسی ارشد",
            major: "رشته کامپیوتر گرایش نرم افزار",
            place: "دانشگاه آزاد اسلامی",
        },
    ];
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
                    <Divider textAlign='center' sx={{'&::before, &::after': {borderColor: 'tomato'}}}>
                        <Chip color='secondary' label={
                            <Typography variant='body1' color='black' sx={{textAlign: 'center'}}>
                                i am a backend developer
                            </Typography>
                        } sx={{p: 3}} icon={<SettingsEthernetRounded/>}></Chip>
                    </Divider>
                    <Grid container sx={{mt: 4}}>
                        <Grid xs={6}>
                            <Divider textAlign='center' sx={{'&::before, &::after': {borderColor: 'tomato'}}}>
                                <Chip color='secondary' label={
                                    <Typography variant='body1' color='black' sx={{textAlign: 'center'}}>
                                        experiences
                                    </Typography>
                                } sx={{p: 3}} icon={<HomeRepairServiceRounded/>}></Chip>
                            </Divider>
                            <Timeline position='right' sx={{direction: 'ltr'}}>
                                {
                                    devEdu.map((item, index) => (
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot variant='outlined' color='warning'>
                                                    <HomeRepairServiceRounded color='warning'/>
                                                </TimelineDot>
                                                {
                                                    index !== devEdu.length - 1 ? <TimelineConnector/> : null
                                                }
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant='cation' color='gray'>
                                                    {item.year}
                                                </Typography>
                                                <Typography variant='body1' color='black'>
                                                    {item.cert}
                                                </Typography>
                                                <Typography variant='body2' color='black'>
                                                    {item.major}
                                                </Typography>
                                                <Typography variant='cation' color='black'>
                                                    {item.place}
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))
                                }
                            </Timeline>
                        </Grid>
                        <Grid xs={6}>
                            <Divider textAlign='center' sx={{'&::before, &::after': {borderColor: 'tomato'}}}>
                                <Chip color='secondary' label={
                                    <Typography variant='body1' color='black' sx={{textAlign: 'center'}}>
                                        education
                                    </Typography>
                                } sx={{p: 3}} icon={<SchoolRounded/>}></Chip>
                            </Divider>
                            <Timeline position='right' sx={{direction: 'ltr'}}>
                                {
                                    devEdu.map((item, index) => (
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot variant='outlined' color='info'>
                                                    <SchoolRounded color='info'/>
                                                </TimelineDot>
                                                {
                                                    index !== devEdu.length - 1 ? <TimelineConnector/> : null
                                                }
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography variant='cation' color='gray'>
                                                    {item.year}
                                                </Typography>
                                                <Typography variant='body1' color='black'>
                                                    {item.cert}
                                                </Typography>
                                                <Typography variant='body2' color='black'>
                                                    {item.major}
                                                </Typography>
                                                <Typography variant='cation' color='black'>
                                                    {item.place}
                                                </Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))
                                }
                            </Timeline>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Resume;