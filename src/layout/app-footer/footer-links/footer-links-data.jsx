import { ReactComponent as Clock } from "../../../assets/svg/footer/clock-icon.svg";
import { ReactComponent as Location } from "../../../assets/svg/footer/location-icon.svg";
import { ReactComponent as Phone } from "../../../assets/svg/footer/phone-icon.svg";
import { ReactComponent as SMS } from "../../../assets/svg/footer/sms-icon.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/footer/twitter-icon.svg";
import { ReactComponent as Dribble } from "../../../assets/svg/footer/dribble-icon.svg";
import { ReactComponent as Insta } from "../../../assets/svg/footer/insta-icon.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/footer/youtube-icon.svg";

export const addressData = [
    {
        id: 0,
        icon: <Location />,
        text: 'Office 77, Spaces Heathrow Airport, 4 Roundwood Avenue, Stockley Park, Uxbridge, UB11 1AF United Kingdom'
    },
    {
        id: 10,
        icon: <Phone />,
        text: '(+44) - 750028 - 7504'
    },
    {
        id: 20,
        icon: <SMS />,
        text: 'info@sharemydine.co.uk'
    },
    {
        id: 30,
        icon: <Clock />,
        text: 'Monday - Friday: 09:00 AM - 05:00 PM'
    }
]

export const bookADineData = [
    {
        id: 0,
        text: 'Explore Chefs'
    },
    {
        id: 10,
        text: 'Explore Recipes'
    },
]
export const workWithUsData = [
    {
        id: 0,
        text: 'Jobs'
    },
    {
        id: 10,
        text: 'Work at Share My Dine'
    },
    {
        id: 110,
        text: 'Our Squad'
    },
]

export const helpCenterData = [
    {
        id: 0,
        text: 'Gift Cards'
    },
    {
        id: 10,
        text: 'FAQ'
    },
    {
        id: 110,
        text: 'Chronicles'
    },
    {
        id: 30,
        text: 'Our Collection'
    },
]
export const socialIcons = [
    {
        id: 0,
        icon: <Twitter/>
    },
    {
        id: 10,
        icon: <Dribble/>
    },
    {
        id: 110,
        icon: <Insta/>
    },
    {
        id: 30,
        icon: <Youtube/>
    },
]