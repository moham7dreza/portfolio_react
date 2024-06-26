import {Typography} from "@mui/material";
import avatar from "../../../assets/images/avatar.png";
import {RandomReveal} from "react-random-reveal";
import {persianAlphabet} from "../../../constants/panel/persian-alphabets.js";
import {useState} from "react";
import {SocialMedia} from "../SocialMedia.jsx";
import {ThemeActionButton} from "../ThemeActionButton.jsx";
import {CustomAvatar} from "../common/index.js";

const SidebarHeader = () => {
    const [start, setStart] = useState(false)
    return (
        <>
            <ThemeActionButton/>
            {/*can be dynamically down ex according to state*/}
            <CustomAvatar avatar={avatar} alt='developer' size={200} fallback='developer'/>

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