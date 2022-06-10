import React from 'react'
import {CgProfile} from 'react-icons/cg'
import Defbg from '../assets/images/default.png'
import {BsTelephoneOutbound} from 'react-icons/bs'
const SellerDesc = ({name,email,phoneNumber}) => {
  return (
    <div className='bg-white rounded'>
        <div style={{backgroundColor:"skyblue"}}className='header text-white d-flex justify-content-start align-items-center p-1 '>
        <div style={{width:'40px',height:'40px',overflow:'hidden'}} className="rounded-circle">
        <img style={{marginRight:'25px',width:'100%',height:'100%',objectFit:'cover'}} src ={Defbg}img="..."/>
        </div>
          <div  className='d-flex flex-column ms-1 align-items-center'>
          <span className="fs-7 text-capitalize">{name}</span>
          <ul className='p-0 pt-1'>
              <li className='d-flex align-items-center '><BsTelephoneOutbound/>{phoneNumber}</li>
          </ul>
          </div>
        </div>
        <div className='w-100 content p-2'>
<form>
    <input style={{outline:'none',resize:"none",cursor:'pointer'}}type='text' className = 'w-100 p-2 rounded bg-white border mt-2' placeholder='name'/>
    <input style={{outline:'none',resize:"none",cursor:'pointer'}}type='text' className = 'w-100 p-2 rounded bg-white border mt-2' placeholder='Email'/>
    <input style={{outline:'none',resize:"none",cursor:'pointer'}}type='text' className = 'w-100 p-2 rounded bg-white border mt-2' placeholder='Phone Number'/>
    <textarea style={{outline:'none',resize:"none",cursor:'pointer'}} placeholder='I would love to know more about this property' cols="24" rows='8' className='w-100 mt-2 p-2 rounded-1'/>
    <input style={{cursor:'pointer',outline:'none',backgroundColor:'skyblue'}} type='submit' className="w-100 mt-2 p-2 rounded-1 text-white border-0"/>
</form>
        </div>
    </div>

  )
}

export default SellerDesc