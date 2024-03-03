import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material'
import { ReactComponent as SMDLogo } from "../../assets/svg/logo/smd-logo.svg";
import { ReactComponent as Profile } from "../../assets/svg/profile.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/arrow-down.svg";
import { LinkDropdown } from './link-dropdown/link-dropdown';
const menu = [
    {
        name: "Home",
        onClick: () => { },
        href: ""
    },
    {
        name: "Our Story",
        menuItems: [
            {
                name: "Our Collection",
                onClick: () => { },
                href: ""
            },
            {
                name: "Chronicles",
                onClick: () => { },
                href: ""
            },
            {
                name: "Gift Cards",
                onClick: () => { },
                href: ""
            }
        ]
    },
    {
        name: "Walkthrough",
        menuItems: [
            {
                name: "What we do",
                onClick: () => { }
            },
            {
                name: "FAQ’s",
                onClick: () => { }
            }
        ]
    },
    {
        name: "Our Culinary Delights",
        menuItems: [
            {
                name: "Explore Chefs",
                onClick: () => { }
            },
            {
                name: "Explore Recipes",
                onClick: () => { }
            }
        ]
    },
    {
        name: "Reach Out",
        menuItems: [
            {
                name: "Talk to us",
                onClick: () => { }
            },
            {
                name: "Jobs",
                onClick: () => { }
            },
            {
                name: "Work with us",
                onClick: () => { }
            },
            {
                name: "Our Squad",
                onClick: () => { }
            }
        ]
    },
];
export const AppHeader = () => {
    return (
        <Box className="smd-header" sx={{ flexGrow: 1 }}>
            <AppBar position='relative' elevation={0} sx={{ bgcolor: 'transparent', my: '12px',zIndex:5 }}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={3}>
                            <SMDLogo />
                        </Grid>
                        <Grid className="links flex align-center justify-space-between" item xs={6}>
                            {menu.map((item, index) => <LinkDropdown key={index} menu={item} />)}
                        </Grid>
                        <Grid item className="links flex align-center justify-end" xs={3}>
                            <Button disableElevation className='primary-bg-color flex' sx={{ py: '12px' }} variant="contained">
                                <Profile /><ArrowDown style={{ marginLeft: '6px', filter: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(566%) hue-rotate(151deg) brightness(105%) contrast(101%)" }} />
                            </Button>
                            <Button disableElevation sx={{ p: '11px 24px', bgcolor: '#333 !important' }} className='text-transform margin-left-0' variant="contained">
                                Contact Us
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
