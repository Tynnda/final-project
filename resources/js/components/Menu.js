import React, { Fragment, useEffect, useState } from 'react'
// import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

//components
import Logout from "./Logout";
import Profile from "./Profile";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faMagnifyingGlass, faPlusCircle, faUser, faGear, faRightFromBracket, faComment, faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
// import {  } from "@fortawesome/free-brands-svg-icons";




//
//
//
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
//
//
//


const Menu = ({ openMenu, setOpenMenu, handleLogout }) => {
    // //
    // //
    // //
    //     const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    //     const open = Boolean(anchorEl);
    //     const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //         setAnchorEl(event.currentTarget);
    //     };
    //     const handleClose = () => {
    //         setAnchorEl(null);
    //     };
    // //
    // //
    // //




    // const handleLogout = () => {
    //     axios.post("/logout").then(() => (location.href = "/"));
    // };
    const [user, setUser] = useState({});

    const fetchData = async () => {
        const { data } = await axios.get("/api/user");
        console.log(data);
        setUser(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (

            <div className="header__menu">
                {/* <>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
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
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                </> */}







                <Link to="/search"><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /></Link> 
                <Link to="/search"><a>Search</a></Link> 
                <Link to="/offer"><FontAwesomeIcon className='icon' icon={faPlusCircle} /></Link> 
                <Link to="/offer"><a>Post</a></Link> 
            
                <Link to="/profile"><a>{user.first_name}</a></Link>                 
                <Link to="/profile"><FontAwesomeIcon className='user' icon={faUserCircle} /></Link> 
                
                <FontAwesomeIcon className='icon' icon={faAngleDown} 
                    onClick={() => setOpenMenu(!openMenu)}/>
            
            
                {openMenu && (
                    <div className="header__hamburger">
                        <div>
                            <FontAwesomeIcon icon={faUser} />
                            <Link to="/profile"><a >Profile</a></Link> 
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faGear} />
                            <Link to="/profile"><a >Settings</a></Link> 
                        </div>

                        <div>
                            
                            <FontAwesomeIcon icon={faComment} />
                            <Link to="/chat"><a>Chat</a></Link> 
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <Logout/>
                        </div>
                    </div>
                )}
            </div>
      
    );
};

export default Menu;
