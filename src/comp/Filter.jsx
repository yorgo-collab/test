
import React,{useState} from 'react'
import{IoIosArrowDown} from 'react-icons/io'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {locations}from '../constants/constants';



export const Filter = ({show,location,cit,handleFilters}) => { 
 
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
  return (
   <div className=" d-flex w-75  justify-content-between m-3 border rounded border-primary p-2 shadow-sm  rounded">
   
       <div className='d-flex flex-column  justify-content-center p-2 w-25 border-end'>
          <InputLabel sx={{ fontSize:'17px',textAlign:'center' ,fontWeight:'700',color:'blue'}} id="location">choose location</InputLabel>
        <Select  sx={{width:'300'}}   
        labelId='location'
          MenuProps={MenuProps} 
          value ={location!=null?location:''}    
          defaultChecked={location}     
          inputProps={{
            name: 'location',            
          }}
          onChange={ ({target:{name,value}}) =>{handleFilters(name,value)}}
        >
 <MenuItem disabled value={'choose location'}>
            <em>choose location</em>
          </MenuItem>
         {locations.map((loc,index)=><MenuItem  value = {loc.location} key ={index}><span className='fs-6'>{loc.location}</span></MenuItem>)}
        </Select>
       </div>
       <div className='d-flex flex-column w-25 p-2 justify-content-center border-end'>
      
          <InputLabel sx={{ fontSize:'17px',textAlign:'center' ,fontWeight:'700',color:'blue'}} id="city">choose city</InputLabel>
          <Select 
          labelId='city'
          value ={cit}
          MenuProps={MenuProps} 
          defaultChecked={cit}
          inputProps={{
            name:'city',            
          }}
          onChange={ ({target:{name,value}}) =>{handleFilters(name,value)}}
        >
            <MenuItem disabled value="choose city">
            <em>Choose City</em>
          </MenuItem>
         {locations.map((loc)=>
         loc.location ==location&& loc.cities.map((city,ind)=><MenuItem  value = {city} key ={city}><span className='fs-6'>{city}</span></MenuItem>))}
        </Select>
       </div>
       <div className='d-flex flex-column w-25 p-0 align-items-center justify-content-center '>
          <span className='text-black'>More</span>
          <div className="d-flex justify-content-evenly  align-items-center text-black-50">
         <span className=' fw-bold fs-5 '>Advanced filter</span>
         <IoIosArrowDown onClick={show}/>
         </div>
       </div>
       <button type="button" className="btn btn-primary" disabled data-bs-toggle="button" >search</button>
   </div>
  )
}

export default Filter