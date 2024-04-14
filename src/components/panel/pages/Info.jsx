import {ArrowLeftRounded} from "@mui/icons-material";
import {Typography} from "@mui/material";

const Info = ({children}) => {
    return (
        <>
            <Typography variant='body1' color='black' sx={{textAlign: 'left', mt: 2}}>
                {children}
                <ArrowLeftRounded
                    sx={{verticalAlign: 'bottom', color: "primary.main", fontSize: 30}}></ArrowLeftRounded>
            </Typography>
        </>
    )
}

const DevInfo = () => {
    return (
        <>
            <Info>i am backend dev</Info>
            <Info>i am backend dev</Info>
            <Info>i am backend dev</Info>
            <Info>i am backend dev</Info>
            <Info>i am backend dev</Info>
        </>
    )
}

export default DevInfo;