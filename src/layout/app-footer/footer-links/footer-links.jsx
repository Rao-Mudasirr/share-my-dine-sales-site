import React from 'react'


export const FooterLinks = ({ name, linksData }) => {
    return (
        <>
            <div className="footer-links-parent">
                <div className="heading sub-heading blackish-color font-weight-500">
                    {name}
                </div>
                <div className="links">
                    {
                        linksData?.map(item => <div key={item.id} className="link-parent flex margin-top-0-8">
                            {item.icon && <div className="icon margin-right-0">
                                {item.icon}
                            </div>}
                            <div className="link secondary-color secondary-title">
                                {item.text}
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </>
    )
}
