import React from 'react'
import { Link } from 'react-router-dom';
import { FaBath, FaBed, FaWeight } from 'react-icons/fa';
import{BsGridFill,BsHeart,BsFillHeartFill} from 'react-icons/bs'
import{GoLocation} from 'react-icons/go'
import{BiTime} from 'react-icons/bi'
import { openModal } from '../features/Modal/ModalSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Bg from '../assets/images/pfebg3.jpg'
import { UpdateSavedPost,RemoveSavedPost } from '../features/User/userSlice';




const Property = (props) => {
  let iconstyle={
    width:'30px',
height:'30px',
position:'absolute',
top:'15px',
right:'15px',

  }
  const favoritePosts = useSelector(state=>state.user.savedPosts.data)
  const detail = useSelector(state=>state.user)
  const mod = useSelector(state=>state.modal.displayModal);
  const dispatch = useDispatch()
  const {propertyid,adtitle,price,bedrooms,bathrooms,size,postdate,location,city} = props.p;
  const form = new FormData();
  const navigate = useNavigate();
  form.append('postid',propertyid);
 
  return (
    
        <div style={{width:'360px',height:'45%'}}className='shadow  bg-body rounded   pt-0 d-flex flex-wrap align-items-center mt-5  overflow-hidden'>
            
            <div style={{width:'360px',height:'22%'}} className='p-0 m-0 position-relative'>
            {favoritePosts!=null && favoritePosts.includes(`${propertyid}`) ? <BsFillHeartFill size={'30px'} color={'red'} style ={iconstyle} onClick = {()=>dispatch(RemoveSavedPost(detail.user.userid,propertyid))} />:<BsHeart size={'30px'} color={'white'} style ={iconstyle} onClick={()=>{detail.isSuccess==false?dispatch(openModal()):dispatch(UpdateSavedPost(detail.user.userid,propertyid))}} />}
            <span className="badge position-absolute bottom-0 left-0 p-1 bg-primary">{props.p.propertydescp}</span>
            <img style={{width:'360px',height:'100%'}} src={Bg} alt = '....'/>
            </div>
            <Link className="w-100 m-0 p-1 text-dark" style={{ textDecoration: 'none' }} key={props.p.propertyid} to={`${props.p.propertyid}`}>
                <div className = 'd-flex align-items-center justify-content-between'>
                    <text className='fs-5 fw-bold'>{adtitle}</text>
                    <text className='fs-7 fw-bold'>{price}${props.type=='for-rent'?'/month':''}</text>
                </div>
                <div className="d-flex w-75 align-items-center p-1 justify-content-between text-black-50">
                {bedrooms}<FaBed/>|{bathrooms}<FaBath/> |{size}m2 <BsGridFill/>
                </div>
                <div className='d-flex justify-content-between pt-1'>
                <text ><GoLocation/>{location},{city}</text>
          {props.p.furnished == 'yes'?<span className='rounded-pill ps-1 pe-1 bg-warning text-light'>furnished</span>:''}
          
          </div>
          <span><BiTime/>{postdate}</span>
            </Link>
            
    </div>
   
  )
}

export default Property