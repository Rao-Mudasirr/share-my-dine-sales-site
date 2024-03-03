import React from 'react'
import { AccordionItem } from '../accordion-item/accordion-item'
import { FAQSDATA } from './faqs-data'

export const Faqs = () => {
    return (
        <>
            {
                FAQSDATA.map(item => <AccordionItem key={item.id} description={item.description} title={item.title} />)
            }
        </>
    )
}
