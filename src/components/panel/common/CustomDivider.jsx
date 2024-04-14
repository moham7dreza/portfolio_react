import {useEffect, useState} from "react";
import {Chip, Divider, Slide, Typography} from "@mui/material";

const CustomDivider = ({text, icon, borderColor, chipColor, align}) => {

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
            <Slide direction='down' in={loading} style={{
                transitionDelay: loading ? '500ms' : '0ms'
            }}>
                <Divider textAlign={align} sx={{'&::before, &::after': {borderColor: borderColor}}}>
                    <Chip color={chipColor} label={
                        <Typography variant='body1' color='black' sx={{textAlign: 'center'}}>
                            {text}
                        </Typography>
                    } sx={{p: 3}} icon={icon}></Chip>
                </Divider>
            </Slide>
        </>
    )
}

export default CustomDivider;