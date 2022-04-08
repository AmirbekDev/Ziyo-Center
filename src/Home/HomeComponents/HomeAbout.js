import React from 'react';
import about_img from "../../Images/home_about-img.png"
import icon1 from "../../Images/h_a_icon1.png"
import icon2 from "../../Images/h_a_icon2.png"
import icon3 from "../../Images/h_a_icon3.png"
import icon4 from "../../Images/h_a_icon4.png"

function HomeAbout(props) {
    return (
        <div className="home_about">
            <div className="container">
                <div className="home_about-start">
                    <div className="home_about-top">
                        <div className="home_about-top_left">
                            <div className="home_about-top_text-start">
                                <div className="home_about-top_text-generel">
                                    <h3>Find Your Course That <br/> Makes Bright Future</h3>
                                </div>
                                <div className="home_about-top_text-paragraph">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies <br/> at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce <br/> est, consectetur tempor penatibus sed. Ut <br/> dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, <br/> iaculis quam nisi, </p>
                                </div>
                                <div className="home_about-top_text-paragraph_two">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit Aliquam et hendrerit euismod fusce sit. </p>
                                </div>
                                <div className="home_about-top_text-btn">
                                    <button>Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="home_about-top_right">
                            <img src={about_img} alt="video"/>
                        </div>
                    </div>

                    <div className="home_about-bottom">
                        <div className="home_about-bottom_start">
                            <div className="home_about-bottom_text">
                                <h3>How It Work</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Aliquam et hendrerit euismod fusce sit. </p>
                            </div>
                            <div className="home_about-bottom_plan">
                                <div className="home_about-bottom_plan-start">
                                    <div className="home_about-start_plan-img">
                                        <img src={icon1} alt="icon"/>
                                    </div>
                                    <div className="home_about-bottom_plan-text">
                                        <h3>Learn More Online</h3>
                                    </div>
                                    <div className="home_about-bottom_plan-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consecte <br/>  tur adipiscing elit. Aliquam et hendrer <br/>  it eui smod fusce sit.</p>
                                    </div>
                                </div>

                                <div className="home_about-bottom_plan-start">
                                    <div className="home_about-start_plan-img">
                                        <img src={icon2} alt="icon"/>
                                    </div>
                                    <div className="home_about-bottom_plan-text">
                                        <h3>Writing Notes</h3>
                                    </div>
                                    <div className="home_about-bottom_plan-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consecte <br/>  tur adipiscing elit. Aliquam et hendrer <br/>  it eui smod fusce sit.</p>
                                    </div>
                                </div>

                               <div className="home_about-bottom_plan-start">
                                   <div className="home_about-start_plan-img">
                                       <img src={icon3} alt="icon"/>
                                   </div>
                                   <div className="home_about-bottom_plan-text">
                                       <h3>Interactive Sessions</h3>
                                   </div>
                                   <div className="home_about-bottom_plan-paragraph">
                                       <p>Lorem ipsum dolor sit amet, consecte <br/>  tur adipiscing elit. Aliquam et hendrer <br/>  it eui smod fusce sit.</p>
                                   </div>
                               </div>

                                <div className="home_about-bottom_plan-start">
                                    <div className="home_about-start_plan-img">
                                        <img src={icon4} alt="icon"/>
                                    </div>
                                    <div className="home_about-bottom_plan-text">
                                        <h3>Life Time Support</h3>
                                    </div>
                                    <div className="home_about-bottom_plan-paragraph">
                                        <p>Lorem ipsum dolor sit amet, consecte <br/> tur adipiscing elit. Aliquam et hendrer <br/>  it eui smod fusce sit.</p>
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

export default HomeAbout;