import React from 'react';
import "../../Style/Style.css"
import banner from '../../Images/Banner.png'
import icon1 from "../../Images/icon1.png"
import icon2 from "../../Images/icon2.png"
import icon3 from "../../Images/icon3.png"

function HomeBanner(props) {
    return (
        <div className="home_banner">
            <div className="home_banner-start">
                <img src={banner} alt='banner'/>
                <div className="home_banner-about">
                    <div className="home_banner-about_text">
                        <p>Self-Paced Learning Courses Online</p>
                    </div>

                    <div className="home_banner-about_paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere <br/> nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.</p>
                    </div>

                    <div className="home_banner-about_btn">
                        <button>Start a coures</button>
                    </div>
                </div>
            </div>

            <div className="home_banner-about_cources">
                <div className="container">
                    <div className="home_banner_about-sources-start">
                        <div className="home_banner-about_box-one">
                            <div className="home_about-box_one-left">
                                <img src={icon1} alt="icon_one"/>
                            </div>
                            <div className="home_about-box_one-right">
                                <div className="home_about-box_one-right-start">
                                    <p className="home_about-box-one-text">1400+</p>
                                    <p className="home_about-box-one-text-two">Online Courses</p>
                                </div>
                            </div>
                        </div>

                        <div className="home_banner-about_box-two">
                            <div className="home_about-box_two-left">
                                <img src={icon2} alt="icon_one"/>
                            </div>
                            <div className="home_about-box_two-right">
                                <div className="home_about-box_two-right-start">
                                    <p className="home_about-box-one-text">1100+</p>
                                    <p className="home_about-box-one-text-two">Expert Instructors</p>
                                </div>
                            </div>
                        </div>

                        <div className="home_banner-about_box-three">
                            <div className="home_about-box_three-left">
                                <img src={icon3} alt="icon_three"/>
                            </div>
                            <div className="home_about-box_three-right">
                                <div className="home_about-box_three-right-start">
                                    <p className="home_about-box-one-text">800+</p>
                                    <p className="home_about-box-one-text-two">Success Stories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomeBanner;