import React from 'react'
import "./fancy-heading-text.scss";
import { Grid } from '@mui/material';
export const FancyHeadingText = ({heading,fancyText,description}) => {
    return (
        <>
            <div className="fancy-text center-text ">
                <div className="primary-color font-weight-600 text-uppercase margin-right-1">
                    {heading}
                </div>
                <div className='outline-text'>{fancyText}</div>
                <Grid container mt="-1.5%" className='justify-center'>
                    <Grid item xs={5}>
                        <div className="description super-heading-42 blackish-color font-weight-700">
                            {description}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
