import { Button, Grid } from '@mui/material'
import React from 'react'
import { FancyHeadingText } from '../../components/fancy-heading-text/fancy-heading-text'
import { Faqs } from '../../components/faqs/faqs';
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";

export const FaqsSection = () => {
    return (
        <>
            <Grid container my="70px">
                <Grid item xs={12}>
                    <FancyHeadingText description="Find Your Answers with Our FAQ’s" fancyText="FAQ’s" heading="Our FAQ’s" />
                    <Grid container my="70px" justifyContent="center">
                        <Grid item xs={9}>
                            <Faqs />
                            <div className="flex justify-center margin-top-3">
                                <Button disableElevation sx={{ p: '12px 20px',color:'#ff611d', bgcolor: 'transparent', border: '1px solid #ff611d', '&:hover': { bgcolor: '#ff611d',color:'#fff','& .arrow':{filter:'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(566%) hue-rotate(151deg) brightness(105%) contrast(101%)'}} }} className='text-transform primary-title font-weight-500' variant="contained">
                                    Explore More  <ArrowDown className='arrow' style={{ rotate: '270deg', marginLeft: '6px', filter: " brightness(0) saturate(100%) invert(52%) sepia(82%) saturate(3621%) hue-rotate(347deg) brightness(101%) contrast(103%)" }} />
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
