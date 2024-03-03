import { Box, Grid, Rating } from '@mui/material'
import * as ReactDOMServer from "react-dom/server";
import React from 'react'
import { FancyHeadingText } from '../../components/fancy-heading-text/fancy-heading-text'
import { ReactComponent as BGImage } from "../../assets/svg/home/testimonials-bg-1.svg";
import { ReactComponent as Jhari } from "../../assets/svg/home/testimonials-bg-2.svg";
import { ReactComponent as Star } from "../../assets/svg/home/star.svg";
import { ReactComponent as EmptyStar } from "../../assets/svg/home/empty-star.svg";
import { EffectFade, Pagination, Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import "./testimonials-section.scss";
import { TESTIMONIALS } from './testimonials-section-data';
export const TestimonialsSection = () => {
    const pagination = {
        el: '.swiper-pagination-custom',
        clickable: true,
        renderBullet: function (index, className) {
            return ReactDOMServer.renderToStaticMarkup(<div style={{ width: '18.03px', height: '18.03px', }} className={className}></div>);
        },
    };
    return (
        <>
            <Grid container className="position-relative testimonials-section" my="70px">
                <Jhari className="position-absolute" style={{ top: '0%', right: '0%' }} />
                <BGImage className="position-absolute"  style={{ top: '-40%', left: '13%',zIndex:2 }} />
                <Grid item xs={12} sx={{zIndex:3 }} className='position-relative'>
                    <FancyHeadingText description="Our spoken evaluation of food" fancyText="TESTIMONIALS" heading="TESTIMONIALS" />
                    <Grid container my="70px" justifyContent="center">
                        <Grid item xs={6}>
                            <Swiper effect={'fade'} pagination={pagination} autoplay={{delay: 2500,}} modules={[EffectFade, Pagination, Autoplay]} className="mySwiper">
                                {
                                    TESTIMONIALS.map(item => <SwiperSlide key={item.id}>
                                        <Box height="478px" sx={{ bgcolor: '#fff', border: '2px solid rgba(255, 164, 18, 0.45)', borderTopLeftRadius: '120px', borderTopRightRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '120px', }}>
                                            <Grid container my="70px" justifyContent="center">
                                                <Grid item xs={9}>
                                                    <div className="center-text secondary-color margin-bottom-3">
                                                        {item.review}
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <Box width="109px" height="108.995px" sx={{ width: '124px', height: '126px', borderRadius: '50%' }} className="img-parent position-relative">
                                                            <img src={item.img} alt="Person" style={{ borderRadius: '50%' }} />
                                                            <Box className="position-absolute flex justify-center align-center" bgcolor="#fff" sx={{ bottom: 10, right: "-65%", borderRadius: '44px', width: '139px', height: '43.998px', boxShadow: '0px 27px 66px 0px rgba(100, 92, 170, 0.14)' }}>
                                                                <Rating
                                                                    name="Rating"
                                                                    icon={<Star />}
                                                                    emptyIcon={<EmptyStar />}
                                                                    value={item.rating}
                                                                    readOnly
                                                                />
                                                            </Box>
                                                        </Box>
                                                    </div>
                                                    <div className="center-text margin-top-3">
                                                        <div className="blackish-color font-weight-700 ">{item.name}</div>
                                                        <div className="secondary-color margin-top-0-2">Happy Customer</div>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </SwiperSlide>
                                    )
                                }
                                <div className="swiper-pagination-custom flex justify-center"></div>
                            </Swiper>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
