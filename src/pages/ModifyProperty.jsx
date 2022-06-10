import React,{useState,useEffect} from 'react'
import Description from '../comp/Description'
import Details from '../comp/Details'
import Location from '../comp/Location'
import { useParams } from 'react-router-dom'
import { SelectedListing } from '../features/User/userSlice';
import { useSelector ,useDispatch} from 'react-redux'
const ModifyProperty = () => {

  const dispatch = useDispatch();
  const modify = useSelector(state=>state.user)
  const {propertyid} = useParams();
  // useEffect(() => { 
  //   dispatch(SelectedListing({propertyid}));
  // }, [propertyid,modify.modifiedListing]);

  const [modified,setModified] = useState(modify.modifiedListing); 


  return (
    
    <div style={{padding:'40px'}} className='w-100 d-flex flex-column align-items-center'>
      <div className='title p-1 fs-5 fw-bold'>Modify your listing</div>  
         <div className="p-3">
  
          <div >
         <p className='m-1 fs-5 fw-bold text-primary'>property descriptions</p>
          <Description  addListing={modified}
                       handleAddListing={(name,value)=>setModified({...modified, [name]:value})}
                       handleCategory={(name,value)=>{setModified({...modified,[name]:value,['bedrooms']:0,['bathrooms']:0,['furnished']:'no',['floors']:'0'})}}
                       handleAdType={(name,value)=>setModified({...modified,[name]:value,['rentDate']:null})}
            />
         
     
              <p className='m-1 fs-5 fw-bold text-primary'>property details</p>
          <Details addListing={modified} handleAddListing={(name,value)=>{setModified({...modified,[name]:value})}}/>
          <p className='m-1 fs-5 fw-bold text-primary'>property location and media</p>
          <Location addListing={modified} handleAddListing={(name,value)=>{setModified({...modified,[name]:value})}}/>
   </div>

   <input onClick={console.log("updatepost()")} value="Send"  style={{color:'#198cf1'}} type="submit" className=' w-25 rounded border-0 bg-white mt-1 d-block'/>
          </div>
    </div>
  )
}

export default ModifyProperty