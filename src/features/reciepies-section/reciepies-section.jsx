import React from 'react'
import { FancyHeadingText } from '../../components/fancy-heading-text/fancy-heading-text'
import { Box, Button, Grid } from '@mui/material'
import { RecipiesCard } from '../../components/recipies-card/recipies-card'
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import { ReactComponent as Patte } from "../../assets/svg/home/faqs-section-bg.svg";

export const ReciepiesSection = () => {
    return (
        <>
            <Grid container my="70px">
                <Grid item xs={12}>
                    <FancyHeadingText description="Visit Our Special Recipes" fancyText="Recipes" heading="OUR RECIPES" />
                    <Grid container mt="50px" justifyContent="center">
                        <Grid item xs={1}>
                            <Grid container>
                                <Grid className='flex justify-end' item xs={12}>
                                    <RecipiesCard name="Mexican Salad" price={21} />
                                </Grid>
                                <Grid item xs={12}>
                                    <RecipiesCard name="Butter chicken" priceColor='#D2A10B' price={19} right={false} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} >
                            <Grid container className='height-100'>
                                <Grid className='flex justify-center align-center' item xs={12}>
                                    <RecipiesCard name="Kale Salad " price={21} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <Grid container>
                                <Grid className='flex justify-end' item xs={12}>
                                    <RecipiesCard right={false} name="Moroccan lamb tagine" priceColor='#F58F13' price={17} />
                                </Grid>
                                <Grid item xs={12}>
                                    <RecipiesCard right={false} name="Butter chicken" priceColor='#537622' price={22} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box className="position-relative" >
                        <Patte className="position-absolute" style={{ bottom: '-50%', left: '13%' }} />
                        <div className="dark-gray-color tertiary-title center-text" >let's check out more RECIPES we have</div>
                        <div className="flex justify-center margin-top-1">
                            <Button disableElevation sx={{ p: '12px 20px',bgcolor:'#ff611d',border:'1px solid #ff611d','&:hover':{bgcolor:'transparent',filter:' brightness(0) saturate(100%) invert(52%) sepia(82%) saturate(3621%) hue-rotate(347deg) brightness(101%) contrast(103%)'} }} className='text-transform primary-title font-weight-500'  variant="contained">
                                Explore More Recipes <ArrowDown style={{ rotate: '270deg', marginLeft: '6px', filter: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(566%) hue-rotate(151deg) brightness(105%) contrast(101%)" }} />
                            </Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
