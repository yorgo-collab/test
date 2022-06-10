import React, { useEffect, useState } from 'react'

import Footer from '../comp/Footer'
import Filter from '../comp/Filter'
import Property from '../comp/Property';
import FilterModal from './FilterModal';
// import Pagination from '../comp/Pagination';
import {useDispatch,useSelector} from 'react-redux'
import { fetchProperties } from '../features/properties/propertySlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Buy = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(12);
  const [ModalStatus, setModalStatus] = useState(false);
  const [filters,setFilters] = useState({
    location:'choose location',
    city:"choose city",
    propertyType:'Appartment',
    rooms:0,
    bathrooms:0,
    furnished:null,
    price:'',
    size:'',
  }) 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProperties())
  }, []);
  const property = useSelector((state)=>state.property.data);

  const indexOflastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOflastItem - itemPerPage;
  const currentItems = property.length >itemPerPage*currentPage?property.slice(indexOfFirstItem, indexOflastItem):property;
  console.log(currentItems)

  return (
    <>
      {property.loading === 'pending' || property.loading === 'rejected'? <div style={{height:"100vh"}}>loading...</div> : (
        <div className='d-flex  flex-column align-items-center'>
        <Filter location = {filters.location}
                cit = {filters.city} handleFilters = {(name,value)=>{setFilters({...filters,[name]:value})}}
                show={() => setModalStatus(true)}  />
          <div className=' container d-flex align-items-center justify-content-between border-bottom'>
            <span className='fs-3  text-dark'>Buy Homes</span>
            <div >
              <label className="form-check fw-bold p-0" for="defaultCheck1"> sort by  </label>
              <select className="w-auto border-0 p-0 form-select form-select" aria-label=".form-select-lg example">
                <option defaultValue={'default'}>default</option>
                <option value="1">price</option>
                <option value="2">bedrooms</option>
                <option value="3">bathrooms</option>
              </select>
            </div>
          </div>
          <div className=' container-lg d-flex justify-content-evenly flex-wrap align-items-center'>
            {ModalStatus && <FilterModal hide={() => setModalStatus(false)} filters = {filters} handleFilters = {(name,value)=>{setFilters({...filters,[name]:value})}}/>}
            {currentItems.map((prop, index) => {
             if( prop.addescription =='Sale'){
              return (                                      
                  <Property key={index} p={prop} />         
              );
             }
            })}
          </div>
        {/* <Pagination size={property.length} itemPerPage = {itemPerPage} setCurrentPage={(id)=>setCurrentPage(id)}/> */}
        <Pagination sx={{margin:'5px'}} count={(property.length/itemPerPage)+1} color="primary" />
        </div>
      )};
      <Footer />

    </>
  )
}

export default Buy