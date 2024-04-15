import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Slide, Typography} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {SchoolRounded} from "@mui/icons-material";
import {courses} from "../constants/panel/courses.js";
import EllipsisText from "react-ellipsis-text";
import {CustomDivider} from "../components/panel/common/index.js";


const Course = ({helmetTitle}) => {

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
                overflowY: 'auto'
            }}>
                <CardContent>
                    <CustomDivider borderColor='primary.main' chipColor='primary' align='center'
                                   icon={<SchoolRounded/>} text='courses'/>

                    <Grid container sx={{mx: 3, mt: 4}}>
                        {
                            courses.map((course, index) => (
                                <Grid key={index} xs={12} sm={6} lg={4} sx={{px: 2, mb: 2}}>
                                    <Slide direction='up' in={loading}
                                           style={{transitionDelay: loading ? `${index + 3}99ms` : '0ms'}}>
                                        <Card sx={{maxWidth: 345, backgroundColor: 'gray'}}>
                                            <CardActionArea>
                                                <CardMedia component='img' height={250} width={200} image={course.image}
                                                           alt={course.title}/>

                                                <CardContent>
                                                    <Typography variant='body1' textAlign='left' gutterBottom>
                                                        {course.title}
                                                    </Typography>
                                                    {/*dir ltr for align ... in correct way*/}
                                                    <Typography sx={{direction: 'ltr'}} variant='body2'
                                                                color='text.secondary' textAlign='left' gutterBottom>
                                                        <EllipsisText text={course.info} length={100}/>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button href={course.link} size='small' color='primary' target='_blank'>
                                                    more
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Slide>
                                </Grid>
                            ))
                        }
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Course;