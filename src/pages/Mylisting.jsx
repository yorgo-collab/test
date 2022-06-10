import React ,{useEffect,useState}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Bg from '../assets/images/pfebg3.jpg'
import {useNavigate} from 'react-router-dom'
import { BsThreeDots } from 'react-icons/bs'
import Button from '@mui/material/Button';
import axios from 'axios'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import { SelectedListing } from '../features/User/userSlice';
import {
  Table, TableCell, TableRow, TableBody, TableContainer, TableHead, Paper
} from '@material-ui/core'
import { getUserListing } from '../features/User/userSlice'
import Chip from '@mui/material/Chip';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const StyledMenu = styled((props) => (
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
const Mylisting = () => {
  const profile = useSelector(state=>state.user.user);
  const listings = useSelector(state=>state.user.myListings)
  const [anchorEl, setAnchorEl] = React.useState(null);
 const [selectedProp,setSelectedProp] = useState(null);
 const [openBackdrop, setopenBackdrop] = React.useState(false);
  const handleBackdrop = () => {
    setopenBackdrop(false);
  };

 const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const form = new FormData();
    form.append('id',profile.userid)
    dispatch(getUserListing(form))
  },[]);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  {return  listings.isLoading==true?(
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={openBackdrop}
    onClick={handleBackdrop}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  ):(
    <div style={{padding:'40px'}} className='w-100 bg-white rounded shadow'>
         <div className='title p-1 fs-5 fw-bold'>My Listing</div>
         <div className="p-3">
        <TableContainer component={Paper}>
        
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><span className='fs-6'>Image</span></TableCell>
                <TableCell align="left" ><span className='fs-6'>title </span></TableCell>
                <TableCell align="left"><span className='fs-6'>location</span></TableCell>
                <TableCell align="left"> <span className='fs-6'>price</span></TableCell>
                <TableCell align="left"><span className='fs-6'>rooms&nbsp;|baths&nbsp;|floor</span></TableCell>
                <TableCell align="left"><span className='fs-6'>status</span></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listings.data.map((p) => {
                  // const deletepost = () => {
                //   axios.get('http://localhost/realestate/deletepost.php?id='+p.propertyid)      
                // }  ///8AYIR POSITION L FUNCTION BSS BECAUSE OF MAP PROBLEM 

                return  (
                  <TableRow
                    key={p.propertyid}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {console.log(p)}
                    <TableCell component="th" scope="row">
                      <img style={{ width: '100px', height: '100px' }} src={Bg} alt="img..." />
                    </TableCell>
                    <TableCell align="left"><span className='fs-6'>{p.adtitle}</span></TableCell>
                    <TableCell align="left"><span className='fs-6'>{p.location}</span></TableCell>
                    <TableCell align="left"><span className='fs-6'>{p.price}</span></TableCell>
                    <TableCell align="left"><span className='fs-6'>{p.bedrooms}&nbsp;|{p.bathrooms}&nbsp;|{p.floors}</span></TableCell>
                    <TableCell align="left"><span className='fs-6 rounded-circle p-2 '><Chip label={p.statusdescp} color={p.statusdescp=='accepted'?'success':'primary'} variant="outlined" /></span></TableCell>
                    <TableCell align="left">

                      <div>
                        <Button className='rounded-circle'                      
                          id="demo-customized-button"
                          aria-controls={open ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}                      
                          disableElevation
                          onClick={(e)=>{setAnchorEl(e.currentTarget);setSelectedProp(p.propertyid)}}
                       
                        >
                         <BsThreeDots style={{width:'25px',height:'25px'}}/>
                        </Button>
                        <StyledMenu key={p.propertyid}
                          id="demo-customized-menu"
                          MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >                        
                        <MenuItem onClick={()=>{dispatch(SelectedListing({selectedProp}));navigate(`modify/${selectedProp}`)}} disableRipple>
                            <span className='fs-6'>modify</span>
                          </MenuItem>                                             
                          <MenuItem  onClick={console.log("deletepost()")} disableRipple>
                            <span className='fs-6'>delete</span>                           
                          </MenuItem>
                        </StyledMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>)
  }
}

export default Mylisting