import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import { Link, NavLink } from 'react-router-dom';
import img from '../images/Frame 719.png'
import { FaFacebookF } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='p-5' style={{ background: "#000000" }}>
            <div className="container">
                <div className="row">
                    <div className="first-child-footer" style={{ width: "217px" }}>
                        <p className='' style={{ fontWeight: "700", fontSize: "24px", color: "#FAFAFA" }}>Exclusive</p>
                        <p style={{ fontWeight: "500", fontSize: "20px", color: "#FAFAFA" }}>  Subscribe</p>
                        <p style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA" }}>Get 10% off your first order</p>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-basic"
                                placeholder='Enter Your Email'
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: 'white' }, // لون الإطار الافتراضي
                                        '&:hover fieldset': { borderColor: 'white' }, // عند التحويم
                                        '&.Mui-focused fieldset': { borderColor: 'white' } // عند التركيز
                                    },
                                    input: { color: 'white' }, // لون النص داخل الحقل
                                    label: { color: 'white' }, // لون التسمية (label)

                                }}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SendIcon style={{ color: "#FAFAFA" }} />
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />

                        </Box>
                    </div>
                    <div className="first-child-footer" style={{ width: "217px" }}>
                        <p className='' style={{ fontWeight: "700", fontSize: "24px", color: "#FAFAFA" }}>Support</p>
                        <p style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA" }}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA" }}>exclusive@gmail.com</p>
                        <p style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA" }}>+88015-88888-9999</p>

                    </div>
                    <div className="first-child-footer" style={{ width: "217px" }}>
                        <p className='' style={{ fontWeight: "700", fontSize: "24px", color: "#FAFAFA" }}>Account</p>
                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }} as={Link} to='/myAccount'>My Account</NavLink>
                        </div>


                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }} as={Link} to='/register'>Login / Register</NavLink>
                        </div>
                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }} as={Link} to='/cart'>Cart</NavLink>
                        </div>
                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }} as={Link} to='/wishlist'>Wishlist</NavLink>
                        </div>
                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }} as={Link} to='/shop'>Shop</NavLink>
                        </div>

                    </div>
                    <div className="first-child-footer" style={{ width: "217px" }}>
                        <p className='' style={{ fontWeight: "700", fontSize: "24px", color: "#FAFAFA" }}>Quick Link</p>
                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }}>Privacy Policy</NavLink>
                        </div>


                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }}>Terms Of Use</NavLink>
                        </div>
                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }}>FAQ</NavLink>
                        </div>
                        <div className='my-2'>
                            <NavLink style={{ fontWeight: "400", fontSize: "16px", color: "#FAFAFA", textDecoration: "none" }} as={Link} to='/contact'>Contact</NavLink>
                        </div>

                    </div>
                    <div cclassName="first-child-footer" style={{ width: "217px" }} >
                        <p className='' style={{ fontWeight: "700", fontSize: "24px", color: "#FAFAFA" }}>Download App</p>
                        <p style={{ fontWeight: "500", fontSize: "12px", color: "#FAFAFA" }}>Save $3 with App New User Only</p>
                        <div className='my-2'>
                            <img src={img} alt="" srcset="" className='w-75' />
                        </div>
                        <NavLink className='mx-2'><FaFacebookF className='text-light' /></NavLink>

                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> <SlSocialTwitter className='text-light' /></NavLink>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> < FaInstagram className='text-light' /></NavLink>
                        <NavLink className='mx-2' style={{ textDecoration: "none" }}> < FaLinkedinIn className='text-light' /></NavLink>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer