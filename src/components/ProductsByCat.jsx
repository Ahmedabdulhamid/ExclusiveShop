import React, { useEffect } from 'react'
import { getProductsByCategory } from '../Redux/category'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; import { Arrival } from './Arrival'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ProductsByCat = ({ cart, addCart, addWishList }) => {
  const { key } = useParams()
  const { productsByCat, loading } = useSelector((s) => s.categ)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsByCategory(key))
  }, [key])
  console.log(productsByCat);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleLinkClick = (e) => {
    if (!localStorage.Auth) {
      toast.error("You need to login first!"); // عرض Toast إذا لم يكن المستخدم مسجل دخول
      e.preventDefault(); // منع التنقل إلى الرابط
    }
  };
  return (
    <div className='container my-5'>
      <div className="row">
        {loading == true ? (<div className="vh-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="danger" />
        </div>) : (
          productsByCat.map((e) => (
            <div className="col-lg-3 col-md-6 col-sm-12 my-3" key={e.id}>
              <div className="image">
                <div className="parent position-relative">
                  <img
                    src={e.thumbnail}
                    alt={e.title}
                    width={270}
                    height={250}
                    style={{ background: "#F5F5F5", width: "100%", height: "auto" }}
                  />
                  <div className="icons">
                    <p onClick={() => addWishList(e)}><FavoriteBorderIcon /></p>
                    <NavLink as={Link} to={localStorage.Auth ? `/details/${e.id}` : '/'} onClick={handleLinkClick}  >

                      <p ><RemoveRedEyeOutlinedIcon /></p>

                    </NavLink>

                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <button className='btn cart'
                    style={{ width: "270px", height: "41px", background: "#000000", color: "#FFFFFF" }} onClick={() => addCart(e)}
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
