import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Radio } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import img from '../images/Frame 834.png'
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Checkout = ({ cart }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const subtotal = cart
    .reduce((total, e) => total + e.quantity * (e.price - (e.discountPercentage / 100) * e.price), 0)
    .toFixed(2);
  
    const calculateSubTotal = (price, discountPercentage, quantity) => {
        const discountedPrice = price - (discountPercentage / 100) * price;
        return parseFloat((discountedPrice * quantity).toFixed(2));
    };
    const [paymentMethod, setPaymentMethod] = useState('cash');
    return (
        <div className='container my-5'>
            <div className="links">
                <NavLink as={Link} to='/myAccount' className='mx-2' style={{ color: "#000000", textDecoration: "none" }}>Account /</NavLink>
                <NavLink as={Link} className='mx-2' style={{ color: "#000000", textDecoration: "none" }} to='/shop'>Product /</NavLink>
                <NavLink as={Link} className='mx-2' style={{ color: "#000000", textDecoration: "none" }} to='/cart'>View Cart /</NavLink>
                <NavLink as={Link} className='mx-2' style={{ color: "#000000", textDecoration: "none" }} to='/checkout'>Checkout /</NavLink>

            </div>

            <div className="row my-3 ">
                <Form

                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >
                    <div className="row my-2">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p style={{ color: "#000000", fontWeight: "500", fontSize: "36px" }} >Billing Details</p>
                            <Form.Item
                                label="First Name"
                                name="first"
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input variant='filled' className='w-100' style={{ height: "50px" }} />
                            </Form.Item>

                            <Form.Item
                                label="Company Name"
                                name="company"
                                rules={[{ required: true, message: 'Please input your Company Name!' }]}
                            >
                                <Input variant='filled' className='w-100' style={{ height: "50px" }} />
                            </Form.Item>
                            <Form.Item
                                label="Street Address"
                                name="Street Address"
                                rules={[{ required: true, message: 'Please input your Street Address!' }]}
                            >
                                <Input variant='filled' className='w-100' style={{ height: "50px" }} />
                            </Form.Item>
                            <Form.Item
                                label="Apartment, floor, etc. (optional)"
                                name="Apartment, floor, etc. (optional)"

                            >
                                <Input variant='filled' className='w-100' style={{ height: "50px" }} />
                            </Form.Item>

                            <Form.Item
                                label="Town/City"
                                name="Town/City"
                                rules={[{ required: true, message: 'Please input your Town/City!' }]}
                            >
                                <Input variant='filled' className='w-100' style={{ height: "50px" }} />
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                name="Phone Number"
                                rules={[{ required: true, message: 'Please input your Phone Number!' }]}
                            >
                                <Input variant='filled' className='w-100' style={{ height: "50px" }} />
                            </Form.Item>
                            <Form.Item
                                label="Email Address"
                                name="Email Address"
                                rules={[
                                    { required: true, message: 'Please input your Email Address!' },
                                    { type: 'email', message: 'Please enter a valid Email Address!' }
                                ]}
                            >
                                <Input variant='filled' className='w-100' style={{ height: "50px" }} />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox >Save this information for faster check-out next time</Checkbox>
                            </Form.Item>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            {cart.length == 0 ? (
                                <div>
                                    <p style={{ color: "#000000", fontWeight: "500", fontSize: "36px" }}>No Items </p>
                                </div>
                            ) : (
                                <div>
                                    {cart.map((e) => (
                                        <React.Fragment key={e.id}>
                                            <div className="d-flex justify-content-between mt-5">
                                                <Stack direction="row" spacing={2}>
                                                    <Avatar src={e.thumbnail} shape="square" />
                                                    {e.title}
                                                </Stack>
                                                ${parseFloat(e.quantity * (e.price - (e.discountPercentage / 100) * e.price)).toFixed(2)}
                                            </div>
                                            <hr style={{ backgroundColor: "#000000", height: "2px", border: "none" }} />
                                        </React.Fragment>
                                    ))}

                                    <div className="d-flex justify-content-between">
                                        <p style={{ color: "#000", fontWeight: "400", fontSize: "16px" }}>Subtotal:</p>
                                        <p style={{ color: "#000", fontWeight: "400", fontSize: "16px" }}>${subtotal}</p>
                                    </div>
                                    <hr style={{ backgroundColor: "#000", height: "2px", border: "none" }} />

                                    <div className="d-flex justify-content-between">
                                        <p style={{ color: "#000", fontWeight: "400", fontSize: "16px" }}>Shipping:</p>
                                        <p style={{ color: "#000", fontWeight: "400", fontSize: "16px" }}>Free</p>
                                    </div>
                                    <hr style={{ backgroundColor: "#000", height: "2px", border: "none" }} />

                                    <div className="d-flex justify-content-between">
                                        <p style={{ color: "#000", fontWeight: "400", fontSize: "16px" }}>Total:</p>
                                        <p style={{ color: "#000", fontWeight: "400", fontSize: "16px" }}>${subtotal}</p>
                                    </div>

                                    {/* خيارات الدفع */}
                                    <Radio.Group onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod} className="w-100">
                                        <Radio value="bank" className="w-100">
                                            <span>Bank</span>
                                            <img src={img} alt="payment options" className="ms-5" style={{ height: "20px", width: "100px" }} />
                                        </Radio>
                                        <Radio value="cash" className="w-100 mt-3">Cash on delivery</Radio>
                                    </Radio.Group>

                                    {/* كوبون الخصم */}
                                    <div className="my-3">
                                        <Input size="large" placeholder="Coupon Code" style={{ width: "300px", height: "56px", borderColor: "#00000080" }} />
                                        <Button className="mx-3 text-light" style={{ width: "211px", height: "56px", backgroundColor: "#DB4444", fontWeight: "500", fontSize: "16px" }}>
                                            Apply Coupon
                                        </Button>
                                    </div>

                                    {/* زر الطلب */}
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="mx-3 text-light" style={{ width: "211px", height: "56px", backgroundColor: "#DB4444", fontWeight: "500", fontSize: "16px" }}>
                                            Place Order
                                        </Button>
                                    </Form.Item>
                                </div>
                            )}

                        </div>
                    </div>


                </Form>


            </div>

        </div>
    )
}

export default Checkout