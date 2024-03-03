import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Divider } from "@mui/material";
import { ReactComponent as Phone } from "../../assets/svg/footer/phone-icon.svg";
import { ReactComponent as SMS } from "../../assets/svg/footer/sms-icon.svg";
import { ReactComponent as Patte } from "../../assets/svg/home/faqs-section-bg.svg";
import Person from "../../assets/images/home/talk-to-us.png";
import "./talk-to-us-form.scss";

export const TalkToUsForm = () => {
  return (
    <Box className="position-relative talk-to-us-form">
      <Patte className="position-absolute" width="188.822px" height="179.29px" style={{ top: '-10%', right: '-100', zIndex: 2 }} />
      <Box className="position-absolute" left={-74} bottom={"0%"} zIndex={5}>
        <img src={Person} alt="" />
      </Box>
      <Box
        sx={{
          p: "60px",
          borderRadius: "12px",
          boxShadow: "0px 65px 96px 0px rgba(100, 92, 170, 0.09)",
          zIndex: 4,
          bgcolor: '#fff'
        }}
        className="position-relative"
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          <div className="primary-heading blackish-color center-text font-weight-600">Talk to Us!</div>
          <Box sx={{ display: "flex", gap: "2rem", width: '100%' }}>
            <TextField fullWidth placeholder="First Name" />
            <TextField fullWidth placeholder="Last Name" />
          </Box>
          <TextField fullWidth placeholder="Your Email" type="email" />
          <TextField fullWidth placeholder="Phone No" />
          <TextField fullWidth multiline rows={4} placeholder="Message" />
          <Button
            sx={{
              bgcolor: "#FF611D",
              color: "#fff",
              maxWidth: "732px",
              width: "100%",
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
              p: '16px',
              borderTopLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            }}
            className="submit-button"
          >
            Submit
          </Button>
        </Box>
        <Divider className=" margin-top-2"><Box mx="40px">Or</Box></Divider>
        <div className="flex justify-space-around width-100 margin-top-2">
          <div className="flex">
            <Phone />
            <div style={{ color: '#4B4B5F' }} className="margin-left-0">Call Us: +447497415540</div>
          </div>
          <div className="flex">
            <SMS />
            <div style={{ color: '#4B4B5F' }} className="margin-left-0">Chat with us: 09:00 AM - 05:00 PM</div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
