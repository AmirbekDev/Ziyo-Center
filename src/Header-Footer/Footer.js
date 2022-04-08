import React from 'react';
import facebook from "./../Images/facebook.png"
import ini from "./../Images/in.png"
import insta from "./../Images/insta.png"
import twiter from "./../Images/twiter.png"
import icon_right from "../Images/icon_right.png"
import phone from "../Images/phone.png"
import email from "../Images/email.png"
import zemlya from "../Images/zemlya.png"
import {Link} from "react-router-dom";


function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_start">
                    <div className="footer_left">
                        <div className="footer_left-top">
                            <h3>Education</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis. <br/> cing elit Amet vestibulum euismod nullam the <br/> elementum. Urna, posuere nisi sit gravid.</p>
                        </div>
                        <div className="footer_left-bottom">
                            <div className="footer_left-bottom-text">
                                <h3>Follow Us</h3>
                            </div>
                            <div className="footer_left-bottom_icons">
                                <img src={facebook} alt="icon_facebook"/>
                                <img src={insta} alt="icon_instagram"/>
                                <img src={twiter} alt="icon_twitter"/>
                                <img src={ini} alt="icon_in"/>
                            </div>
                        </div>
                    </div>


                    <div className="footer_right">
                        <div className="footer_right-start">
                            <div className="footer_right-links">
                                <div className="footer_fight-links-text">
                                    <h3>Feature Links</h3>
                                </div>

                                <div className="footer_right-links_generel">
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link to={"/"}>About Us</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link to={"/"}>Graduations</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link to={"/"}>Scholarship</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link to={"/"}>Admissions</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link to={"/"}>International</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link to={"/"}>Events</Link>
                                    </div>
                                </div>



                            </div>

                            <div className="footer_right-support">
                                <div className="footer_right-supports_generel">
                                    <h3>Support</h3>
                                </div>

                                <div className="footer_right-support_text">
                                    <div className="footer_right-support_generel">
                                        <img src={icon_right} alt="icon_rights"/>
                                        <Link to={"/"}>Language</Link>
                                    </div>
                                    <div className="footer_right-support_generel">
                                        <img src={icon_right} alt="icon_rights"/>
                                        <Link to={"/"}>WordPress</Link>
                                    </div>
                                    <div className="footer_right-support_generel">
                                        <img src={icon_right} alt="icon_rights"/>
                                        <Link to={"/"}>Privacy</Link>
                                    </div>
                                    <div className="footer_right-support_generel">
                                        <img src={icon_right} alt="icon_rights"/>
                                        <Link to={"/"}>FAQs</Link>
                                    </div>
                                    <div className="footer_right-support_generel">
                                        <img src={icon_right} alt="icon_rights"/>
                                        <Link to={"/"}>Support</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="footer_right-contact">
                                <div className="footer_right-contact_generel">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="footer_right-contact_text">
                                    <div className="footer_right-contact_text-block-one">
                                        <p>230,Mirpur Area, Mirpur 10, <br/> Dhaka,Bangladesh</p>
                                    </div>
                                    <div className="footer_right-contact_text-block-two">
                                        <img src={phone} alt='phone_icon'/>
                                        <p>+998(99)564-02-01</p>
                                    </div>
                                    <div className="footer_right-contact_text-block-three">
                                        <img src={email} alt='email_icon'/>
                                        <p>xayrulloweb@gmail.com</p>
                                    </div>
                                    <div className="footer_right-contact_text-block-four">
                                        <img src={zemlya} alt='zemlya_icon'/>
                                        <p>xayrulloweb.uz</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Footer;