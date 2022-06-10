import React ,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {FiArrowDown,FiArrowUp} from 'react-icons/fi'
import axios from 'axios';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Bg from '../assets/images/pfebg3.jpg'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import { BsThreeDots } from 'react-icons/bs'
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

const Row = (props)=>{
const {prop} = props;
const [anchorEl, setAnchorEl] = React.useState(null);
const [open,setOpen] = React.useState(false);
const openMenu = Boolean(anchorEl);
const handleClose = () => {
  setAnchorEl(null);
};
//  const rejectedpost = () => {
//                    axios.delete('http://localhost/realestate/admin-listing.php?propid='+prop.propertyid)      
//                  }

//  const acceptedpost = () => {
//   const form = new FormData();
//   form.append('propid',prop.propertyid);
//   axios({method:'post',url:'http://localhost/realestate/admin-listing.php',data:form});
//                  }
return(
  <>   
 <TableRow  sx={{ '& > *': { borderBottom: 'unset' } }}>
 <TableCell>
   <IconButton
     aria-label="expand row"
     size="small"
     onClick={() => setOpen(!open)}
   >
     {open ? <FiArrowUp /> : <FiArrowDown/>}
   </IconButton>
 </TableCell>


 <TableCell align="left"><span className='fs-6'>{prop.adtitle}</span></TableCell>
 <TableCell align="left"><span className='fs-6'>{prop.propertydescp}</span></TableCell>
 <TableCell align="left"><span className='fs-6'>{prop.price}</span></TableCell>
 <TableCell align="left"><span className='fs-6'>{prop.location}</span></TableCell>
 <TableCell align="left"><span className='fs-6'> <Chip label={prop.statusdescp} color="primary" variant="outlined" /></span></TableCell>
 <TableCell align="left">
 <div>
                        <Button className='rounded-circle'                      
                          id="demo-customized-button"
                          aria-controls={openMenu ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={openMenu ? 'true' : undefined}                      
                          disableElevation
                          onClick={(e)=>{setAnchorEl(e.currentTarget)}}
                       
                        >
                         <BsThreeDots style={{width:'25px',height:'25px'}}/>
                        </Button>
                        <StyledMenu key={prop.propertyid}
                          id="demo-customized-menu"
                          MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={anchorEl}
                          open={openMenu}
                          onClose={handleClose}
                        >                        
                        <MenuItem onClick={console.log("acceptedpost()")}  disableRipple>
                            <span className='fs-6'>Accept</span>
                          </MenuItem>                                             
                          <MenuItem onClick={console.log("rejectedpost()")}   disableRipple>
                            <span className='fs-6'>reject</span>                           
                          </MenuItem>
                        </StyledMenu>
                      </div>
 </TableCell>
</TableRow>
   <TableRow >
   <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
     <Collapse in={open} timeout="auto"  unmountOnExit>
       <Box sx={{ margin: 1 }}>
         <Typography variant="h6" gutterBottom component="div">
         <span className='fs-6 text-primary'>  More about property</span>
         </Typography>
        <div className='d-flex p-1 flex-column  '>
<div className='d-flex mt-1 mb-1 justify-content-between align-items-center'>
<span className='fs-6 '>bedrooms:&nbsp;{prop.bedrooms}</span>
<span className='fs-6'>bathrooms:&nbsp;{prop.bathrooms}</span>
<span className='fs-6'>floor:&nbsp;{prop.floors}</span>
<span className='fs-6'>furnished:&nbsp;{prop.furnished}</span>

</div>
<Divider/>
<div className='d-flex mt-1 mb-1 justify-content-between align-items-center'>
<span className='fs-6'>size:&nbsp;{prop.size}</span>
<span className='fs-6'>city:&nbsp;{prop.city}</span>
<span className='fs-6'>ad type:&nbsp;{prop.addescription}</span>
<span className='fs-6'>Payment Method:&nbsp;{prop.paymentdescp}</span>
</div>

<Divider/>
<div className='d-flex mt-1 mb-1 justify-content-between align-items-center'>
<img style={{width:'100px',height:'100px'}} src={Bg} alt = '....'/>
<img style={{width:'100px',height:'100px'}} src={Bg} alt = '....'/>
<img style={{width:'100px',height:'100px'}} src={Bg} alt = '....'/>
<img style={{width:'100px',height:'100px'}} src={Bg} alt = '....'/>
<img style={{width:'100px',height:'100px'}} src={Bg} alt = '....'/>
</div>
<Divider/>
<div className='mt-1 mb-1'>
<span className='fs-6'>description:</span>{prop.description}
</div>
        </div>
         
       </Box>
     </Collapse>
   </TableCell>
 </TableRow>
</>)

}

const AdminListing = () => {
  const profile = useSelector(state=>state.user);
  const [adminListing,setadminListing]=useState(null);
  
  const dispatch = useDispatch();
  useEffect(() => {
    const form = new FormData();
    form.append('userid',profile.user.userid)
    axios({method:'get',url:'http://localhost/realestate/admin-listing.php',data:form}).then(response=>setadminListing(response.data)).catch(error=>console.log(error));
  },[]);
  
  return (
    <div style={{padding:'40px'}} className='w-100 bg-white rounded shadow'>
    <div className='title p-1 fs-5 fw-bold'>Admin  Listing</div>
    <div className="p-3">
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className='bg-primary'>
            <TableCell />
  
            <TableCell className="text-white fs-6" align="left"><span className='fs-6' >title</span></TableCell>
            <TableCell className="text-white" align="left"><span className='fs-6'>property type</span></TableCell>
            <TableCell className="text-white" align="left"><span className='fs-6'>price</span></TableCell>
            <TableCell className="text-white" align="left"><span className='fs-6'>location</span></TableCell>
            <TableCell className="text-white" align="left"><span className='fs-6'>status</span></TableCell>
            <TableCell  align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {adminListing!=null && adminListing.map((list,index)=>{       
        return <Row key = {index} prop = {list}/>
               })

          }
        </TableBody>
      </Table>
    </TableContainer>
 </div>
</div>
  )
}

export default AdminListing