import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../Redux/products'
import { useDispatch, useSelector } from 'react-redux'
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img from '../images/icon-delivery.png'
import img2 from '../images/Icon-return.png'
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Spinner from 'react-bootstrap/Spinner';
const Details = ({ addWishList }) => {
    const [value, setValue] = useState(1);
    const handleIncrease = () => setValue(value + 1);
    const handleDecrease = () => setValue(value > 1 ? value - 1 : 1);
    const { id } = useParams()
    const { loading, productDetail, productImages, productReviews } = useSelector((s) => s.productsToolkit)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])
    console.log(productImages);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='container my-5'>
            {loading == true ? (<div className="vh-100 d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="danger" />
            </div>) : (
                <div className="row">
                    <div className="col-lg-8 col-sm-6 col-sm-12 my-3">
                        <div className="row">
                            <p>Account / {productDetail.category} / {productDetail.title}</p>
                            <div className="col-lg-2 col-md-2 col-sm-12 my-3" style={{ background: "#F5F5F5" }}>
                                {productImages.map((e) => (
                                    <img src={e} alt="" srcset="" className='w-100' />
                                ))}

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <img src={productDetail.thumbnail} alt="" className='w-100' />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <p style={{ fontWeight: "600", fontSize: "24px" }}>{productDetail.title}</p>
                        <Stack spacing={1}>
                            <Rating name="half-rating" defaultValue={productDetail.rating} precision={productDetail.rating} />
                            <span>({productReviews.length} Reviews) <span style={{ color: "#00FF66" }}>{productDetail.stock > 0 ? '| In Stock' : ''}</span> </span>
                            <span style={{ fontWeight: "400", fontSize: "24px" }}>
                                ${parseFloat((productDetail.price - (productDetail.discountPercentage / 100) * productDetail.price).toFixed(2))}
                            </span>
                            <p style={{ fontWeight: "400", fontSize: "14px", color: "#000000" }}>{productDetail.description}</p>
                        </Stack>
                        <div className="my-3 d-flex">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "1px solid #ccc",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    width: "150px",
                                }}
                            >
                                {/* زر الإنقاص */}
                                <IconButton
                                    onClick={handleDecrease}
                                    sx={{
                                        flex: "1",
                                        borderRight: "1px solid #ccc",
                                        height: "40px",
                                        borderRadius: 0,
                                    }}
                                >
                                    <RemoveIcon />
                                </IconButton>

                                {/* الرقم في المنتصف */}
                                <Typography
                                    sx={{
                                        flex: '1',
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontSize: "18px",

                                    }}
                                >
                                    {value}
                                </Typography>

                                {/* زر الزيادة */}
                                <IconButton
                                    onClick={handleIncrease}
                                    sx={{
                                        flex: "1",
                                        backgroundColor: "#DB4444",
                                        color: "white",
                                        height: "40px",
                                        borderRadius: 0,
                                        "&:hover": { backgroundColor: "#DB4444" },
                                    }}
                                >
                                    <AddIcon />
                                </IconButton>
                            </Box>

                            <Button className='mx-1 w-50' style={{ background: "#DB4444", color: "#ffff" }}>Buy Now</Button>
                            <Button className='text-dark ' style={{ border: "1px solid #00000080" }} onClick={() => addWishList(productDetail)}><FavoriteBorderIcon /></Button>
                        </div>
                        <div className="my-3">
                            <div className="par-1 d-flex p-3" style={{ border: "1px solid #00000080" }}>
                                <img src={img} alt="" srcset="" width='31.67px' height={'40px'} />
                                <div className="ch">
                                    <p className='mx-2' style={{ fontWeight: "500", fontSize: "16px" }}>Free Delivery</p>
                                    <p style={{ fontWeight: "500", fontSize: "12px" }}>Enter your postal code for Delivery Availability</p>
                                </div>

                            </div>
                            <div className="par-2 d-flex p-3" style={{ border: "1px solid #00000080" }}>
                                <img src={img2} alt="" srcset="" width='31.67px' height={'40px'} />
                                <div className="ch">
                                    <p className='mx-2' style={{ fontWeight: "500", fontSize: "16px" }}>Return Delivery</p>
                                    <p style={{ fontWeight: "500", fontSize: "12px" }}>Free 30 Days Delivery Returns. Details</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Details