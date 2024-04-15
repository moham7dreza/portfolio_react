import {Avatar, Box, Card, CardContent, Typography} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {ForumRounded} from "@mui/icons-material";
import {comments} from "../constants/panel/comments.js";
import Slider from "react-slick";
import {CustomDivider} from "../components/panel/common/index.js";


const Comment = ({helmetTitle}) => {

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoPlay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: 'linear'
    }

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

                    <CustomDivider borderColor='success.main' chipColor='success' align='center'
                                   icon={<ForumRounded/>} text='comments'/>
                    <Box component='div' sx={{mt: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <Slider {...options}>
                            {
                                comments.map((comment, index) => (
                                    <Box component='div' key={index} sx={{justifyContent: 'center'}}>
                                        <Avatar src={comment.avatar} variant='rounded'
                                                sx={{height: 100, width: 100, mx: 'auto'}}/>
                                        <Typography variant='body1' textAlign='center' color='black'>
                                            {comment.name}
                                        </Typography>
                                        <Typography variant='body2' textAlign='center' color='black' sx={{mb: 2}}>
                                            {comment.job}
                                        </Typography>
                                        <Card sx={{
                                            backgroundColor: 'lightsalmon',
                                            width: 1 / 2,
                                            mx: 'auto',
                                            borderRadius: 5
                                        }}>
                                            <CardContent>
                                                <Typography variant='body2' textAlign='center'>
                                                    {comment.comment}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))
                            }
                        </Slider>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default Comment;