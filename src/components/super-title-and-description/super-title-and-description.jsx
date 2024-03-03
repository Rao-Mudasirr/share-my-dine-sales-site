import { Box } from '@mui/material'
import React from 'react'

export const SuperTitleAndDescription = ({ heading1, coloredHeading, heading2, description, classe = "center-text",mx="120px" }) => {
    return (
        <>
            <div className="super-title-and-description">
                <Box sx={{ fontSize: '64px', mb: '36px' }} className={classe + " font-weight-700 blackish-color position-relative"}>
                    {/* <Box sx={{ right: 0, }} className="position-absolute" >
                        <Heart />
                    </Box> */}
                    {heading1} <span className='primary-color'>{coloredHeading} </span> {heading2}
                </Box>
                <Box sx={{ mx: mx, mb: '64px' }} className={classe + " description secondary-color sub-heading "}>
                    {description}
                </Box>
            </div>
        </>
    )
}
