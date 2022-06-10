import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import {useDispatch,useSelector} from 'react-redux'
import Property from '../comp/Property';
import Pagination from '../comp/Pagination';
import { getSavedPost } from '../features/User/userSlice';


const Span = styled.span`

  &:hover{text-decoration:underline;}
`
const SavedPosts = () => {

  const properties = useSelector(state=>state.property.data);
  
  const posts = useSelector(state=>state.user.savedPosts)
  const user = useSelector(state=>state.user.user)
  const [category,setCategory] = useState("Sale");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(12);
  const dispatch = useDispatch();
  const indexOflastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOflastItem - itemPerPage;
  
 
useEffect(()=>{
  const form = new FormData();
  form.append('id',user.userid)
  dispatch(getSavedPost(form))
},[])  
const currentItems =posts.data!=null&&properties.filter((p)=>{if(posts.data.includes((`${p.propertyid}`))){return p}})

console.log(currentItems)
{return posts.data!=null?(

    <div style={{padding:'40px'}} className='w-100 bg-white rounded shadow'  >
      <div className='title p-1 fs-4 fw-bold d-flex justify-content-between align-items-center'>
        <div>saved posts</div>
        <div><Span onClick={()=>setCategory('Rental')} className='fs-4 text-info'>Rental</Span>{" "}/{" "}<Span onClick={()=>setCategory('Sale')}className='fs-4 text-warning'>Sale</Span></div>
        </div>
        <div className='d-flex align-items-center flex-column'>
      <div className=' container-lg d-flex justify-content-evenly flex-wrap align-items-center'>
      {currentItems.map((property,index)=>{

          if(property.addescription == category){
          return  <Property key={index} p={property} />
          }        
        }  
     ) }


          </div>
      <div>
      <Pagination size={posts.length} itemPerPage={itemPerPage} setCurrentPage={(id) => setCurrentPage(id)} />
    </div>
    </div>
    </div>
  ):(<div>loading...</div>)
}}

export default SavedPosts