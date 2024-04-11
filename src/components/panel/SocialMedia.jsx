import {Box, IconButton} from "@mui/material";
import {GitHub, Instagram, Telegram, WhatsApp} from "@mui/icons-material";

export const SocialMedia = () => {
    const social_medias = [
        {
            ariaLabel: 'Github',
            icon: <GitHub sx={{color: 'gray'}}/>,
            href: ''
        },
        {
            ariaLabel: 'Instagram',
            icon: <Instagram sx={{color: 'gray'}}/>,
            href: ''
        },
        {
            ariaLabel: 'Telegram',
            icon: <Telegram sx={{color: 'gray'}}/>,
            href: ''
        },
        {
            ariaLabel: 'WhatsApp',
            icon: <WhatsApp sx={{color: 'gray'}}/>,
            href: ''
        },
    ]
    return (
        <>
            {/*social medias*/}
            <Box component='div' sx={{m: '0 auto', textAlign: 'center'}}>
                {
                    social_medias.map((social_media, index) => (
                        <IconButton key={index} arial-label={social_media.ariaLabel}>
                            {/*redirect user outer of our website with anchor tag*/}
                            <a href={social_media.href} target='_blank' rel='noopener noreferrer'>
                                {social_media.icon}
                            </a>
                        </IconButton>
                    ))
                }
            </Box>
        </>
    )
}