import React from 'react'
import { Link } from 'react-router-dom'
import './landing_page_nav.css'
// import landingImage from "../image/landing_image.jpg";

function landing_page_nav() {
    return (
        <div id='main'>
            
            
            <div className="main_container" >
                

                <nav className='navbar navbar-expand-lg bg-dark x' data-bs-theme='dark' >
                    <div className='container-fluid '>

                        <div className='collapse navbar-collapse ' id='navbarNav'>

                            <ul className='navbar-nav d-flex justify-content-start' id='navbarNav'>

                                <li className='nav-item'>
                                    <h2 className='text-white' >Orbit</h2>

                                </li>

                            </ul>

                            <ul className='navbar-nav d-flex justify-content-end' id='navbarNav'>

                                <li className='nav-item'>
                                    <Link to="/signup"><button className='btn border m-2'><b>signup</b></button>  </Link>

                                </li>
                                <li className='nav-item m-2'>
                                    <Link to="/login"><button className='btn border'><b>login</b></button> </Link>

                                </li>
                                <li className='nav-item m-2'>

                                    <Link to="/login"><button className='btn border'><b>ContactUs</b></button> </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <div className="gradient-overlay"></div> 

            </div>





        </div>
    )





}

export default landing_page_nav