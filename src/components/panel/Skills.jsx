import {Skill} from "./pages/index.js";
import {Html} from "@mui/icons-material";
import {useEffect, useState} from "react";

const Skills = () => {
    const [html, setHtml] = useState(0)
    const [js, setJs] = useState(0)

    useEffect(() => {
        function getRand() {
            return Math.round(Math.random() * 10)
        }

        // use setInterval to increase old values every 100 ms
        const timer = setInterval(() => {
            // create rand number between 0 and 10 and add it to old value to receive to html skill value
            setHtml(html => Math.min(html + getRand(), 82))
            setJs(js => Math.min(js + getRand(), 90))
        }, 100)

        // when unmounting
        return () => {
            clearInterval(timer)
        }
    }, []);

    return (
        <>
            <Skill label='Html' icon={<Html/>} percent={html} color={'primary'}/>
            <Skill label='Js' icon={<Html/>} percent={js} color={'secondary'}/>
        </>
    )
}

export default Skills;