import { Box, Divider, Grid } from '@mui/material'
import { ReactComponent as SMDLogo } from "../../assets/svg/logo/smd-logo.svg";
import SMDTextLogo from "../../assets/svg/logo/text-logo.svg";
import { FooterLinks } from './footer-links/footer-links';
import { addressData, bookADineData, helpCenterData, socialIcons, workWithUsData } from './footer-links/footer-links-data';


export const AppFooter = () => {
  return (
    <>
      <Box className="smd-footer position-relative" sx={{ bgcolor: "rgba(246, 246, 246, 0.45)", p: '84px 233px' }}>
        <Box className="position-absolute" bottom="0" right="-2%">
          <SMDLogo width="313px" height="285px" opacity={.1} />
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <div className="smd-logo">
                  <SMDLogo width="84px" height="76px" />
                  <img src={SMDTextLogo} alt='logo' />
                </div>
                <div className="secondary-color secondary-title margin-top-3">
                  SHARE MY DINE (Orcalo Limited) is a company registered in England and Wales with registered company number 12125945.
                </div>
              </Grid>
              <Grid item xs={3}>
                <FooterLinks name="Address" linksData={addressData} />
              </Grid>
              <Grid item xs={2}>
                <FooterLinks name="Book A Dine" linksData={bookADineData} />
              </Grid>
              <Grid item xs={2}>
                <FooterLinks name="Work with us" linksData={workWithUsData} />
              </Grid>
              <Grid item xs={2}>
                <FooterLinks name="Help Center" linksData={helpCenterData} />
              </Grid>
            </Grid>
          </Grid>
          <Grid mt="95px" item xs={12}>
            <Divider sx={{ bgcolor: 'rgba(193, 193, 199, 0.18)' }} />
            <div className="footer-end margin-top-2-5 flex justify-space-around">
              <div className="text secondary-color">
                © 2020 Share My Dine-  All rights reserved
              </div>
              <div className="social-media-links flex">
                {socialIcons.map(item => <div key={item.id} className="social-media-link margin-left-0 margin-right-0">
                  {item.icon}
                </div>)}
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
