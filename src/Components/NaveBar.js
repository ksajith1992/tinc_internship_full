import React, { Component } from 'react'
import './NaveBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';





import logo from '../Images/logo_white.svg'
import { typography } from '@mui/system';
import Login_button from './Login_button';

const pages = ['Home', 'Products', 'Testimonials', 'Contact Us'];
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" id='mybar' >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={logo} className='logo' alt='Logo'/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleCloseNavMenu}>
               <Typography textAlign="center"><Link to='/Home' style={{color:'white'}}>Home</Link></Typography> 
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link to='Pro_ducts' spy={true} smooth={true} style={{color:'white'}}>Products</Link></Typography> 
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link to='Testi_monials' style={{color:'white'}}>Testimonials</Link></Typography> 
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"><Link to='Contactus' style={{color:'white'}}>Contact Us</Link></Typography> 
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
                        <img src={logo} className='logo' alt='Logo'/>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}

            <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               

                <Link to='/Home' style={{color:'white'}}>Home</Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="Pro_ducts" spy={true} smooth={true} style={{color:'white'}}>Products</Link>
              </Button>
            
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Link to="Testi_monials" spy={true} smooth={true} style={{color:'white'}}>Testimonial</Link>

              </Button>
            
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 <Link to="Contactus" spy={true} smooth={true} style={{color:'white'}}>Contact Us</Link>

              </Button>
          </Box>



          <Login_button />





        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;


// function NaveBar() {
//   return <>
//   <div className="row">

// <div className="col-sm-6 col-md-6">
// <img src={logo} className='logo' alt='Logo'/>
// </div>

// <div className="col-sm-6 col-md-6">
// <div className='nav_bg'>
// Home / Products / Services / Contact
//       </div>
// </div>

// </div>

//   </>;
// }


