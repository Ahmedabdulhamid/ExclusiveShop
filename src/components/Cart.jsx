import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Flex } from 'antd';
import { InputNumber } from 'antd';
import { Avatar } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { Input } from 'antd';
import img from '../images/dl.beatsnoop 1 (1).png';
const calculateSubTotal = (price, discountPercentage, quantity) => {
    const discountedPrice = price - (discountPercentage / 100) * price;
    return parseFloat((discountedPrice * quantity).toFixed(2));
};

const Cart = ({ cart, setCart, handleQuantityChange }) => {
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
    return (
        <div className="container my-5">
            {
                cart.length == 0 ? (
                    <>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <img src={img} className='w-100' alt="Signup Illustration" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h1>Cart Empty</h1>
                                <NavLink as={Link} to='/'>
                                <Button variant="contained" className='my-5' style={{background:"#DB4444",width:"215px",height:"56px",color:"#FAFAFA",fontWeight:"500",fontSize:"16px"}}>Back To Shop</Button>
                                </NavLink>
                                
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="cart table">
                                {/* العناوين */}
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Subtotal</TableCell>
                                    </TableRow>
                                </TableHead>

                                {/* بيانات المنتجات */}
                                <TableBody>
                                    {cart.map((e) => (
                                        <TableRow key={e.id}>
                                            <TableCell component="th" scope="row">
                                                <Avatar
                                                    alt={e.title}
                                                    src={e.thumbnail}
                                                    sx={{ width: 56, height: 56 }}
                                                    variant="square"
                                                />
                                                {e.title}
                                            </TableCell>
                                            <TableCell align="right">
                                                ${parseFloat((e.price - (e.discountPercentage / 100) * e.price).toFixed(2))}
                                            </TableCell>
                                            <TableCell align="right">
                                                {/* إدخال رقم الكمية بدلاً من تكرار السعر */}
                                                <InputNumber min={0} max={10} defaultValue={e.quantity} onChange={(value) => handleQuantityChange(e.id, value)} />
                                            </TableCell>
                                            <TableCell align="right">
                                                ${calculateSubTotal(e.price, e.discountPercentage, e.quantity)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className="d-flex justify-content-between my-4">
                            <NavLink as={Link} to='/'> <Button color="default" variant="outlined" style={{ width: "218px", height: "56px", borderColor: "#00000080" }} onC>Return To Shop</Button></NavLink>

                            <Button color="default" variant="outlined" style={{ width: "218px", height: "56px", borderColor: "#00000080" }} >Update Cart</Button>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                                <Input size="large" placeholder="Coupon Code" style={{ width: "300px", height: "56px", borderColor: "#00000080" }} />
                                <Button className='mx-3 text-light' style={{ width: "211px", height: "56px", backgroundColor: "#DB4444", fontWeight: "500", fontSize: "16px" }}>Apply Coupon</Button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                                <div className="cart-total w-100 p-4" style={{ border: "1.5px solid #000000" }}>
                                    <p style={{ color: "#000000", fontWeight: "500", fontSize: "20px" }}>Cart Total</p>
                                    <div className="d-flex justify-content-between">
                                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Subtotal:</p>
                                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>${parseFloat(cart.map((e) => {
                                            return e.quantity * (e.price - (e.discountPercentage / 100) * e.price)
                                        }).reduce((x, y) => {
                                            return x + y
                                        }, 0)).toFixed(2)}</p>

                                    </div>
                                    <hr style={{ backgroundColor: "#000000", height: "2px", border: "none" }} />
                                    <div className="d-flex justify-content-between">
                                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Shipping:</p>
                                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Free</p>

                                    </div>
                                    <hr style={{ backgroundColor: "#000000", height: "2px", border: "none" }} />
                                    <div className="d-flex justify-content-between">
                                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Total:</p>
                                        <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>${parseFloat(cart.map((e) => {
                                            return e.quantity * (e.price - (e.discountPercentage / 100) * e.price)
                                        }).reduce((x, y) => {
                                            return x + y
                                        }, 0)).toFixed(2)}</p>

                                    </div>
                                    <div className="d-flex justify-content-center">
                                       <NavLink as={Link} to='/checkout'>
                                       <Button className='mx-3 text-light' style={{ width: "211px", height: "56px", backgroundColor: "#DB4444", fontWeight: "500", fontSize: "16px" }}>Procees to checkout</Button>
                                        </NavLink> 
                                    </div>
                                </div>
                            </div>

                        </div>

                    </>


                )
            }

        </div>

    )
}

export default Cart