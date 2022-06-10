import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { NavLink} from 'react-router-dom'
import {FaBars,FaTimes,FaHouseDamage} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import BtnProfile from './BtnProfile'

const Nav = styled.nav`
height:80px;
background-color:#198cf1 ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px ;

z-index: 99;
`
const Navlink = styled(NavLink)`
  color:#ffff;
  text-decoration: none;
  margin-left: 20px;
  font-weight: 300;
  cursor: pointer;
&.active{
  color:#15cdfc;
}

` 

const Bars = styled(FaBars)`
  display: none;
  color:white;
width:30px;
height: 30px;

  @media screen and (max-width:600px){
    display:block;
    transform: rotate(180deg);
transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
const XLogo  = styled(FaTimes)`
display: none;
color:white;
width:30px;
height: 30px;
  @media screen and (max-width:600px){
    display:block;
    cursor:pointer;
  }
`
const NavbarLogo = styled.div`
   display:flex;
   justify-content: space-between;
   align-items: center;
`
const HouseLogo = styled(FaHouseDamage)`
color:white;
width:30px;
height: 30px;
`
const Navmenu = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width:600px) {
    flex-direction: column;
    position: absolute;
    width: 100%;
    background-color: rgba(0,0,0,0.1);
    top:80px;
    right:${(props)=>props.isClicked?'-100%':'100%'};
    transform:${(props)=>props.isClicked?'translateX(-100%)':''};
    transition: all 0.2s ease-in-out;
    background-color: rgba(0, 0, 0,0.5);
    font-size:1.8rem;

  }
`
const NavBtn = styled.nav`
padding-right: 24px;
`
const LogoTitle = styled.h1`
  color: white;
  letter-spacing: 1.5px;
`

const NavbarPfe = ({open}) => {
  const [clicked,setClicked]=useState(false);
  const {isSuccess} = useSelector((state)=>state.user);
  
  const handleClick =()=>{
    setClicked(!clicked);
  }
  useEffect(() => {
  },[isSuccess]);
  return (
  <Nav>
  <NavBtn>
{isSuccess ?<BtnProfile className="ms-2"/>:< span className='text-white' onClick={open}>sign in</span>}
</NavBtn>
<NavbarLogo>
    <Navlink  to ="/">
      <LogoTitle>logo</LogoTitle>        
    </Navlink>
    <HouseLogo/>
    </NavbarLogo>
    {clicked?<XLogo onClick={handleClick}/>:<Bars onClick={handleClick}/>}
    <Navmenu  isClicked={clicked}>
      <Navlink to ='ad/sale-homes' className='fs-5'>buy</Navlink>
      <Navlink to ='ad/rental-homes' className='fs-5'>rent</Navlink>
      {isSuccess ? <Navlink to ='/user/add-listing' className='fs-5 ms-2'>sell</Navlink> :< span className="text-white ms-2 fs-5"onClick={open}>sell</span>}
    </Navmenu>
    
  </Nav>
  )
}

export default NavbarPfe