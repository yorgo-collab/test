import React,{ useState } from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import { modify } from '../features/User/userSlice'
import { useSelector,useDispatch } from 'react-redux'
import { getSavedPost } from '../features/User/userSlice';
const Content = styled.div`
 @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const FormGroup = styled.div`
width:48%;
margin-top: 10px;
@media only screen and (max-width: 768px) {
  width:100%;
}
`
const UserProfile = () => {
  const [modifyData,setmodifyData] = useState({name:'',email:'',phonenumber:'',});
  const user = useSelector(state=>state.user.user);
  const letter = user.name.substr(0,1)
  const dispatch = useDispatch();

  const onChange=(e)=>{
    setmodifyData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const onSubmit =(e)=>{
    e.preventDefault();
    let form =new FormData();
    form.append('id',user.userid);
    form.append('name',modifyData.name);
    form.append('email',modifyData.email);
    form.append('phonenumber',modifyData.phonenumber);
     dispatch(modify(form));
  }
  return (
    <div style={{padding:'40px'}} className='shadow rounded'>
      <form >
        <div className='header'>
          <h2>Profile</h2>
          <div  className='w-100 d-flex align-items-center justify-content-center flex-column '>
                   

          </div>
        </div>
        <div style={{marginTop:'40px'}} className='content'>
          <div className='fs-5'>Personal Info:</div>
          <Content className='d-flex w-100 flex-wrap w-100 justify-content-between'>
<FormGroup>
<label className='w-100 d-inline-block fw-bolder ' >Name</label>
<input id='name' name='name' onChange={onChange} value={modifyData.name} style={{padding:'16px 10px',outline:'none',resize:'none',cursor:'pointer'}} type="name" className="w-100 bg-white border"></input>
</FormGroup>
<FormGroup>
<label className='w-100 d-inline-block fw-bolder ' >Email</label>
<input id='email' name='email' onChange={onChange} value={modifyData.email} style={{padding:'16px 10px',outline:'none',resize:'none',cursor:'pointer'}} type="email"  className="w-100 bg-white border"></input>
</FormGroup>
<FormGroup>
<label className='w-100 d-inline-block fw-bolder ' >Phone(This is the number for buyers contacts)</label>
<input id='phonenumber' name='phonenumber' onChange={onChange} value={modifyData.phonenumber}  style={{padding:'16px 10px',outline:'none',resize:'none',cursor:'pointer'}} type="number"  className="w-100 bg-white border"></input>
</FormGroup>

          </Content>
        </div>
        <div className='text-end'>
          <button onSubmit={(e)=>{onSubmit(e);setmodifyData({['name']:'',['email']:'',['phonenumber']:''})}} className=' mt-2 btn btn-primary'>save changes</button>
        </div>
      </form>

    </div>
  )
}

export default UserProfile