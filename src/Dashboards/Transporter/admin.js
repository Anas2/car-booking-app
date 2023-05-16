import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import InstDetails from './screens/InstDetails';
// import Payment from './screens/Payment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CRProfile from '../../Components/CRProfile';
import colorThemeIcon from '../../Images/quiz.png';

// import Institute from './screens/Institute';
// import InstituteForm from './screens/InstituteForm';

import CarsList from "./DashboardScreens/CarsList"
import Dashboard from "./DashboardScreens/dashboard";

import dashboardIcon from '../../Images/dashboard.png'
import registerIcon from '../../Images/checklist.png';
import paymentIcon from '../../Images/payment.png';
import instituteIcon from '../../Images/book.png';
import SettingsIconMu from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import AddCars from './DashboardScreens/AddCars';
import CarsDetails from './DashboardScreens/CarsDetails';
import Bookings from './DashboardScreens/Bookings';
import BookingDetails from './DashboardScreens/BookingDetails';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



function Admin() {

    const storeData = useSelector((a) => a.Login)
    console.log(storeData, "====> Here Is Store data");

    const data = useLocation().state;
    // console.log(data, "aaaa");
    // localStorage.setItem("adminName", data.adminName);


    const [menuList, setMenuList] = React.useState([
        {
            name: "Dashboard",
            route: "../admin/tranpoter/dashboard/",
            img: `${dashboardIcon}`
        },
        {
            name: "Cars",
            route: "Cars-list",
            img: `${instituteIcon}`
        },
        {
            name: "Bookings",
            route: "bookings",
            img: `${registerIcon}`
        },
        // {
        //     name: "Booking Form",
        //     route: "color-theme-set",
        //     img:`${colorThemeIcon}`
        // },
        // {
        //     name: "Activation & Payments",
        //     route: "activation-&-payments",
        //     img:`${paymentIcon}`
        // },

    ]);

    let navigate = useNavigate();
    let changeScreen = (route) => {
        navigate(route, { state: data });
    };

    // navigate("institute-details",{state:data}) 

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSettings = () => {
        // event.stopPropagation()
        navigate('settings', { state: data });

    }
    const optionsArray = [
        {
            key: "Settings",
            value: handleSettings,
            icon: SettingsIconMu
        }
    ]

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography variant="h6" noWrap component="div">
                         Admin
                    </Typography> */}
                    <Box style={{ width: '100%' }}>
                        {/* <Container > */}

                        <Row >
                            <Col sm={12} md={6} style={{ textAlign: "left" }}>
                                <Box sx={{ textAlign: "left", padding: '5px' }}>
                                    <Typography variant="h6" noWrap component="div" sx={{ marginTop: "4px" }}>
                                        Transpoter Admin Portal
                                    </Typography>
                                </Box>
                            </Col>
                            <Col sm={12} md={6}>
                                {storeData.adminData ? 
                                <Box sx={{ textAlign: "right", padding: '5px' }}>
                                    {storeData ? <CRProfile data={storeData.adminData} profileName={storeData.adminData.fName} optionsArray={optionsArray} /> : null}
                                </Box> : 
                                <Box sx={{ textAlign: "right", padding: '5px' }}>
                                <CRProfile data=" " profileName=" " optionsArray={optionsArray} />
                                </Box>
                                }
                            </Col>
                        </Row>
                        {/* </Container> */}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menuList.map((text, index) => (
                        <ListItem key={index} disablePadding sx={{ display: 'block' }} onClick={() => { changeScreen(text.route) }} >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 2 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img src={text.img} width="30px" />
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                </ListItemIcon>
                                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                {/* <Divider /> */}
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="cars-list" element={<CarsList />} />
                    <Route path="add-cars" element={<AddCars />} />
                    <Route path="bookings" element={<Bookings />} />
                    <Route path="booking-details" element={<BookingDetails />} />
                    <Route path="cars-details" element={<CarsDetails />} />

                    {/* <Route path="institutes-list" element={<Institute />} />
                    <Route path="institute-registration" element={<InstituteForm />} />
                    <Route path="institute-details" element={<InstDetails />} />
                    <Route path="activation-&-payments" element={<Payment />} />
                    <Route path="color-theme-set" element={<ColorThemeSet />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/admin/dashboard" element={<Dashboard />} /> */}
                </Routes>

            </Box>
        </Box>
    );
}

export default Admin;