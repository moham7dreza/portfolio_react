import {Slide, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {HomeRepairServiceRounded} from "@mui/icons-material";

const EducationTimeline = ({loading}) => {

    const devEdu = [
        {
            year: "2024",
            cert: "master",
            major: "computer",
            place: "urmia uni",
        }, {
            year: "2024",
            cert: "master",
            major: "computer",
            place: "urmia uni",
        }, {
            year: "2024",
            cert: "master",
            major: "computer",
            place: "urmia uni",
        }, {
            year: "2024",
            cert: "master",
            major: "computer",
            place: "urmia uni",
        },
    ];

    return (
        <>
            <Timeline position='right' sx={{direction: 'ltr'}}>
                {
                    devEdu.map((item, index) => (
                        <Slide key={index} direction='up' in={loading}
                               style={{transitionDelay: loading ? `${index + 3}99ms` : '0ms'}}>
                            <TimelineItem>
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
                        </Slide>
                    ))
                }
            </Timeline>
        </>
    )
}

export default EducationTimeline;