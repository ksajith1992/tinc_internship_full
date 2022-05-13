import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';

function Login_button() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      const token=localStorage.getItem('token_intern');
      const navigate = useNavigate ()
      function login(){
        if(token){
          navigate("/CourseList")
        }else{
          navigate("/Signup")
        }

      }
  return (
    <>
    
    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Login" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}q
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
               {/* <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link to='/OtpLogin' style={{color:'white'}}>Change Password</Link></Typography>
                </MenuItem> */}

               

                <MenuItem onClick={handleCloseUserMenu}>
                 
                  <Typography textAlign="center"><p onClick={login} style={{color:'white', fontSize:'12'}}>Login</p></Typography>
              
               </MenuItem>
            </Menu>
          </Box>
    
    </>
  )
}

export default Login_button