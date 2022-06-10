import React,{useState,useRef} from 'react'
import {MdOutlineAddAPhoto} from 'react-icons/md'
import {locations} from '../constants/constants'
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import {useSelector} from 'react-redux'
const FormGroup = styled.div`
width:48%;
margin-top: 10px;
margin-bottom: 10px;
@media only screen and (max-width: 768px) {
  width:100%;
}
`
const Content = styled.div`
@media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  `

const Location = ({addListing,handleAddListing}) => {
  const [selectedImages,setSelectedImages]= useState([]);
  const profDetails = useSelector(state=>state.user.user);
  const imagehandlechange=(e)=>{
      if(e.target.files){
        console.log(e.target.files);
          const fileArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
          setSelectedImages((prevImages)=>prevImages.concat(fileArray))   

       Array.from(e.target.files).map((file)=>URL.revokeObjectURL(file));
      }
      }
      
   const ITEM_HEIGHT = 48;
   const ITEM_PADDING_TOP = 8;
   const MenuProps = {
     PaperProps: {
       style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
       },
     },
   };

   function upload(e){
    e.preventDefault();
    var files = e.target[0].files;
    const formData = new FormData();
    for(let i=0; i < files.length;i++){
      formData.append('files', files[i]);
    }
    //formData.append('userid', profDetails.userid)
   // formData.append('postid', addListing.postid)
   //   formData.append('adtitle', addListing.adtitle)
   //   formData.append('price', addListing.price)
   //   formData.append('propertydescp', addListing.propertydescp)
     //  formData.append('description', addListing.description)
     //  formData.append('addescription', addListing.addescription)
     //  formData.append('rentDate', addListing.rentDate)
     //  formData.append('size', addListing.size)
     //  formData.append('bedrooms', addListing.bedrooms)
     //  formData.append('bathrooms', addListing.bathrooms)
     //  formData.append('floors', addListing.floors)
     //  formData.append('furnished', addListing.furnished)
     //  formData.append('paymentdescp', addListing.paymentdescp)
     //  formData.append('location', addListing.location)
     //  formData.append('city', addListing.city)
     //  formData.append('phoneNumber', addListing.phoneNumber)
    axios({
      url:'http://localhost/realestate/files.php',
      method:"POST",
      data:formData
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
     console.error(err);
    })

    }
  return (
    <div>
    <div className='w-100 d-flex justify-content-between align-items-center flex-wrap'>
<FormGroup> <InputLabel sx={{ fontSize:'15px' ,fontWeight:'700',color:'blue'}} id="demo-multiple-name-label">choose location</InputLabel>
<Select     sx={{ width: 300 ,color:'black'}}
labelId="location"
          MenuProps={MenuProps} 
          value ={addListing.location}    
          defaultValue={addListing.location}   
          inputProps={{
            name: 'location',            
          }}
          onChange={ ({target:{name,value}}) =>{handleAddListing(name,value)}}
        >
 <MenuItem disabled defaultValue>
            <em>choose location</em>
          </MenuItem>
         {locations.map((loc,index)=><MenuItem  value = {loc.location} key ={index}><span className='fs-6'>{loc.location}</span></MenuItem>)}
        </Select>
</FormGroup>
<FormGroup>
<InputLabel sx={{ fontSize:'15px' ,fontWeight:'700',color:'blue'}} id="city">choose city</InputLabel>
<Select sx={{ width: 300 }}
           labelId="city"
          value ={addListing.city}
          defaultValue={addListing.city}
          MenuProps={MenuProps} 
          inputProps={{
            name:'city',            
          }}
          onChange={ ({target:{name,value}}) =>{handleAddListing(name,value)}}
        >
            <MenuItem disabled value="">
            <em>Choose City</em>
          </MenuItem>
         {locations.map((loc)=>
         loc.location ==addListing.location&& loc.cities.map((city,ind)=><MenuItem  value = {city} key ={ind}><span className='fs-6'>{city}</span></MenuItem>))}
        </Select>
</FormGroup>
    </div>
    <div className='heading fs-4'>
    Upload Up to 5 photos:
 </div>
 <div className='mt-2 label-holder'>
        <label htmlFor='file'  className='label'>
        <input className="d-none" type = 'file' multiple={true} name="files" id ='file' onChange={imagehandlechange}/>
      <div className='d-flex justify-content-start align-items-center flex-wrap'>
      <div style = {{width:'150px',height:'150px'}} className='m-1 bg-light position-relative border'>
{selectedImages[0]!=null?<img src={selectedImages[0]} className='w-100 h-100'/>: <MdOutlineAddAPhoto style={{width:'50px',height:'50px',top:'35%',left:'35%'}} className='position-absolute text-dark  m-auto '/> }
      </div>
      <div style = {{width:'150px',height:'150px'}} className='bg-light m-1 position-relative border'>
      {selectedImages[1]!=null?<img src={selectedImages[1]} className='w-100 h-100'/>:<MdOutlineAddAPhoto style={{width:'50px',height:'50px',top:'35%',left:'35%'}} className='position-absolute text-dark  m-auto '/> }
      </div>
      <div style = {{width:'150px',height:'150px'}} className='bg-light m-1 position-relative border'>
      {selectedImages[2]!=null?<img src={selectedImages[2]} className='w-100 h-100'/>:<MdOutlineAddAPhoto style={{width:'50px',height:'50px',top:'35%',left:'35%'}} className='position-absolute text-dark  m-auto '/> }
      </div>
      <div style = {{width:'150px',height:'150px'}} className='bg-light m-1 position-relative border'>
      {selectedImages[3]!=null?<img src={selectedImages[3]} className='w-100 h-100'/>:<MdOutlineAddAPhoto style={{width:'50px',height:'50px',top:'35%',left:'35%'}} className='position-absolute text-dark  m-auto '/> }
      </div>
      <div style = {{width:'150px',height:'150px'}} className='bg-light m-1 position-relative border'>
      {selectedImages[4]!=null?<img src={selectedImages[4]} className='w-100 h-100'/>:<MdOutlineAddAPhoto style={{width:'50px',height:'50px',top:'35%',left:'35%'}} className='position-absolute text-dark  m-auto '/> }
      </div>
      </div>
        </label>
    </div>
    <div>
<div className='mt-2 fs-4'>
  review your details (edit your profile to change)
</div>
<Content className='d-flex align-items-center justify-content-between w-100 flex-wrap'>
            <FormGroup>
            <label className='w-100 d-inline-block fw-bolder ' >Name:</label>
            <input style={{padding:'16px 10px',outline:'none',resize:'none',cursor:'pointer'}} className='w-100' name ='name' value={profDetails.name} disabled
            />        
            </FormGroup>
            <FormGroup>
            <label className='w-100 d-inline-block fw-bolder ' >Email:</label>
            <input style={{padding:'16px 10px',outline:'none',resize:'none',cursor:'pointer'}}className='w-100' name ='email' value={profDetails.email} disabled 
            ></input>          
            </FormGroup>
            <FormGroup>
            <label className='w-100 d-inline-block fw-bolder ' >PhoneNumber:</label>
            <input style={{padding:'16px 10px',outline:'none',resize:'none',cursor:'pointer'}} className='w-100' name ='phoneNumber' value={profDetails.phoneNumber} disabled={profDetails.phoneNumber!=null} onChange={({target:{name,value}}) => {handleAddListing(name,value)}}

            ></input>
            <button onSubmit={(e) => upload(e)} style={{padding:'16px 10px',outline:'none',resize:'none',cursor:'pointer'}} >Upload</button>          
            </FormGroup>
            </Content>
            </div>
 </div>)
  
}

export default Location