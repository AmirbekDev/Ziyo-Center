import React from 'react';
import {Link} from "react-router-dom";
import "../Style/Style.css"

function Navbar(props) {

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_start">
                    <div className="navbar_left">
                        <h3>Education</h3>
                    </div>

                    <div className="navbar_center">
                        <div className="navbar_links">
                            <Link className='navbar_link' to={'/'}>Home</Link>
                            <Link className='navbar_link' to={'/'}>Courses</Link>
                            <Link className='navbar_link' to={'/'}>Page</Link>
                            <Link className='navbar_link' to={'/'}>Blog</Link>
                            <Link className='navbar_link' to={'/'}>Contact</Link>
                        </div>
                    </div>

                    <div className="navbar_right">
                        <div className="navbar_btns">
                            <button className="navbar_btn-one">Sing in</button>
                            <button className="navbar_btn-two">Sing Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;