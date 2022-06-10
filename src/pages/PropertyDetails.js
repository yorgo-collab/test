import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GoLocation } from 'react-icons/go'
import PropertyGallery from '../comp/PropertyGallery'
import styled from 'styled-components'
import PropertyFeatures from '../comp/PropertyFeatures'
import PropertyDescriptions from '../comp/PropertyDescriptions'
import PropertyAddress from '../comp/PropertyAddress'
import SellerDesc from '../comp/SellerDesc'
import { useSelector } from 'react-redux'
import { fetchProperties } from '../features/properties/propertySlice'

const Left = styled.div`
width:68%;
@media screen and (max-width:700px) {
  width:100%;  
}
`
const Right = styled.div`
width:25%;
@media screen and (max-width:700px) {
  width:100%;  
}
`
const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin:'32px 0px';
padding:'5px';
 @media screen and (max-width: 700px) {
            flex-direction:column;
             align-items:flex-start;    
       }
`
const BodyContainer = styled.div`
width:100%;
display: flex;
justify-content: space-evenly;
align-items: flex-start;
margin:'32px 0px';
 @media screen and (max-width: 700px) {
            flex-direction:column;   
       }`
const PropertyDetails = () => {
    const { propertyCode } = useParams();
    const properties = useSelector(state=>state.property.data)
    return (
        <div>
    {properties.map((prop)=>prop.propertyid==propertyCode&&(
                <section className="bg-light">
                    <HeaderContainer>
                        <div className='left p-2' >
                            <h2>{prop.adtitle}</h2>
                            <div  className='d-flex align-items-center'>
                                <GoLocation style={{ color: 'rgba(0, 0, 0, 0.16)' }} />
                                <span>{prop.location},{prop.city}</span>
                            </div>
                        </div>
                        <div className='right'>
                            <span className=' fw-bold fs-4 me-1'>{prop.price}$</span>
                        </div>
                    </HeaderContainer>
                    <BodyContainer>
                        <Left className='content_left '>
                            {/* <PropertyGallery images={} /> */}
                            <PropertyFeatures bedrooms={prop.bedrooms}
                                bathrooms={prop.bathrooms}
                                condition={'good'}
                                floor={prop.floors}
                                propertyType={prop.propertydescp}
                                furnished={prop.furnished}
                            />
                            <PropertyDescriptions desc={prop.description} />
                            <PropertyAddress city={prop.city}
                                location={prop.location}
                            />
                        </Left>
                        <Right>
                            <SellerDesc name={prop.name} phoneNumber={prop.phoneNumber} email={prop.email} />
                        </Right>
                    </BodyContainer>
                </section>))}
        </div>

    )

  
}

export default PropertyDetails