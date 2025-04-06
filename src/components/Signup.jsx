import React,{useEffect} from 'react';
import img from '../images/dl.beatsnoop 1 (1).png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GoogleButton from 'react-google-button';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
export const Signup = ({users}) => {
  
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])
   
    const dispatch=useDispatch()
    const { register, handleSubmit, setError,reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
       
        
      const check=users.some((e)=>{
        return data.email==e.email
      })
      if (check) {
        setError("email", {
            type: "manual",
            message: "Your Email Has Already Exists Before....",
          });
       
      }
      else{
       users.push(data)
       localStorage.setItem("users",JSON.stringify(users))
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Account has been created",
            showConfirmButton: false,
            timer: 1500
          });
          reset()
      }
       
        
    };

    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                    <img src={img} className='w-100' alt="Signup Illustration" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                    <p style={{ color: "#000000", fontWeight: "500", fontSize: "36px" }}>Create an account</p>
                    <p style={{ color: "#000000", fontWeight: "400", fontSize: "16px" }}>Enter your details below</p>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '75%' } }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                            id="name"
                            label="Name"
                            variant="standard"
                            {...register("name", { required: "Name is required" })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
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
                        <Button style={{ background: "#DB4444", color: "#FAFAFA" }} type='submit'>
                            Create Account
                        </Button>
                        <GoogleButton
                            onClick={() => console.log('Google button clicked')}
                            type="light"
                            label='Sign up with Google'
                            style={{ width: "75%" }}
                        />
                    </Box>
                    <div className='my-4 d-flex justify-content-center'>
                        <NavLink style={{ color: "#000000", fontWeight: "400", fontSize: "16px", textDecoration: "none" }} as={Link} to='/login'>Already have account? Login</NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

