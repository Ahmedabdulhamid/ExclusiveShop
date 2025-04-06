import React from 'react'
import Box from '@mui/material/Box';

import img from '../images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
import img1 from '../images/Frame 560.png'
import img2 from '../images/image 46.png'
import img3 from '../images/image 51.png'
import img4 from '../images/image 47.png'
import '../css/about.css'
import img5 from '../images/Frame 883.png'

import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Services from './Services';
const About = () => {
    return (
        <div className='container my-5'>
            <NavLink as={Link} to='/' underline="none"style={{textDecoration:"none"}}  className='text-dark'>Home /</NavLink>
            <NavLink as={Link} to='/about' underline="none"style={{textDecoration:"none"}} className='mx-3 text-dark active'>About</NavLink>
            <div className="y-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 my-3">
                        <p style={{ color: "#000000", fontWeight: "800", fontSize: "54px" }}>Our Story</p>
                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                            presense in Bangladesh. Supported by wide range of tailored marketing,
                            data and service solutions,
                            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
                            customers across the region.
                        </p>
                        <p className='my-2' style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>
                            Exclusive has more than 1 Million products to offer, growing at a very fast.
                            Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                        <img src={img} alt="" srcset="" className='w-100' />
                    </div>
                    <div className="col-12 my-5 d-flex justify-content-center">
                        <img src={img1} alt="" srcset="" className='w-75' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='w-100 p-3' style={{ background: "#F5F5F5" }}>
                            <img src={img2} alt="" className="img-custom" />

                        </div>
                        <p style={{ color: "#000000", fontWeight: "500", fontSize: "32px" }}>Tom Cruise</p>
                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Founder & Chairman</p>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> <SlSocialTwitter className='text-dark' /></NavLink>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> < FaInstagram className='text-dark' /></NavLink>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> < FaLinkedinIn className='text-dark' /></NavLink>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='w-100' style={{ background: "#F5F5F5" }}>
                            <img src={img3} alt="" className="img-custom" />
                        </div>
                        <p style={{ color: "#000000", fontWeight: "500", fontSize: "32px" }}>Emma Watson</p>
                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Managing Director</p>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> <SlSocialTwitter className='text-dark' /></NavLink>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> < FaInstagram className='text-dark' /></NavLink>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> < FaLinkedinIn className='text-dark' /></NavLink>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='w-100' style={{ background: "#F5F5F5" }}>
                            <img src={img4} alt="" className="img-custom" />
                        </div>
                        <p style={{ color: "#000000", fontWeight: "500", fontSize: "32px" }}>Will Smith</p>
                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Product Designer</p>

                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> <SlSocialTwitter className='text-dark' /></NavLink>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> < FaInstagram className='text-dark' /></NavLink>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> < FaLinkedinIn className='text-dark' /></NavLink>

                    </div>
                    <div className="d-flex justify-content-center">
                           <img src={img5} alt="" srcset="" />
                    </div>
                </div>
                <div className="my-3">
                    < Services/>
                </div>
            </div>
        </div>
    )
}

export default About
