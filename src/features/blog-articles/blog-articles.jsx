import { Button, Grid } from '@mui/material';
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import BlogArticlesImg from "../../assets/svg/home/blog-articles.svg";
import {ReactComponent as BGImg1} from "../../assets/svg/home/lasan.svg";
import {ReactComponent as BGImg2} from "../../assets/svg/home/loda-lassan.svg";
import {ReactComponent as BGImg3} from "../../assets/svg/home/podina.svg";
import React from 'react'

export const BlogArticles = () => {
    return (
        <>
            <Grid container spacing={2} my="80px" justifyContent="center" className='position-relative'>
<BGImg1 className='position-absolute' style={{top:'45%',right:"3%"}}/>
<BGImg2 className='position-absolute' style={{top:'55%',right:"0%"}}/>
<BGImg3 className='position-absolute' style={{top:'75%',left:"0%"}}/>
                <Grid item xs={5.5}>
                    <div className="blog-articles">
                        <div className="heading primary-color secondary-title font-weight-600">
                            BLOG ARTICLES
                        </div>
                        <div className="subs-heading blackish-color font-weight-700 primary-heading margin-top-1 margin-bottom-1">
                            Our Blogs page features articles, insights, and musings from our team of
                            experts
                        </div>
                        <div className="description secondary-color margin-bottom-3">
                            We believe in the
                            power of storytelling and encourage readers to engage with the blog by sharing their own stories and leaving comments.
                        </div>
                        <Button disableElevation sx={{ p: '12px 20px' }} className='text-transform primary-bg-color' variant="contained">
                            View more <ArrowDown style={{ rotate: '270deg', marginLeft: '6px', filter: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(566%) hue-rotate(151deg) brightness(105%) contrast(101%)" }} />
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={4.5} className='flex justify-end align-center'>
                    <img src={BlogArticlesImg} alt="BlogArticlesImg" />
                </Grid>
            </Grid>
        </>
    )
}
