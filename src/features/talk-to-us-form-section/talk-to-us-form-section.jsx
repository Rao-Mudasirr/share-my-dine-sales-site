import { Grid } from '@mui/material'
import React from 'react'
import { TalkToUsForm } from '../../components/talk-to-us-form/talk-to-us-form'

export const TalkToUsFormSection = () => {
  return (
    <>
        <Grid container my="140px" sx={{ zIndex: 4,bgcolor:'#fff' }} className="position-relative justify-center">
            <Grid sx={{ zIndex: 4 }} className="position-relative" item xs={6}>
                <TalkToUsForm />
            </Grid>
        </Grid>
    </>
  )
}
