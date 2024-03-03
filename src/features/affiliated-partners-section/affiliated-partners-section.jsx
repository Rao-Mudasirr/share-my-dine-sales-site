import { Box, Grid } from '@mui/material'
import React from 'react'
import { FancyHeadingText } from '../../components/fancy-heading-text/fancy-heading-text'
import Cherry from '../../assets/images/home/cherry.png';
import DriverTok from '../../assets/svg/home/driver-tok.svg';
import DBS from '../../assets/svg/home/dbs-logo.svg';
import OmniChat from '../../assets/svg/home/omni-chat.svg';
import PetHelpSquad from '../../assets/svg/home/pet-help-squad.svg';
import StudentSquad from '../../assets/svg/home/student-squad.svg';
import { ReactComponent as BGI1 } from '../../assets/svg/home/section2-bg1.svg';
import { ReactComponent as BGI2 } from '../../assets/svg/home/section2-bg2.svg';

export const AffiliatedPartnersSection = () => {
    return (
        <>
            <Box className="position-relative" sx={{ py: '77px', mb: '140px', bgcolor: 'rgba(245, 245, 245, 0.27)' }}>
                <BGI1 className="position-absolute" style={{ top: 0, left: 0 }} />
                <BGI2 className="position-absolute" style={{ bottom: 0, right: 0 }} />
                <div >
                    <FancyHeadingText description="Experience more with Share My Dine and our Collaborators" fancyText="Partners" heading="Affiliated Partners" />
                    <Grid container className='justify-center margin-top-1'>
                        <Grid item xs={5} className='position-relative'>
                            <Box className="position-absolute" top="-530%" right={0}>
                                <img src={Cherry} alt='cherry' />
                            </Box>
                            <Box className="position-absolute" bottom="30%" sx={{ transform: 'scaleX(-1)', rotate: '90deg' }} left="-10%">
                                <img src={Cherry} alt='cherry' />
                            </Box>
                            <div className="secondary-color center-text">
                                Share My Dine offers a range of services to complement your dining experience, including partnerships with parking service provider Drivertok and pet care service provider Pets New look.
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" className='margin-top-3' >
                        {[OmniChat, StudentSquad, DriverTok, PetHelpSquad, DBS].map((item, index) => <Grid key={index} className='flex justify-center' item xs={12 / 5} >
                            <img src={item} alt="partner" />
                        </Grid>)}
                    </Grid>
                    <Grid container className='justify-center margin-top-3'>
                        <Grid item xs={5} className='position-relative'>
                            <div className="secondary-color center-text">
                                As a valued guest, you can register with these sister companies to take advantage of convenient parking and reliable pet care while enjoying a lovely evening at our host's place.
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className='justify-center margin-top-2'>
                        <Grid item xs={5} className='position-relative'>
                            <div className="secondary-color center-text">
                                Share My Dine is committed to expanding collaborations to offer the best experience possible for its guests, so stay tuned for more updates on future partnerships.
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}
