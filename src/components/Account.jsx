import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { toast } from "react-toastify";
import { Link, NavLink } from 'react-router-dom';
const Account = ({ users, setUsers, userAuth, setUserAuth }) => {
    const [form] = Form.useForm();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        const storedAuth = localStorage.getItem('Auth');
        if (storedAuth) {
            const userData = JSON.parse(storedAuth);
            setName(userData.name || '');
            setEmail(userData.email || '');
            form.setFieldsValue({
                name: userData.name,
                email: userData.email,
            });
        }
    }, [form]);
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const onFinish = (values) => {
        console.log('Success:', values);

        if (localStorage.Auth) {
            if (userAuth.password !== values.currentPassword) {
                form.setFields([
                    {
                        name: 'currentPassword',
                        errors: ['كلمة المرور الحالية غير صحيحة!'],
                    },
                ]);
                return;
            }

            let check = users.some((e) => e.email === userAuth.email);
            if (check) {
                let usersData = users.map((e) => {
                    if (e.email === userAuth.email) {
                        return {
                            ...e,
                            name: values.name,
                            email: values.email,
                            password: values.newPassword,
                        };
                    }
                    return e;
                });

                localStorage.setItem('users', JSON.stringify(usersData));
                setUsers(JSON.parse(localStorage.users))
                localStorage.setItem('Auth', JSON.stringify(values));
                setUserAuth(JSON.parse(localStorage.Auth))
                toast.success("لقد تم تعديل حسابك الإلكتروني بنجاح");
            }
        }
    };

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between">
                <div className="links">
                <NavLink as={Link} to='/' style={{textDecoration:"none"}} className='text-dark'>Home /</NavLink>
                <NavLink as={Link} to='/myAccount' style={{textDecoration:"none"}} className='mx-3 text-dark active'>My Account</NavLink>
                </div>
                <p>Welcome! <span className='text-danger fw-bold'>{name}</span></p>
            </div>
           
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                    <span style={{ fontWeight: "500", fontSize: "16px" }} className="mx-3">Manage My Account</span>
                    <div className="my-3 ms-5">
                        <p className="text-danger" style={{ fontWeight: "400", fontSize: "16px" }}>My Profile</p>
                        <p>Address Book</p>
                        <p>My Payment Options</p>
                    </div>
                    <span style={{ fontWeight: "500", fontSize: "16px" }} className="mx-3">My Orders</span>
                    <div className="my-3 ms-5">
                    
                        
                        <p>My Returns</p>
                        <p>My Cancellations</p>
                    </div>
                    <span style={{ fontWeight: "500", fontSize: "16px" }} className="mx-3">My WishList</span>
                </div>

                <div className="col-lg-9 col-md-6 col-sm-12">
                    <p className="text-danger" style={{ fontWeight: "500", fontSize: "20px" }}>Edit Your Profile</p>

                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Please enter your Name!' }]}
                                >
                                    <Input
                                        variant="filled"
                                        className="w-100"
                                        value={name}
                                        style={{ height: "50px" }}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Item>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please enter your Email!' }]}
                                >
                                    <Input
                                        variant="filled"
                                        className="w-100"
                                        value={email}
                                        style={{ height: "50px" }}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <p style={{ fontWeight: "400", fontSize: "16px" }} className="my-3">Password Changes</p>
                        <div className="w-100">
                            <Form.Item
                                name="currentPassword"
                                rules={[{ required: true, message: 'Please enter your current password!' }]}
                            >
                                <Input.Password
                                    placeholder="Current Password"
                                    className="w-100 my-3"
                                    style={{ height: "50px" }}
                                    variant='filled'
                                />
                            </Form.Item>

                            <Form.Item
                                name="newPassword"
                                rules={[
                                    { required: true, message: 'Please enter a new password!' },
                                    { min: 8, message: 'Password must be at least 8 characters!' },
                                ]}
                            >
                                <Input.Password
                                    placeholder="New Password"
                                    className="w-100 my-3"
                                    style={{ height: "50px" }}
                                    variant='filled'
                                />
                            </Form.Item>

                            <Form.Item
                                name="confirmPassword"
                                dependencies={['newPassword']}
                                rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Passwords do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    placeholder="Confirm New Password"
                                    className="w-100 my-3"
                                    style={{ height: "50px" }}
                                    variant='filled'
                                />
                            </Form.Item>
                        </div>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Account;
