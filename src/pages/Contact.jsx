import {
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Divider,
    InputAdornment,
    Slide,
    TextField,
    Typography
} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {useEffect, useState} from "react";
import {AccountCircle, EmailRounded, Face6Rounded, SubjectRounded} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import MainImage from "../assets/images/Portfolio-Desk.jpg";


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
                    <Slide direction='down' in={loading} style={{
                        transitionDelay: loading ? '500ms' : '0ms'
                    }}>
                        <Divider textAlign='center' sx={{'&::before, &::after': {borderColor: 'tomato'}}}>
                            <Chip color='secondary' label={
                                <Typography variant='body1' color='black' sx={{textAlign: 'center'}}>
                                    contact
                                </Typography>
                            } sx={{p: 3}} icon={<AccountCircle/>}></Chip>
                        </Divider>
                    </Slide>
                    <Grid container sx={{mt: 5}}>
                        <Slide direction='up' in={loading}
                               style={{transitionDelay: loading ? '200ms' : '0ms'}}>
                            <Grid xs={12} sm={12} md={8}>
                                <Card sx={{justifyContent: 'center', alignItems: 'center'}}>
                                    <form autoComplete='off'>
                                        <CardContent>
                                            <Grid container>
                                                <Grid xs={12} sx={{direction: 'ltr'}}>
                                                    <Grid container spacing={2}>
                                                        <Grid xs={12} md={6}>
                                                            <TextField fullWidth size='small' color='warning' focused
                                                                       label='name' name='name' variant='outlined'
                                                                       InputProps={{
                                                                           endAdornment: (
                                                                               <InputAdornment position='end'>
                                                                                   <Face6Rounded/>
                                                                               </InputAdornment>
                                                                           )
                                                                       }}/>
                                                        </Grid>
                                                        <Grid xs={12} md={6}>
                                                            <TextField fullWidth size='small' color='warning'
                                                                       label='email' name='email' variant='outlined'
                                                                       InputProps={{
                                                                           endAdornment: (
                                                                               <InputAdornment position='end'>
                                                                                   <EmailRounded/>
                                                                               </InputAdornment>
                                                                           )
                                                                       }}/>
                                                        </Grid>
                                                        <Grid xs={12} md={12}>
                                                            <TextField fullWidth size='small' color='warning'
                                                                       label='subject' name='subject' variant='outlined'
                                                                       InputProps={{
                                                                           endAdornment: (
                                                                               <InputAdornment position='end'>
                                                                                   <SubjectRounded/>
                                                                               </InputAdornment>
                                                                           )
                                                                       }}/>
                                                        </Grid>
                                                        <Grid xs={12} md={12}>
                                                            <TextField multiline rows={6} fullWidth size='small'
                                                                       color='warning'
                                                                       label='message' name='message'
                                                                       variant='outlined'/>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions sx={{alignItems: 'end', flexDirection: 'column'}}>
                                            <Button type='submit' color='success' variant='contained' fullWidth
                                                    sx={{mt: 2}}>
                                                send
                                            </Button>
                                        </CardActions>
                                    </form>
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