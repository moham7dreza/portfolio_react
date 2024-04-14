import {Box, Chip, Tooltip, Typography} from "@mui/material";
import CountUp from "react-countup";
import {Coffee, DataObjectRounded, DomainVerificationRounded, SchoolRounded} from "@mui/icons-material";

const WorkCounter = () => {

    const devWorkInfo = [
        {
            tooltipTitle: "تعداد قهوه های خورده شده",
            icon: <Coffee/>,
            total: 1650,
            color: "lightcoral",
        },
        {
            tooltipTitle: "تعداد دوره های من",
            icon: <SchoolRounded/>,
            total: 25,
            color: "lightskyblue",
        },
        {
            tooltipTitle: "تعداد پروژه های من",
            icon: <DataObjectRounded/>,
            total: 34,
            color: "lightslategray",
        },
        {
            tooltipTitle: "تعداد پروژه های به پایان رسیده",
            icon: <DomainVerificationRounded/>,
            total: 12,
            color: "lightseagreen",
        },
    ];

    return (
        <>
            {
                devWorkInfo.map((item, index) => (
                    <Box component='div' key={index} sx={{width: 1, mb: 2}}>
                        <Tooltip title={item.tooltipTitle} placement='right' arrow>
                            <Chip icon={item.icon} label={
                                <Typography variant='body1' color='whitesmoke'>
                                    <CountUp start={0} end={item.total} duration={2}/>
                                </Typography>
                            } sx={{p: 2, backgroundColor: item.color, width: 1}}/>
                        </Tooltip>
                    </Box>
                ))
            }
        </>
    )
}

export default WorkCounter;