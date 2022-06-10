import React, { useState } from 'react'
import styled from 'styled-components'
import { Link ,Outlet,useNavigate} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { useSelector } from 'react-redux'


const Content = styled.div`
    @media screen and (max-width:768px){
        flex-direction: column;
        
    }
`
const Left = styled.div`
@media only screen and (max-width: 768px) {
    display: none;
    width: 100%;}
`
const Right = styled.div`
 width: 72%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
export const sections = [
    {
        url: "profile",
        name: "My Profile",
        icon: "far fa-user",
    },

    {
        url: "mylisting",
        name: "My Listing",
        icon: "far fa-list-alt",

    },

    {
        url: "add-listing",
        name: " Add Listing",
        icon: "fas fa-layer-group",

    },
    {
        url: "favourites",
        name: "saved Posts ",
        icon: "fas fa-layer-group",

    },
];

const Profile = () => {
    const [open, setOpen] = React.useState(false);
const auth= useSelector((state)=>state.user.user);
console.log(auth)
{return auth !=null ?(   
    
        <div style= {{height:'100vh'}}className='bg-light'>
            <div className=' bg-white rounded p-1'>
                <h2>Profile section</h2>
{console.log(auth)}
                <Content style={{ padding: '70px 0px' }} className="w-100  d-flex align-items-start justify-content-between ">
                    <Left className="left bg-white rounded w-25 p-1 shadow ">
                        <div className='d-flex justify-content-center align-items-center mt-3 flex-column text-center'>
                        <div style={{width:'100px',height:'100px',overflow:'hidden'}} className="rounded-circle">
                        <Stack direction="row" >      
      <Avatar sx={{fontSize:'40px', width:'100px',height:'100px',bgcolor: deepOrange[500] }}>{auth.name.substr(0,1)}</Avatar>
    </Stack>
</div>
                            <p className='fs-5 pt-1'>{auth.name}</p>
                        </div>
                        <div className='left-content'>
                            <ul style={{listStyle: 'none' }}>
                                {sections.map((data, index) => {
                                    return (
                                        <li className="position-relative mt-1 text-decoration-none">
                                            <Link style={{ padding: '16px 0px', textDecoration: 'none' }} className="d-flex justify-content-center align-items-center fw-bold position-relative border-bottom text-dark" to={data.url}>
                                                <p>{data.name}</p>
                                            </Link>

                                        </li>
                            
                                    )
                                })}
                                {auth.descp =='admin'&& 
                                 <li className="position-relative mt-1 text-decoration-none">
                                 <Link style={{ padding: '16px 0px', textDecoration: 'none' }} className="d-flex justify-content-center align-items-center fw-bold position-relative border-bottom text-dark" to={'admin-listing'}>
                                     <p>admin listing</p>
                                    
                                 </Link>

                             </li>}
                            </ul>
                        </div>
                    </Left>
                    <Right>
<div style={{marginBottom:'25px'}}>
<Outlet/>
</div>
                    </Right>
                </Content>
            
            </div>
        </div> ): <div>pls signup first</div>
}
}

export default Profile