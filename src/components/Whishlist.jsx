import React,{useEffect} from 'react'

import { FaRegTrashAlt } from "react-icons/fa";
import "animate.css";
import WOW from "wow.js";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button, Flex } from 'antd';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Whishlist = ({ wishList, addCart, removeWishlist }) => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container wow animate__animated animate__fadeInDown'>
            <div className="row">


                {wishList.length == 0 ? (
                    <div className="container">
                        <div className="d-flex vh-100 justify-content-center align-items-center">
                            <div>
                            <p className='fw-bold fs-1'>Your Favourite Page Empty!</p>
                               
                        <NavLink as={Link} to='/'>
                            <Button variant="contained" className='my-5' style={{ background: "#DB4444", width: "215px", height: "56px", color: "#FAFAFA", fontWeight: "500", fontSize: "16px" }}>Back To Shop</Button>
                        </NavLink>
                            </div>
                            


                        </div>
                    
                    </div>


                ) : (
                    wishList.map((e) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 my-3" key={e.id}>
                            <div className="image">
                                <div className="parent position-relative">
                                    <img src={e.thumbnail} alt={e.title} width={270} height={250} style={{ background: "#F5F5F5" }} />

                                    <div className="icons position-absolute" style={{ right: "0" }}>
                                        <p onClick={() => removeWishlist(e.id)}><FaRegTrashAlt /></p>
                                        <NavLink as={Link} to={`/details/${e.id}`}  >



                                        </NavLink>

                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button className='btn cart'
                                        style={{ width: "270px", height: "41px", background: "#000000", color: "#FFFFFF" }}
                                        onClick={() => addCart(e)}
                                    >
                                        Add To Cart
                                    </button>
                                </div>

                                <p style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>{e.title}</p>

                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={e.rating} precision={e.rating} />
                                </Stack>

                                <span style={{ color: "#DB4444" }}>
                                    ${parseFloat((e.price - (e.discountPercentage / 100) * e.price).toFixed(2))}
                                </span>
                                <span>
                                    <s className='text-secondary mx-3'>${e.price}</s>
                                </span>
                            </div>
                        </div>


                    ))
                )}



            </div>
        </div>
    )
}
