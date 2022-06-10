import React, { useState } from 'react';

import './App.css';
import Profile from './pages/Profile'
import Agent from "./comp/Agent"
import { Route,Routes} from "react-router-dom"

import HomePfe from './pages/HomePfe';
import NavbarPfe from './comp/NavbarPfe';
import { useDispatch ,useSelector} from 'react-redux';
import Buy from './pages/Buy';
import Mylisting from './pages/Mylisting';
import AdminListing from './pages/AdminListing';
import PropertyDetails from'./pages/PropertyDetails'
import Rent from './pages/Rent';
import AddListing from './pages/AddListing';
import UserProfile from './pages/UserProfile';
import Modal from './comp/Modal'
import SavedPosts from './pages/SavedPosts';
import ModifyProperty from './pages/ModifyProperty';
import { openModal,closeModal } from './features/Modal/ModalSlice';

function App() {
const mod = useSelector(state=>state.modal.DisplayModal)
const dispatch = useDispatch()
const NoMatch=()=>{
    return <div>Page not found</div>
}
return (
    <div className='Appcontainer'>
   
    <NavbarPfe open = {()=>dispatch(openModal())}/>
    <Routes>
     < Route path='/'  exact element={<HomePfe/> }></Route>
    
     <Route path='/ad/sale-homes' element ={<Buy/>}/>
     <Route path='/ad/sale-homes/:propertyCode' element ={<PropertyDetails/>}/>
     <Route path='/ad/rental-homes' element ={<Rent/>}/>
     <Route path='/ad/rental-homes/:propertyCode' element ={<PropertyDetails/>}/>
     <Route path="/agent" element={<Agent/>}/> 
     <Route path='/user' element ={<Profile/>}>
     <Route path='profile' element ={<UserProfile/>}>        </Route>
      <Route path='add-listing' element ={<AddListing/>}/>
      <Route path='favourites' element ={<SavedPosts/>}/>
      <Route path='admin-listing' element ={<AdminListing/>}/>
      <Route path='favourites/:propertyCode' element ={<PropertyDetails/>}/>
      <Route path='mylisting' element ={<Mylisting/>}> </Route>
      <Route path='mylisting/modify/:propertyid' element={<ModifyProperty/>}/>     
    </Route>
    </Routes>
  <Modal />
    </div>
)

}

export default App;
