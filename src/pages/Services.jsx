import React from 'react'
import { FaSearch, FaHandsHelping } from 'react-icons/fa'
import {CgNotes} from 'react-icons/cg'
import{GiShakingHands} from 'react-icons/gi'
import styled from 'styled-components'
const data =[
  {
  title:'Evaluate property',
  content:`Evaluated is very important ${<br/>} your property buy and sell`,
  icon:'CgNotes',
  color:'yellow',
},
{
  title:'Meet the seller',
  content:`schedule a date to meet your seller ${<br/>}and see your dream house`,
  icon:'FaHandsHelping',
  color:'orange',
},
{
  title:'Close the deal',
  content:`make a deal with the seller ${<br/>}and move to your dream house`,
  icon:'GiShakingHands',
  color:'green',
},

]
const Section = styled.section`
width: 100%;
height:50vh;
`
const ServicesCont  = styled.div`
  display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height:100%;
    @media screen and (max-width:600px){
      flex-direction: column;
    }
`
const Service = styled.div`
width:30%;
      display:flex;
      flex:1;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
    margin: 15px;
    padding: 10px;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius:5px ;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    @media screen  and (max-width:600px){
      width:70%;
    }
`

const ServiceTitle = styled.h2`
  font-weight: bolder;
color:black;
text-align: center;
margin:10px;
letter-spacing:0.2px;
`
const NoteIcon  = styled(CgNotes)`
background-color: yellow;
width : 50px;
height:50px;
color:white;
border-radius: 50%;
`
const DealIcon= styled(GiShakingHands)`
background-color: green;
width : 50px;
height:50px;
color:white;
border-radius: 50%;
`
const HandsIcon = styled(FaHandsHelping)`
background-color: orange;
width : 50px;
height:50px;
color:white;
border-radius: 50%;
`
const ServiceContent = styled.p`
color:gray;
padding:10px;
`
const Services= () => {
  return (
    <Section>

<ServicesCont>
  {
     data.map(({title,content,icon},index)=>{
return(
<Service key={index}>
{icon=='FaHandsHelping' &&<HandsIcon/> ||icon == 'GiShakingHands'&&<DealIcon/>||icon == 'CgNotes'&&<NoteIcon/>}
<ServiceTitle>{title}</ServiceTitle>
<ServiceContent>{content}</ServiceContent>
</Service>
)
  })}
</ServicesCont> 
    </Section>
  )
  
}

export default Services