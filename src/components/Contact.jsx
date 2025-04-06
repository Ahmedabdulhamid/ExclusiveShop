import React,{useEffect} from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { CiPhone } from "react-icons/ci";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const { TextArea } = Input;
const Contact = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container my-5">
             <NavLink as={Link} to='/' underline="none"style={{textDecoration:"none"}}  className='text-dark'>Home /</NavLink>
             <NavLink as={Link} to='/contact' underline="none"style={{textDecoration:"none"}} className='mx-3 text-dark active'>Contact</NavLink>
            <div className="row my-4">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <CiPhone className='fs-5 ' style={
                        { background: "#DB4444", width: "40px", height: "40px", borderRadius: "50%", color: "#FFFFFF", padding: "10px" }
                    } />
                    <span style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }} className='mx-3'>Call To Us</span>
                    <div className="my-3">
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <hr style={{ backgroundColor: "#000000", height: "2px", border: "none" }} />
                    <MdOutlineLocalPostOffice style={
                        { background: "#DB4444", width: "40px", height: "40px", borderRadius: "50%", color: "#FFFFFF", padding: "10px" }
                    } />
                    <span style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }} className='mx-3'>Write To US</span>
                    <div className="my-3">
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className="col-lg-9 col-md-6 col-sm-12">
                    <Form
                        className='w-100'
                        name="basic"

                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <Form.Item
                                    label="Your Name"
                                    filled
                                    name="Your Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Name!',
                                        },
                                    ]}
                                >
                                    <Input style={{
                                        backgroundColor: '#f5f5f5', // لون تعبئة شبيه بـ "filled"
                                        border: 'none',

                                        // خط سفلي كـ "underline"
                                        borderRadius: 0,
                                    }} />
                                </Form.Item>


                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <Form.Item
                                    label="Your Email"
                                    filled
                                    name="Your Email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                    ]}
                                >
                                    <Input style={{
                                        backgroundColor: '#f5f5f5', // لون تعبئة شبيه بـ "filled"
                                        border: 'none',

                                        // خط سفلي كـ "underline"
                                        borderRadius: 0,
                                    }} />
                                </Form.Item>


                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <Form.Item
                                    label="Your Phone"
                                    filled
                                    name="Your Phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Phone!',
                                        },
                                    ]}
                                >
                                    <Input style={{
                                        backgroundColor: '#f5f5f5', // لون تعبئة شبيه بـ "filled"
                                        border: 'none',

                                        // خط سفلي كـ "underline"
                                        borderRadius: 0,
                                    }} />
                                </Form.Item>


                            </div>
                        </div>


                        <Form.Item label="Your Message"
                            filled
                            name="Your Message"
                            rules={[
                                {
                                    required: true,
                                    message: 'Your Message!',
                                },
                            ]}>
                            <TextArea rows={8} style={{
                                backgroundColor: '#f5f5f5', // لون تعبئة شبيه بـ "filled"
                                border: 'none',

                                // خط سفلي كـ "underline"
                                borderRadius: 0,
                            }} />
                        </Form.Item>
                        <Form.Item label={null}>
                            <div className="d-flex justify-content-end">
                            <Button type='default' style={{background:"#DB4444",color:"#FAFAFA",width:"215px",height:"56px"}} htmlType="submit">
                            Send Massage
                            </Button>
                            </div>
                           
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </div>

    )
}

export default Contact