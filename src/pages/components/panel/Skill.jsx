import {Badge, Box, Chip, Divider, LinearProgress, Typography} from "@mui/material";

export const Skill = ({label, icon, percent, color}) => {
    return (
        <>
            <Divider textAlign='right'>
                <Chip icon={<Box component='img' src={icon} sx={{height: 30}}/>} color={color}
                      sm={{color: 'black', p: 3}}
                      label={label}/>
            </Divider>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Box sx={{minWidth: 35, mr: 1}}>
                    <Typography variant='body2' color={color}>
                        <Badge color={color} badgeContent={`${percent}%`}/>
                    </Typography>
                </Box>
                <Box sx={{width: 1, mr: 1}}>
                    <LinearProgress sx={{borderRadius: 2, height: 10}} variant='determinate' value={percent}
                                    color={color}/>
                </Box>
            </Box>
        </>
    )
}