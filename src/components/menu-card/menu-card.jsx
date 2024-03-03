import { Box } from '@mui/material'
import React from 'react'
import Dish from "../../assets/images/home/dish-1.png";
import { ReactComponent as Star } from "../../assets/svg/home/rating.svg"
export const MenuCard = () => {
    return (
        <>
            <Box sx={{ width: '177px', height: '217px',boxShadow:'0px 19px 58px 7px rgba(100, 92, 170, 0.09)', borderTopLeftRadius: '40px',borderTopRightRadius:'12px',borderBottomLeftRadius: '12px',borderBottomRightRadius:'41px',border:'1px solid rgba(144, 149, 159, 0.20)' }} className="menu-card position-relative flex align-center flex-column justify-space-around">
                <Box sx={{ zIndex: 3, top: '-25%', width: '124px', height: '126px', borderRadius: '50%', }} className="img-parent position-absolute">
                    <img src={Dish} alt="Dish" />
                </Box>
                <div></div>
                <div></div>
                <div className="dish-name blackish-color margin-top-3">
                4 Courses
                </div>
                <div className="rating flex blackish-color align-center margin-bottom-2">
                    <Star />
                    <div className='margin-left-0 sub-heading font-weight-500'>4.7</div>
                </div>
            </Box>
        </>
    )
}
