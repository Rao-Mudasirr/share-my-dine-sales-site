import { Box } from '@mui/material'
import React from 'react'

export const TextGifBox = ({text,gif}) => {
    return (
        <>
            <Box mb="1rem" sx={{ width: '145px', bgcolor: '#fff', height: '34px', borderRadius: '55px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.03)', p: '12px 24px', }} className="welcome-div flex align-center justify-space-around" >
                <div className="welcom-text sub-heading primary-color font-weight-600">
                    {text}
                </div>
                <div className="gif margin-bottom-0-2">
                    <img width="34px" height="34px" src={gif} alt="WelcomGIF" />
                </div>
            </Box>
        </>
    )
}
