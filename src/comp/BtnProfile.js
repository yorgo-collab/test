import React from 'react'
import  Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../features/User/userSlice';
import { styled as style, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { sections } from '../constants/constants';
import styled from 'styled-components'
const Nav  = styled.nav`
@media screen and (min-width:768px) {
  display: none;
  
}
`
const StyledMenu = style((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
const BtnProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state=>state.user.user);
  const letter = user.name.substr(0,1)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{overflow:'hidden'}} className="rounded-circle">
       <Button  style={{padding:'0',width:'40px',height:'40px'}}
                          id="demo-customized-button"
                          aria-controls={open ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}                               
                          disableElevation
                          onClick={handleClick}                         
                        >
                        
                        <Stack direction="row" spacing={2}>
      
      <Avatar sx={{ width:'40px',bgcolor: deepOrange[500] }}>{letter}</Avatar>
    </Stack>
                        </Button>
                        <StyledMenu
                          id="demo-customized-menu"
                          MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
        
                           <MenuItem onClick={()=>{navigate('user/profile')}} disableRipple>
                            <span className='fs-6'>view profile</span>
                          </MenuItem>
                      
                                  <MenuItem onClick={()=>{dispatch(logout()) ;navigate('/')}} disableRipple>
                            <span className='fs-6'>logout</span>
                          </MenuItem>
                        </StyledMenu>

</div>
  )
}

export default BtnProfile