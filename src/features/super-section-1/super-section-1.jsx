import { Avatar, AvatarGroup, Box, Button, Grid } from '@mui/material'
import WelcomGIF from "../../assets/images/welcom-gif.gif"
import { ReactComponent as Star } from "../../assets/svg/home/star.svg";
import { ReactComponent as Fork } from "../../assets/svg/home/fork-and-knives.svg";
import { ReactComponent as MouseMove } from "../../assets/svg/home/mouse-move.svg";
import { TextGifBox } from '../../components/text-gif-box/text-gif-box';
import { SuperTitleAndDescription } from '../../components/super-title-and-description/super-title-and-description';
import { useState } from 'react';
export const SuperSection1 = () => {
    const [cursorPosition, setCursorPosition] = useState({ top: "0%", left: "10%" });
    const onMouseMove = e => setCursorPosition({ top: e.clientY - 350, left: e.clientX - 350 });
    return (
        <>
            <Box mb="90px" className="position-relativ" onMouseMove={onMouseMove} onMouseLeave={() => setCursorPosition({ top: "0%", left: "10%" })} >
                <MouseMove className='position-absolute ' style={{ filter: 'blur(44px)', zIndex: 1, transition: 'all .5s linear', ...cursorPosition }} />
                <Grid container mt="96px" className="align-center justify-center">
                    <Grid item xs={5} className="flex justify-center flex-column">
                        <TextGifBox text={"Welcome!"} gif={WelcomGIF} />
                        <SuperTitleAndDescription heading1="Discover Authentic Culinary Experiences with  Share" coloredHeading="My Dine" description="With 28.1 million households in the UK, hosts can build a community business on our platform. Our service connects guests with hosts from different backgrounds and cuisines to create a diverse
                            and exciting dining experience." mx='0' classe='ignore' />
                        <div className="secondary-color flex align-center">
                            <div className="text margin-right-0">
                                Our happy customers
                            </div>
                            <Fork />
                        </div>
                        <div className="super-rating flex margin-top-1 margin-bottom-1">
                            <Star />
                            <div className="how-much">
                             <span className='margin-left-0-2'>4.8</span>    <span className="margin-left-0">(3.5k reviews)</span>
                            </div>
                        </div>
                        <div className="total-rating flex ">
                            <AvatarGroup sx={{"& .MuiAvatar-root":{width:'50px',height:'50px',color:'#fff',fontFamily:`'Work Sans'`,fontWeight:'500', bgcolor:'#FFA412', border:'1px solid #FFA4125E'}}} total={24}>
                            {
                                ['male','female','pixel','male'].map((item,index) => <Avatar key={index} sx={{}} alt="Remy Sharp" src={"https://xsgames.co/randomusers/avatar.php?g=" + item}/>)
                            }
                            </AvatarGroup>
                        </div>
                    </Grid>
                    <Grid xs={5}></Grid>
                </Grid>
            </Box>
        </>
    )
}
