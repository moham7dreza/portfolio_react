import MainImage from "../assets/images/Portfolio-Desk.jpg";
import {Box, Typography} from "@mui/material";
import {useCallback, useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import {loadFull} from "tsparticles";
import Particles from "react-particles";
import {mouseAttraction} from "../constants/panel/particles";
import TextTransition, {presets} from "react-text-transition";

const Home = () => {
    // we need this state for handle strings index
    const [index, setIndex] = useState(0)

    const nameElement = useRef()

    const strings = ["i am programmer", "i am developer", "i am coder", "i am coder", "i am coder",]

    useEffect(() => {
        const TypedName = new Typed(nameElement.current, {
            strings: ["my name is felan"], typeSpeed: 110, backDelay: 50, backSpeed: 80, showCursor: false
        })
        // every 3 seconds index value increased
        const stringsTransition = setInterval(() => {
            setIndex(index => index + 1)
        }, 1750)

        // for unmounting use anonymous function and destroy typed
        return () => {
            TypedName.destroy()
            clearInterval(stringsTransition)
        }
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, [])

    return (<>
        <Box sx={{
            backgroundImage: `url(${MainImage})`,
            height: '100vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
        }}>
            <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={mouseAttraction}/>
            <Box component='div' sx={{display: 'flex'}}>
                <Typography variant='h3' color={'tomato'}>
                    {"{{"}
                </Typography>
                <Typography ref={nameElement} variant='h3' color={'aqua'}></Typography>
                <Typography variant='h3' color={'tomato'}>
                    {"}}"}
                </Typography>
            </Box>
            <Box component='div' sx={{display: 'flex', alignItems: 'center'}}>
                {/*wobbly -> effect after string shown*/}
                <TextTransition springConfig={presets.wobbly}>
                    <Typography sx={{mt: 2, textDecoration: 'underline', textDecorationColor: 'blue'}}
                                variant='h4' color={'aqua'}>
                        {/*we need to make loop for show 1 one strings every 3 seconds*/}
                        {/*index = 0 => strings[0 % 4 = 0]*/}
                        {/*index = 1 => strings[1 % 4 = 1]*/}
                        {/*index = 2 => strings[2 % 4 = 2]*/}
                        {/*index = 3 => strings[3 % 4 = 3]*/}
                        {/*index = 4 => strings[4 % 4 = 0]*/}
                        {/*index = 5 => strings[5 % 4 = 1]*/}
                        {/*index = 6 => strings[6 % 4 = 2]*/}
                        {/*index = 7 => strings[7 % 4 = 3]*/}
                        {/*index = 8 => strings[8 % 4 = 0]*/}
                        {/*...*/}
                        {/*as so see with repeatedly we can indexes of 0, 1, 2, 3 every 3 seconds*/}
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
                <Typography variant='h4' color='whitesmoke' sx={{mr: 1, mt: 2}}>
                    i am
                </Typography>
            </Box>
        </Box>
    </>)
}

export default Home;