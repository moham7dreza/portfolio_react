import {Card, CardContent} from "@mui/material";
import {Helmet} from "react-helmet-async";
import {HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import {useEffect, useState} from "react";
import {CustomDivider} from "../components/panel/common/index.js";
import {EducationTimeline, ExperienceTimeline} from "../components/panel/pages/index.js";


const Resume = ({helmetTitle}) => {

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
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Card sx={{
                height: '100vh',
                backgroundColor: 'whitesmoke',
                overflowY: 'auto'
            }}>
                <CardContent>

                    <CustomDivider borderColor='error.main' chipColor='error' align='center'
                                   icon={<SettingsEthernetRounded/>} text='i am a backend developer'/>

                    <Grid container sx={{mt: 4}}>
                        <Grid xs={6}>

                            <CustomDivider borderColor='warning.main' chipColor='warning' align='center'
                                           icon={<HomeRepairServiceRounded/>} text='experiences'/>
                            <EducationTimeline loading={loading}/>
                        </Grid>
                        <Grid xs={6}>
                            <CustomDivider borderColor='info.main' chipColor='info' align='center'
                                           icon={<SchoolRounded/>} text='education'/>
                            <ExperienceTimeline loading={loading}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default Resume;