import {Avatar, Typography} from "@mui/material";
import avatar from "../../../assets/images/avatar.png";
import {RandomReveal} from "react-random-reveal";
import {persianAlphabet} from "../../../constants/panel/persian-alphabets.js";
import {useState} from "react";
import {SocialMedia} from "../SocialMedia.jsx";

const SidebarHeader = () => {
    const [start, setStart] = useState(false)
    return (
        <>
            {/*can be dynamically down ex according to state*/}
            <Avatar alt='avatar' src={avatar}
                    sx={{height: 200, width: 200, m: '0 auto', display: {xs: 'none', sm: 'none', md: 'block'}}}/>
            <Typography variant='h6' color='secondary'>
                <Typography variant='caption' color='tomato'>{"{{"}</Typography>
                <RandomReveal onComplete={() => setStart(true)} isPlaying characters='اسم کاربر' duration={2}
                              characterSet={persianAlphabet}/>
                <Typography variant='caption' color='tomato'>{"}}"}</Typography>
            </Typography>
            {
                start && (
                    <Typography variant='h6' color='gray'>
                        <RandomReveal isPlaying characters='توضیح کوتاه از شغل کاربر' duration={2}
                                      characterSet={persianAlphabet}/>
                    </Typography>
                )
            }

            <SocialMedia/>
        </>
    )
}

export default SidebarHeader;