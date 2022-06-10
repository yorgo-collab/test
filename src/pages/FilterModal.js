import { Block } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { GiReloadGunBarrel } from 'react-icons/gi'
import {BiPlus,BiMinus} from 'react-icons/bi'

const FilterModal = ({hide,filters,handleFilters}) => {
    let modelStyle = {
        display:'Block',
    }
  return (

   
<div className="position-absolute top-0 end-0 modal  show fade" style={modelStyle} >
  <div className="  modal-dialog ">
    <div className="modal-content">      
      <div className="modal-body ">
          <form>
          <div className='container'>
              <div className='row'>
                  <div className='p-1 pb-2 col-6'>
                  <label className="form-check fw-bold p-0" forhtml="defaultCheck1">
    Property type
  </label>
  <div className ='checkboxs'>
<div className='d-flex justify-content-between align-items-center '>
    <span className ='fs-6 fw-600'>Appartment</span>
    <input className="form-check-input" type="radio" name="propertyType"value="Appartment" id="defaultCheck1"  checked={filters.propertyType=='Appartment'} onChange={({target:{name,value}})=>handleFilters(name,value)}></input>
</div>
<div className='d-flex justify-content-between align-items-center'>
    <span className ='fs-6 fw-600'>land</span>
    <input className="form-check-input" type="radio" name="propertyType" value="land" id="defaultCheck1" checked={filters.propertyType=='land'} onChange={({target:{name,value}})=>handleFilters(name,value)}></input>
</div>
<div className='d-flex justify-content-between align-items-center'>
    <span className ='fs-6 fw-600'>any</span>
    <input className="form-check-input" type="radio" name="propertyType" value="any" id="defaultCheck1" checked={filters.propertyType=='any'}onChange={({target:{name,value}})=>handleFilters(name,value)}></input>
</div>
  </div>
                  </div>
                  <div className='col-6 p-1 pb-2'>
                  <label className="form-check fw-bold p-0" for="defaultCheck1">
    Rooms and baths
  </label>
  <div className = 'counter d-flex justify-content-between'>
      <span className='fs-6 fw-600'>Max. bedrooms</span>
      <div className='counter_buttons d-flex align-items-center '>
      <BiMinus onClick={()=>handleFilters('rooms',(filters.rooms)-1)}/>
      <span >{filters.rooms}</span>
    <BiPlus  onClick={()=>handleFilters('rooms',(filters.rooms)+1)} />
  </div>
  </div>
  <div className = 'counter d-flex justify-content-between'>
      <span className='fs-6 fw-600'>Max. bathrooms</span> 
      <div className='counter_buttons d-flex align-items-center '>
      <BiMinus  onClick={()=>handleFilters('bathrooms',filters.bathrooms-1)}/>
      <span >{filters.bathrooms }</span>
      <BiPlus  onClick={()=>handleFilters('bathrooms',filters.bathrooms+1)}/>
  </div>
  </div>
  <div className='d-flex flex-column'>
      <span className='fw-bold p-0'>fursnished</span>
      <div className="btn-group" role="group btn-group-sm">
  <button type="button" name='furnished' value='yes' className={`btn btn-primary btn-sm ${filters.furnished=='yes'?'active':''}`} onClick={()=>handleFilters('furnished','yes')}>yes</button>
  <button type="button" name='furnished' value='no' className={`btn btn-primary btn-sm ${filters.furnished=='no'?'active':''}`} onClick={()=>handleFilters('furnished','no')}>no</button>
  <button type="button" name='furnished' value='any' className={`btn btn-primary btn-sm ${filters.furnished=='any'?'active':''}`} onClick={()=>handleFilters('furnished','any')}>any</button>
</div>
  </div>
      </div>
      <div className='p-1 pb-2 col-6'>
      <label className="form-check fw-bold p-0" for="defaultCheck1">Size Range</label>
      <p className='mb-2'>0 m <sup>2</sup> To {filters.size} m<sup>2</sup></p>
      <input type="range" name ="size" value={filters.size} className="w-100" min="0" max="1000" step="10"  onChange={({target:{name,value}}) => handleFilters(name,value)} id="customRange3"></input>
      </div>
      <div className='p-1 pb-2 col-6'>
      <label className="form-check fw-bold p-0" for="defaultCheck1">Price Range</label>
      <p className='mb-2'>0 USD To {filters.price} USD</p>
      <input type="range" name="price" className="w-100" min="0" max="1000000" step="10" value={filters.price} onChange={({target:{name,value}}) => handleFilters(name,value)}  id="customRange3"></input>
      </div>
  </div>
  </div>
  </form>
                  </div>
                  <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hide}>Close</button>
      </div>
              </div>
            
              </div>  
              
  
    
    </div>

  )
}

export default FilterModal