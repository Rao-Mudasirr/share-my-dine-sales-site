import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import { ReactComponent as Add } from "../../assets/svg/add.svg"
import { ReactComponent as Minus } from "../../assets/svg/minus.svg"

export const AccordionItem = ({ title, description }) => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <>
            <Accordion elevation={0} sx={{
                "&:before":{display:'none'},
                mb: '12px',
                borderRadius: '8px !important',
                bgcolor: 'rgba(246, 246, 246, 0.41)'
            }} expanded={expanded} onChange={() => setExpanded(!expanded)}>
                <AccordionSummary sx={{
                    flexDirection: 'row-reverse', '& .MuiAccordionSummary-content': {
                        margin: '20px 16px !important',
                    },
                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(0deg)',
                    },
                }} expandIcon={expanded ? <Minus /> : <Add />} aria-controls="panel1d-content" id="panel1d-header">
                    <div className={`blackish-color sub-heading ${expanded ? "font-weight-500" : ''}`}>{title}</div>
                </AccordionSummary>
                <AccordionDetails sx={{ ml: '38px' }}>
                    <div className={`secondary-color`}>
                        {description}
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
