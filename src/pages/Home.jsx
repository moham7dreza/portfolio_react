import MainImage from "../assets/images/Portfolio-Desk.jpg";
import {Box, Typography} from "@mui/material";
import {useCallback, useEffect, useRef} from "react";
import Typed from "typed.js";
import {loadFull} from "tsparticles";
import Particles from "react-particles";
import {mouseAttraction} from "../constants/panel/particles";

const Home = () => {
    const nameElement = useRef()
    const infoElement = useRef()

    useEffect(() => {
        const strings = [
            "i am programmer",
            "i am developer",
            "i am coder",
        ]

        const TypedName = new Typed(nameElement.current, {
            strings: ["my name is felan"],
            typeSpeed: 50,
            backDelay: 10,
            backSpeed: 20,
            showCursor: false
        })

        const TypedInfo = new Typed(infoElement.current, {
            strings: strings,
            startDelay: 1500,
            typeSpeed: 80,
            backDelay: 50,
            backSpeed: 50,
            showCursor: false,
            loop: true,
        })

        // for unmounting use anonymous function and destroy typed
        return () => {
            TypedName.destroy()
            TypedInfo.destroy()
        }
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, [])

    return (
        <>
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
                <Typography ref={nameElement} variant='h3' color={'aqua'}></Typography>
                <Typography ref={infoElement} sx={{textDecoration: 'underline', textDecorationColor: 'blue'}}
                            variant='h4' color={'aqua'}></Typography>
            </Box>
        </>
    )
}

export default Home;