import { InputAdornment, TextField } from '@mui/material'
import "./custom-textfield.scss";
import React from 'react'

export const CustomTextfield = ({ type, placeholder, icon }) => {
    return (
        <>
            <TextField type={type}
                className='font-family-work' placeholder={placeholder} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>
                    ),
                }} sx={{ ".MuiInputBase-root": { width: type === "Date" ? '95%' : '100%' }, ".MuiInputBase-input": { p: '12px 0px', color: '#6B7280', fontFamily: `'Work Sans'`,'&::placeholder': {
                    color: '#6B7280',
                    opacity: 1,
                }, }, ".MuiOutlinedInput-notchedOutline": { border: '1px solid #E5E7EB !important' } }} variant="outlined" />
        </>
    )
}
