import { FancyHeadingText } from '../../components/fancy-heading-text/fancy-heading-text'
import { Grid } from '@mui/material'
import { MenuCard } from '../../components/menu-card/menu-card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel, Scrollbar } from 'swiper/modules';

export const VeganMenuSection = () => {
    return (
        <>
            <div className="vegan-menu">
                <FancyHeadingText description="Try Our Vegan Recipes Good For You, Good For The Earth" fancyText="Menu" heading="Our Vegan Menu" />
                <Grid container my="69px" justifyContent="center">
                    <Grid item xs={11} className="flex justify-center align-center">
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={30}
                            scrollbar={{ draggable: true }}
                            mousewheel={true}
                            modules={[Scrollbar, Mousewheel]}
                            className="mySwiper"
                            style={{ padding: '70px 40px' }}
                        >
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => <SwiperSlide key={item}><MenuCard /></SwiperSlide>)
                            }
                        </Swiper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
