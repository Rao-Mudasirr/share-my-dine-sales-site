import { Box, Button, Grid } from '@mui/material'
import WelcomGIF from "../../assets/images/welcom-gif.gif"
import { ReactComponent as Location } from "../../assets/svg/footer/location-icon.svg";
import { ReactComponent as Calendar } from "../../assets/svg/home/calendar-2.svg";
import { ReactComponent as Profile } from "../../assets/svg/home/profile-2user.svg";
import { ReactComponent as Cousine } from "../../assets/svg/home/cousine.svg";
import { ReactComponent as HomeDishPic1 } from "../../assets/svg/home/home-dish-pic-1.svg";
import { ReactComponent as HomeDishPic2 } from "../../assets/svg/home/home-dish-pic-2.svg";
import { ReactComponent as Heart } from "../../assets/svg/home/heart-icon.svg";
import { ReactComponent as MouseMove } from "../../assets/svg/home/mouse-move.svg";
import { CustomTextfield } from '../../components/custom-textfield/custom-textfield';
import { useState } from 'react';

export const SuperSection = () => {
    const [cursorPosition, setCursorPosition] = useState({ top: "0%", left: "10%" })
    const onMouseMove = e => setCursorPosition({ top: e.clientY -350, left: e.clientX -350});
    return (
        <>
            <div className="position-relativ" onMouseMove={onMouseMove} onMouseLeave={()=> setCursorPosition({ top: "0%", left: "10%"})} >
                <MouseMove className='position-absolute ' style={{ filter:'blur(44px)',zIndex:1, transition: 'all .5s linear', ...cursorPosition }} />
                <Box className="position-absolute" >
                    <HomeDishPic1 />
                </Box>
                <Box sx={{ right: 0, bottom: '20%' }} className="position-absolute" >
                    <HomeDishPic2 />
                </Box>
                <Grid container mt="96px"  className="align-center justify-center">
                    <Grid item xs={7} className="flex align-center justify-center flex-column">
                        <Box mb="1rem" sx={{ width: '145px',bgcolor:'#fff', height: '34px', borderRadius: '55px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.03)', p: '12px 24px', }} className="welcome-div flex align-center justify-space-around" >
                            <div className="welcom-text sub-heading primary-color font-weight-600">
                                Welcome!
                            </div>
                            <div className="gif margin-bottom-0-2">
                                <img width="34px" height="34px" src={WelcomGIF} alt="WelcomGIF" />
                            </div>
                        </Box>
                        <Box sx={{ fontSize: '64px', mb: '36px' }} className="center-text font-weight-700 blackish-color position-relative">
                            <Box sx={{ right: 0, }} className="position-absolute" >
                                <Heart />
                            </Box>
                            Discover Authentic Culinary Experiences with  Share <span className='primary-color'> My Dine</span>
                        </Box>
                        <Box sx={{ mx: "120px", mb: '64px' }} className="description secondary-color sub-heading center-text">
                            With 28.1 million households in the UK, hosts can build a community business on our platform. Our service connects guests with hosts from different backgrounds and cuisines to create a diverse
                            and exciting dining experience.
                        </Box>
                        <Box width="897px" sx={{ mb: '140px',bgcolor:'#fff',zIndex:5, boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.08)", borderRadius: '9px', p: '6px 29px' }}>
                            <Grid container spacing={2}>
                                <Grid item className='flex align-center' xs={9}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={3}>
                                            <CustomTextfield type="Date" icon={<Calendar />} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CustomTextfield type="Number" placeholder="Postcode" icon={<Location width="24px" height="24px" filter='brightness(0) saturate(100%) invert(75%) sepia(15%) saturate(29%) hue-rotate(171deg) brightness(95%) contrast(91%)' />} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CustomTextfield type="Number" placeholder="No of Guests" icon={<Profile />} />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <CustomTextfield type="Text" placeholder="Cuisine" icon={<Cousine />} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid className='flex justify-end' item xs={3}>
                                    <Button disableElevation className='primary-bg-color flex text-transform border-radius-8' sx={{ p: '18px 35px' }} variant="contained">
                                        Explore Chefs
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
