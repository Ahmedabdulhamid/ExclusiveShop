import React, { useEffect, useState } from 'react';
import img from '../images/dl.beatsnoop 1 (1).png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import {  NavLink, useNavigate } from 'react-router-dom';


const Login = ({ users,userAuth }) => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const [error, setError] = useState('')
    useEffect(() => {
        setError('')
    }, [])
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const check = users.some((e) => {
            if (e.email == data.email && e.password == data.password) {
                localStorage.setItem('Auth', JSON.stringify(e))
                navigate('/')
                if (localStorage.getItem('Auth')) {
                    userAuth=JSON.parse(localStorage.getItem('Auth'))
                }
               
            }
            else {
                setError('Invalid Authentication Try Again !')
            }
        })


    };

    return (
        <div className='container'>

            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={img} className='w-100' alt="Signup Illustration" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {error === '' ? '' : (
                        <Alert variant="filled" severity="error">
                            {error}
                        </Alert>
                    )}
                    <p style={{ color: "#000000", fontWeight: "500", fontSize: "36px" }}>Log in to Exclusive</p>
                    <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Enter your details below</p>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '75%' } }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <TextField
                            id="email"
                            label="Email or Phone Number"
                            variant="standard"
                            {...register("email", {
                                required: "Email or Phone is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email format"
                                }
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="standard"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <div className="d-flex justify-content-between">
                            <Button style={{ background: "#DB4444", color: "#FAFAFA" }} type='submit'>
                                Login
                            </Button>

                            <NavLink style={{ color: "#DB4444", fontWeight: "400", fontSize: "16px", textDecoration: "none" }} >Forget Password?</NavLink>

                        </div>

                    </Box>


                </div>
            </div>
        </div>
    )
}

export default Login