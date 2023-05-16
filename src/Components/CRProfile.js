import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import parse from 'html-react-parser';
import { signOutUser } from '../config/Firebasemethods';
import { useNavigate } from 'react-router-dom';

function AccountMenu(props) {

  let { data, profileName, optionsArray } = props

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('profile', { state: data })
  }
  const handleLogout = (event) => {
    event.stopPropagation()
    // setAnchorEl(event.currentTarget);
    console.log(event);
    signOutUser()

  }
  
  // const dynamicData = Object.keys(data);
  // console.log(dynamicData,";;;;;");
  return (
    <React.Fragment>
      <Box /*sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}*/>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        {/* {<b style={{marginRight:"10px",color:"white"}}>{uName}</b>} */}
        {/* <Typography sx={{ minWidth: 100 }} variant='spanb' ><b>{uName[0]+uName.slice(1).toLowerCase()}</b></Typography>  */}

        <Typography sx={{ minWidth: 100 }} variant='span' ><b>{profileName[0].toUpperCase() + profileName.slice(1).toLowerCase()}</b></Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {profileName && !data.img ? <Avatar sx={{ width: 32, height: 32 }}>{profileName[0].toUpperCase()}</Avatar> : <Avatar sx={{ width: 32, height: 32 }}>{parse(data.img)}</Avatar>}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem onClick={handleProfile}>
        {profileName && !data.img ? <Avatar sx={{ width: 32, height: 32 }}>{profileName[0].toUpperCase()}</Avatar> : <Avatar sx={{ width: 32, height: 32 }}>{parse(data.img)}</Avatar>} Profile
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem> */}
        <Divider />
        {optionsArray.map((x, i) => {

          return (<MenuItem onClick={x.value} key={i}>
            {!x.img ?
              <ListItemIcon>
                {console.log(x)}
                <x.icon fontSize="small" />
              </ListItemIcon>
              : x.img}
            {/* <img src='' /> */}
            {x.key}
          </MenuItem>)

        })}
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        {/* <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default AccountMenu;