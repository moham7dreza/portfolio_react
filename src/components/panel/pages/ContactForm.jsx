import {Button, CardActions, CardContent, InputAdornment, TextField, Typography, useTheme} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {EmailRounded, Face6Rounded, SubjectRounded} from "@mui/icons-material";
import {ReCAPTCHA} from "react-google-recaptcha";
import {useFormik} from "formik";
import {contactValidationSchema} from "../../../validations/panel/contactValidation.js";

const ContactForm = () => {

    const contactInputNames = {
        name: '',
        email: '',
        subject: '',
        message: '',
        recaptcha: '',
    }

    const formik = useFormik({
        initialValues: contactInputNames,
        onSubmit: values => {

        },
        validationSchema: contactValidationSchema,
    })
    return (
        <>
            <form autoComplete='off' onSubmit={formik.handleSubmit}>
                <CardContent>
                    <Grid container>
                        <Grid xs={12} sx={{direction: 'ltr'}}>
                            <Grid container spacing={2}>
                                <Grid xs={12} md={6}>
                                    <TextField fullWidth size='small' color='warning' focused
                                               label='name' name='name' variant='outlined'
                                               helperText={
                                                   formik.touched.name ? formik.errors.name : null
                                               }
                                               error={Boolean(formik.touched.name && formik.errors.name)}
                                               value={formik.values?.name}
                                               onChange={formik.handleChange}
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
                                               helperText={
                                                   formik.touched.email ? formik.errors.email : null
                                               }
                                               error={Boolean(formik.touched.email && formik.errors.email)}
                                               value={formik.values?.email}
                                               onChange={formik.handleChange}
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
                                               helperText={
                                                   formik.touched.subject ? formik.errors.subject : null
                                               }
                                               error={Boolean(formik.touched.subject && formik.errors.subject)}
                                               value={formik.values?.subject}
                                               onChange={formik.handleChange}
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
                                               variant='outlined'
                                               helperText={
                                                   formik.touched.message ? formik.errors.message : null
                                               }
                                               error={Boolean(formik.touched.message && formik.errors.message)}
                                               value={formik.values?.message}
                                               onChange={formik.handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{alignItems: 'end', flexDirection: 'column'}}>
                    <ReCAPTCHA
                        sitekey={import.meta.env.GOOGLE_RECAPTCHA_V2_SITE_KEY}
                        theme={useTheme().palette.mode}
                        onChange={value => {
                            formik.setFieldValue('recaptcha', value)
                        }}
                        hl='fa'
                    />
                    {
                        formik.errors.recaptcha && formik.touched.recaptcha && (
                            <Typography variant='caption' color='error'>
                                {formik.errors.recaptcha}
                            </Typography>
                        )
                    }
                    <Button type='submit' color='success' variant='contained' fullWidth
                            sx={{mt: 2}}>
                        send
                    </Button>
                </CardActions>
            </form>
        </>
    )
}

export default ContactForm;