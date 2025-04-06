import React from 'react'
import img1 from '../images/ps5-slim-goedkope-playstation_large 1.png'
import img2 from '../images/attractive-woman-wearing-hat-posing-black-background 1.png'
import '../css/arrival.css'
import { Link } from '@mui/material'
import img3 from '../images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import img4 from '../images/652e82cd70aa6522dd785109a455904c.png'
export const Arrival = () => {
    return (
        <div className='row'>
            <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                <div className="first-parent position-relative">
                    <img src={img1} alt="" srcset="" className='w-100' />
                    <div className="child position-absolute ">
                        <p className='text-light' style={{ fontWeight: "500", fontSize: "24px" }}> PlayStation 5</p>
                        <p className='text-light'>Black and White version of the PS5 coming out on sale.</p>
                        <Link className='text-light' style={{ cursor: "pointer" }}>Shop Now</Link>
                    </div>

                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-3">
                <div className="row">
                    <div className="second-parent position-relative">
                        <img src={img2} alt="" width="100%" />
                        <div className="child2 position-absolute ">
                            <p className='text-light' style={{ fontWeight: "500", fontSize: "24px" }}>Women’s Collections</p>
                            <p className='text-light'>Featured woman collections that give you another vibe.</p>
                            <Link className='text-light' style={{ cursor: "pointer" }}>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 my-3">
                        <div className="second-parent position-relative">
                            <img src={img3} alt="" width="100%" />
                            <div className=" position-absolute childs">
                                <p className='text-light' style={{ fontWeight: "500", fontSize: "24px" }}>Women’s Collections</p>
                                <p className='text-light'>Featured woman collections that give you another vibe.</p>
                                <Link className='text-light' style={{ cursor: "pointer" }}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  col-sm-12 my-3">
                        <div className="second-parent position-relative">
                            <img src={img4} alt="" width="100%" />
                            <div className=" position-absolute childs">
                                <p className='text-light' style={{ fontWeight: "500", fontSize: "24px" }}>Women’s Collections</p>
                                <p className='text-light'>Featured woman collections that give you another vibe.</p>
                                <Link className='text-light' style={{ cursor: "pointer" }}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
