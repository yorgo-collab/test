import React from 'react';
import styled from 'styled-components';
import Bg from '../assets/images/pfebg3.jpg';
import { FaSearch, FaHandsHelping } from 'react-icons/fa';
import {CgNotes} from 'react-icons/cg';
import{GiShakingHands} from 'react-icons/gi';
import Services from './Services';
import Client from "../comp/Client"
import Footer from '../comp/Footer';
const HomeSection = styled.section`
height:calc(100vh+180px);
position:relative;`

const Container = styled.div`
width:100%;
height:60%;
padding: 80px 20px;
display:flex;
justify-content:space-evenly;
flex-direction: column;
background-image: url(${Bg});
object-fit: fill;
background-size:  cover;
background-repeat: no-repeat;
background-position:center;
position: relative;
`

const Icon = styled(FaSearch)`
width:30px;
height:30px;
color:gray;`
const HeaderInfo = styled.div`
width:auto;
height:auto;`
const Title  = styled.h1`
font-weight: bolder;
color:white;
letter-spacing:0.2px;

@media screen and (max-width:600px) {
  font-size: 25px;
}
`
const P = styled.p`
width:auto;
height:auto;
color:white;
`
const SearchBar = styled.div`
width:50%;

padding:10px;
display:flex;
justify-content: space-between;
align-items:center;
background-color:white;
border-radius:15px;


`
const Input = styled.input`
width:50%;
border:none;
&:focus{
  outline:0 none;
}
`

const HomePfe = () => {
  return (
    <>
<HomeSection>
  <Container>
    <HeaderInfo>
<Title>
  Easiest Way to find<br/>
  your dream place
</Title>
<P>this is where you can find a dream ,<br/>place for you of various types,all over the world at affordable price</P>
    </HeaderInfo>
 <form>
    <SearchBar>
    <Input type = 'text' autoComplete='off' placeholder='Enter an address,neghborhood,city or zipcode'/>
    <Icon/>
    </SearchBar>
    </form>
  </Container>
<Services/>
<Client/>
<Footer/>
</HomeSection>

</>
  )
}

export default HomePfe