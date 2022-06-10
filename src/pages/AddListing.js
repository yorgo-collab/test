import { cardClasses } from '@mui/material'
import React, { useState } from 'react'
import Description from '../comp/Description'
import Details from '../comp/Details'
import Location from '../comp/Location'
import {nanoid} from 'nanoid'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const AddListing = () => {
    const [currentPage,setCurrentPage]= useState(0);

    const [addListing,setAddlisting] = useState({
      postid:nanoid(),
      adtitle:'',
      price:'',
      propertydescp:'Appartment',
      description:'',
      addescription:'Rental',
      rentDate:'',
      size:'',
      bedrooms:'',
      bathrooms:'',
      floors:'',
      furnished:'',
      paymentdescp:'',
      location:'',
      city:'',
      phoneNumber:'',
    })
    console.log(addListing);
    const PageDisplay =(page)=>{
  if (page == 0) return <Description addListing={addListing} handleAddListing = {(name,value)=>{setAddlisting({...addListing,[name]:value})}} handleCategory={(name,value)=>{setAddlisting({...addListing,[name]:value,['bedrooms']:'0',['bathrooms']:'0',['furnished']:'no',['floors']:'0'})}} handleAdType={(name,value)=>setAddlisting({...addListing,[name]:value,['rentDate']:null})}/>
      if(page ==1) return <Details addListing={addListing} handleAddListing = {(name,value)=>{setAddlisting({...addListing,[name]:value})}}/>
      if(page == 2) return <Location addListing={addListing} handleAddListing = {(name,value)=>{setAddlisting({...addListing,[name]:value})}}/>
      }
   
    const Pages = [' Property description',' Property details','Property location And Media' ];
  return (
  <div style={{padding:'40px'}} className='w-100 bg-white rounded shadow'  >
      <div className='title p-1 fs-5 fw-bold'>Add Listing</div>
      {console.log(addListing)}
      <Stepper activeStep={currentPage} alternativeLabel>
        {Pages.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
<div className ="add p-3">
    <p className='m-1 fs-5 fw-bold text-center'>{Pages[currentPage]}</p>
   <form>
    {PageDisplay(currentPage)}
   
   </form>
   <div className='d-flex justify-content-end'>
   <button  disabled ={currentPage==0}className='me-1 btn btn-primary' onClick={()=>setCurrentPage((prevState)=>prevState -1)}>prev</button>
   <button className='me-1 btn btn-primary' onClick={()=>{setCurrentPage((prevState)=>prevState==Pages.length-1?Pages.length-1:prevState+1)}}>{currentPage==Pages.length-1?'submit':'next'}</button>
   </div>
</div>

  </div>
  )
}

export default AddListing