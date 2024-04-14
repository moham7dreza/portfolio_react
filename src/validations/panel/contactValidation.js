import * as Yup from "yup"

export const contactValidationSchema = Yup.object().shape({
    name: Yup.string().required('name is required'),
    email: Yup.string().email('email is not valid').required('email is required'),
    subject: Yup.string().required('subject is required'),
    message: Yup.string().required('message is required'),
    recaptcha: Yup.string().required('recaptcha is required'),
})