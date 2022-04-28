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

function Logout_button() {
    const navigate = useNavigate ()
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    function logoutfunction(){
        localStorage.removeItem("token")
        logout()
    }
    function logout(){
        const token=localStorage.getItem('token')
        if(token===null){
            navigate('/Home')
        }
    }
  return (
    <>
    
    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Logout" src="" />
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

                <MenuItem onClick={handleCloseUserMenu}>
                 
                  <Typography textAlign="center"><p onClick={logoutfunction} style={{color:'white', fontSize:'12'}}>Logout</p></Typography>
              
               </MenuItem>
            </Menu>
          </Box>
    
    </>
  )
}

export default Logout_button