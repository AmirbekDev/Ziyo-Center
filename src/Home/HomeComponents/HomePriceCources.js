import React from 'react';
import img1 from "../../Images/cource_teacher-1.png"
import img2 from "../../Images/teacher_cource-2.png"
import img3 from "../../Images/teacher_cource-3.png"
import img4 from "../../Images/teacher_cource-4.png"
import img5 from "../../Images/teacher_cource-5.png"
import icon1 from '../../Images/icon1_price.png'
import img6 from "../../Images/teacher_cource-5.png"
import icon2 from "../../Images/icon_2-price.png"
import icon3 from "../../Images/icon_3-price.png"

function HomePriceCources(props) {

    const cources = [
        {
            id: 1,
            img: img1,
            price_cource: "$150",
            cource: 'Development',
            about_cource: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.',
        },
        {
            id: 2,
            img: img2,
            price_cource: "$130",
            cource: 'Android Developer',
            about_cource: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.',
        },
        {
            id: 3,
            img: img3,
            price_cource: "$140",
            cource: 'Java Script Course',
            about_cource: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.',
        },
        {
            id: 4,
            img: img4,
            price_cource: "$140",
            cource: 'Development',
            about_cource: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.',
        },
        {
            id: 5,
            img: img5,
            price_cource: "$150",
            cource: 'Development',
            about_cource: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.',
        },
        {
            id: 6,
            img: img6,
            price_cource: "$100",
            cource: 'Basic Marketing',
            about_cource: 'Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.',
        },
    ]


    return (
        <div className="home_cources">
            <div className="container">
                <div className="home_price-cources_start">
                    <div className="home_cources-about">
                        <h3>Our All The Online Courses</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in <br/> leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="home_prime-cources">
                        {
                            cources.map(item =>{
                                return(
                                    <div className="generel_cource-start">
                                        <div className="generel_cources">
                                            <div className="home_generel-cources">
                                                <div className="home_item-cource" key={item.id}>
                                                    <div className="home_item-cource_img">
                                                        <img src={item.img} alt='teacher_img'/>
                                                    </div>
                                                    <div className="home_item-cource_grade">
                                                        <div className="home_item-icon">
                                                            <img src={icon1} alt="icon"/>
                                                            <p>5.8k</p>
                                                        </div>

                                                        <div className="home_item-who_watched">
                                                            <img src={icon2} alt="icon"/>
                                                            <p>69k</p>
                                                        </div>

                                                        <div className="home_item-grade">
                                                            <img src={icon3} alt="icon"/>
                                                            <p>5.8k</p>
                                                        </div>
                                                    </div>
                                                    <div className="home_item-cource-how">
                                                        <h5>{item.cource}</h5>
                                                        <p>{item.price_cource}</p>
                                                    </div>
                                                    <div className="home_item-cource_teacher-about">
                                                        <p>{item.about_cource}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                        }
                    </div>

                    <div className="home_price-cource_btn">
                        <button>View All Course</button>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default HomePriceCources;