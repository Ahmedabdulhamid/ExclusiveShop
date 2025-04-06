import React from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {NavLink} from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='container my-5'>
    <NavLink to='/' style={{textDecoration:"none"}} className='text-dark'>Home /</NavLink>
    <NavLink href="#" style={{textDecoration:"none"}} className='mx-3 text-dark active'>404 Error</NavLink>
    <div className="row my-5">
       <p style={{fontWeight:"500",fontSize:"110px",color:"#000000"}} className='text-center'>404 Not Found</p>
       <p style={{fontWeight:"400",fontSize:"16px",color:"#000000"}} className='text-center'>Your visited page not found. You may go home page.</p>
       <div className="d-flex justify-content-center">
      <NavLink to='/'>
      <Button style={{background:"#DB4444", textTransform: "none" ,fontWeight:"500",fontSize:"16px"}} className='text-light px-4 py-2'>Back to home page</Button>
        </NavLink> 
       </div>
    </div>
</div>
  )
}

export default NotFound