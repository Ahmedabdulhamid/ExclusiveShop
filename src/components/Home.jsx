import React, { useEffect, useRef } from 'react'
import { getProducts, getAllProductsCategories, getBestSelling, exploreProducts } from '../Redux/products'
import { useDispatch, useSelector } from 'react-redux'
import img1 from '../images/Frame 560 (1).png'
import img2 from '../images/Rectangle 18.png'
import '../css/home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img3 from '../images/Frame 600.png'
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; import { Arrival } from './Arrival'
import { NavLink } from 'react-bootstrap'
import Services from './Services'
import { Link, useNavigate } from 'react-router-dom'
import "animate.css";
import WOW from "wow.js";
import { CategoryList } from './CategoryList'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ cart, addCart, addWishList }) => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const { loading, products, productCategories, bestSelling, productsExplore } = useSelector((s) => s.productsToolkit)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())

    }, [])
    useEffect(() => {
        dispatch(getAllProductsCategories())

    }, [])
    useEffect(() => {
        dispatch(getBestSelling())

    }, [])
    useEffect(() => {
        dispatch(exploreProducts())

    }, [])
    const sliderRef = useRef(null);
    const sliderRef2 = useRef(null);
    useEffect(() => {
        const wow = new WOW({
            boxClass: "wow", // اسم الكلاس المستخدم
            animateClass: "animate__animated", // كلاس الأنيميشن
            offset: 0, // المسافة قبل تشغيل الأنيميشن
            mobile: true, // تفعيل على الهواتف
            live: true, // مراقبة العناصر الجديدة
        });
        wow.init();
    }, []);
    const handleLinkClick = (e) => {
        if (!localStorage.Auth) {
            toast.error("You need to login first!"); // عرض Toast إذا لم يكن المستخدم مسجل دخول
            e.preventDefault(); // منع التنقل إلى الرابط
        }
    };
    function Responsive() {
        return {

            dots: false,
            infinite: true,
            speed: 200,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: true,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        appendArrows: ".custom-arrows",
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    }
    const navigate = useNavigate()
    // ✅ استدعاء `Responsive()` للحصول على الإعدادات
    const settings = Responsive();
    const handlefunc = (key) => {
        navigate(`/products/category/${key}`)
    }

    return (
        <>
            <CategoryList />
            <div className="container wow animate__animated animate__fadeInDown  mt-5">
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <img src={img1} alt="" srcset="" width="100%" />
                        </div>
                    </div>

                </div>
                <div className="todys wow animate__animated animate__fadeInDown"  >
                    <img src={img2} alt="" srcset="" />
                    <span className='mx-2' style={{ color: "#DB4444" }}>Today’s</span>
                </div>
                <div className="flashsalescontainer d-flex wow animate__animated animate__fadeInDown my-3">
                    <div className="parent1">
                        <span >Flash Sales</span>
                    </div>
                    <div className="parent2 container ms-5">
                        <span className='mx-2'>Days</span>
                        <span className='mx-2'>Hours</span>
                        <span className='mx-2'>Minutes</span>
                        <span className='mx-2'>Seconds</span>
                        <br />
                        <span className='mx-2' style={{ fontWeight: "700", fontSize: "32px" }}>03</span>
                        <span className='mx-2' style={{ color: "#DB4444" }}>:</span>
                        <span className='mx-2' style={{ fontWeight: "700", fontSize: "32px" }}>33</span>
                        <span className='mx-2' style={{ color: "#DB4444" }}>:</span>
                        <span className='mx-2' style={{ fontWeight: "700", fontSize: "32px" }}>19</span>
                        <span className='mx-2' style={{ color: "#DB4444", }}>:</span>
                        <span className='mx-1' style={{ fontWeight: "700", fontSize: "32px" }}>56</span>
                    </div>

                </div>
                <div className="slider-container">
                    <div className="arrows d-flex justify-content-end my-3">
                        <div style={{ background: "#F5F5F5", width: "46px", height: "46px", borderRadius: "50%", cursor: "pointer" }} onClick={() => sliderRef.current.slickPrev()}>
                            <ArrowBackIcon
                                style={{ fontSize: "30px", color: "#000000" }}

                            />
                        </div>
                        <div style={{ background: "#F5F5F5", width: "46px", height: "46px", borderRadius: "50%", cursor: "pointer" }} className='mx-3' onClick={() => sliderRef.current.slickNext()} >
                            <ArrowForwardIcon
                                style={{ fontSize: "30px", cursor: "pointer", color: "#000000" }}

                            />
                        </div>

                    </div>
                    <div className="container">
                    <Slider ref={(slider) => (sliderRef.current = slider)} {...settings} className='container'>


{products.map((e) => (
    <div className="image" key={e.id}>
        <div className="parent position-relative wow animate__animated animate__fadeInDown">
            <img src={e.thumbnail} alt="" width={270} height={250} style={{ background: "#F5F5F5" }} />
            <div className='span position-absolute'>
                <p className='p-2'>-{e.discountPercentage}%</p>

            </div>

            <div className="icons position-absolute">
                <p onClick={() => addWishList(e)}><FavoriteBorderIcon /></p>
                <NavLink as={Link} to={localStorage.Auth?`/details/${e.id}`:'/'} onClick={handleLinkClick}  >

                    <p ><RemoveRedEyeOutlinedIcon /></p>

                </NavLink>

            </div>
        </div>

        <div className="d-flex justify-content-center">
            <button className='btn cart' style={{ width: "270px", height: "41px", background: "#000000", color: "#FFFFFF" }} onClick={() => addCart(e)}>Add To Cart</button>
        </div>
        <p style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>{e.title}</p>
        <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={e.rating} precision={e.rating} />

        </Stack>
        <span style={{ color: "#DB4444" }}>${parseFloat((e.price - (e.discountPercentage / 100) * e.price).toFixed(2))}</span>
        <span ><s className='text-secondary mx-3'>${e.price}</s></span>
    </div>

))}

</Slider>
                    </div>
                   
                    <div className="mt-5 d-flex justify-content-center">
                        <NavLink as={Link} to='/shop'><button className='btn' style={{ background: "#DB4444", color: "#ffff", width: "234px", height: "56px" }}>View All Products</button></NavLink>
                    </div>

                </div >
                <hr />
            </div >
            <div className="container wow animate__animated animate__fadeInDown mt-5">
                <div className="todys"  >
                    <img src={img2} alt="" srcset="" />
                    <span className='mx-2' style={{ color: "#DB4444" }}>Categories</span>
                    <p style={{ fontWeight: "600", fontSize: "36px" }}>Browse By Category</p>
                </div>
                <div className="slider-container">
                    <div className="arrows d-flex justify-content-end my-3">
                        <div style={{ background: "#F5F5F5", width: "46px", height: "46px", borderRadius: "50%", cursor: "pointer" }} onClick={() => sliderRef2.current.slickPrev()}>
                            <ArrowBackIcon
                                style={{ fontSize: "30px", color: "#000000" }}

                            />
                        </div>
                        <div style={{ background: "#F5F5F5", width: "46px", height: "46px", borderRadius: "50%", cursor: "pointer" }} className='mx-3' onClick={() => sliderRef2.current.slickNext()} >
                            <ArrowForwardIcon style={{ fontSize: "30px", cursor: "pointer", color: "#000000" }} />
                        </div>

                    </div>
                    <div className="container">
                    <Slider ref={sliderRef2} {...settings}  className='container'>
                        {productCategories.map((e) => (
                            <div key={e.id}>
                                <p className='text-center cat  pt-5' style={{ width: "170px", height: "145px", borderRadius: "4PX", border: "1px solid black", cursor: "pointer" }} onClick={() => handlefunc(`${e.slug}`)}>{e.name}</p>
                            </div>

                        ))}

                    </Slider>
                    </div>
                   


                </div>
                <hr className='my-5' />
            </div>
            <div className="container wow animate__animated animate__fadeInDown mt-5">
                <div className="todys d-flex justify-content-between"  >
                    <div className="fist-child">
                        <img src={img2} alt="" srcset="" />
                        <span className='mx-2' style={{ color: "#DB4444" }}>This Month</span>
                        <p style={{ fontWeight: "600", fontSize: "36px" }}>Best Selling Products</p>
                    </div>
                  
                    <div className="second-child">
                        <NavLink as={Link} to='/shop'><button className='btn' style={{ background: "#DB4444", color: "#ffff", width: "200px", height: "56px" }}>View All </button></NavLink>
                    </div>
                    <hr className='my-5' />

                </div>
                <div className="row">
                    {bestSelling.map((e) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 wow animate__animated animate__fadeInDown" key={e.id}>
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
                                        <NavLink as={Link} to={localStorage.Auth?`/details/${e.id}`:"/"}  onClick={handleLinkClick} >

                                            <p ><RemoveRedEyeOutlinedIcon /></p>

                                        </NavLink>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-center">
                                    <button className='btn cart' style={{ width: "270px", height: "41px", background: "#000000", color: "#FFFFFF" }} onClick={() => addCart(e)}>Add To Cart</button>
                                </div>
                                <p style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>{e.title}</p>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={e.rating} precision={e.rating} />

                                </Stack>
                                <span style={{ color: "#DB4444" }}>${parseFloat((e.price - (e.discountPercentage / 100) * e.price).toFixed(2))}</span>
                                <span ><s className='text-secondary mx-3'>${e.price}</s></span>
                            </div>
                        </div>
                    )

                    )}

                </div>


            </div>
            <div className="container wow animate__animated animate__fadeInDown mt-5">
                <div className="row">
                    <div className="col-12">
                        <img src={img3} alt="" srcset="" className='w-100' />
                    </div>
                </div>
                <hr />
            </div>
            <div className="container wow animate__animated animate__fadeInDown mt-5">
                <div className="todys d-flex justify-content-between"  >
                    <div className="fist-child">
                        <img src={img2} alt="" srcset="" />
                        <span className='mx-2' style={{ color: "#DB4444" }}>Our Products</span>
                        <p style={{ fontWeight: "600", fontSize: "36px" }}>Explore Our Products</p>
                    </div>
                    <div className="second-child">
                        <NavLink as={Link} to='/shop'><button className='btn ' style={{ background: "#DB4444", color: "#FAFAFA", width: "159px", height: "56px" }} >View All</button></NavLink>
                    </div>

                </div>
                <div className="row">
                    {productsExplore.map((e) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 my-3 wow animate__animated animate__fadeInDown" key={e.id}>
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
                                        <NavLink as={Link} to={localStorage.Auth?`/details/${e.id}`:"/"} onClick={handleLinkClick}  >

                                            <p ><RemoveRedEyeOutlinedIcon /></p>

                                        </NavLink>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button className='btn cart' style={{ width: "270px", height: "41px", background: "#000000", color: "#FFFFFF" }} onClick={() => addCart(e)} >Add To Cart</button>
                                </div>
                                <p style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px" }}>{e.title}</p>
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={e.rating} precision={e.rating} />

                                </Stack>
                                <span style={{ color: "#DB4444" }}>${parseFloat((e.price - (e.discountPercentage / 100) * e.price).toFixed(2))}</span>
                                <span ><s className='text-secondary mx-3'>${e.price}</s></span>
                            </div>
                        </div>
                    )

                    )}

                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <NavLink as={Link} to='/shop'> <button className='btn' style={{ background: "#DB4444", color: "#ffff", width: "234px", height: "56px" }}>View All Products</button></NavLink>
                </div>
                <hr />

            </div>
            <div className="container wow animate__animated animate__fadeInDown mt-5">
                <div className="todys "  >
                    <img src={img2} alt="" srcset="" />
                    <span className='mx-2' style={{ color: "#DB4444" }}>Featured</span>
                    <p style={{ fontWeight: "600", fontSize: "36px" }}>New Arrival</p>
                </div>
                <Arrival />
            </div>
            <Services />
        </>
    )
}
const boxStyle = {
    display: "inline-block",
    margin: "20px",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
};
export default Home