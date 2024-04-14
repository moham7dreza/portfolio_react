import {Avatar} from "@mui/material";

const CustomAvatar = ({avatar, alt, size, fallback}) => {
    return (
        <>
            <Avatar alt={alt} src={avatar} variant='rounded'
                    sx={{
                        height: size,
                        width: size,
                        mx: 'auto',
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'block'
                        }
                    }}>
                {fallback}
            </Avatar>
        </>
    )
}

export default CustomAvatar;