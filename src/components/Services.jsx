import React from 'react'
import img1 from '../images/Services.png'
import img2 from '../images/Services (1).png'
import img3 from '../images/Services (2).png'
const Services = () => {
  return (
    <div className='container '>
        <div className="row d-flex justify-content-center ms-5">
            <div className="col-lg-4 col-md-6 col-sm-3">
               <img src={img1} alt="" srcset="" />
               <p style={{fontSize:"20px",fontWeight:"600",color:"#000000"}}>FREE AND FAST DELIVERY</p>
               <p style={{fontSize:"14px",fontWeight:"400",color:"#000000"}}>Free delivery for all orders over $140</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-3">
               <img src={img2} alt="" srcset="" />
               <p style={{fontSize:"20px",fontWeight:"600",color:"#000000"}}>24/7 CUSTOMER SERVICE</p>
               <p style={{fontSize:"14px",fontWeight:"400",color:"#000000"}}>Friendly 24/7 customer support</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-3">
               <img src={img3} alt="" srcset="" />
               <p style={{fontSize:"20px",fontWeight:"600",color:"#000000"}}>MONEY BACK GUARANTEE</p>
               <p style={{fontSize:"14px",fontWeight:"400",color:"#000000"}}>We reurn money within 30 days</p>
            </div>
        </div>
    </div>
  )
}

export default Services