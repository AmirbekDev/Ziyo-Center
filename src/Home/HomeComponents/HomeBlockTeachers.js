import React from 'react';
import img1 from "../../Images/Teacher_1.png"
import img2 from "../../Images/Teacher_2.png"
import img3 from "../../Images/Teacher_3.png"
import icon1 from "../../Images/icon_teach1.png"
import icon2 from "../../Images/icon_teach2.png"

function HomeBlockTeachers(props) {
    const teachers = [
        {
            id:1,
            img: img1,
            cource: "CEO, Developer",
            name:'Mohammod Ali',
        },
        {
            id:2,
            img: img2,
            cource: "Content Writter",
            name:'Braniya Lara ',
        },
        {
            id:3,
            img: img3,
            cource: "CEO, Developer",
            name:'Mohammod Ali',
        },
    ]
    return (
        <div className="home__block-teachers">
            <div className="container">
                <div className="home_block-teachers_start">
                    <div className="home_block-top">
                        <div className="home_block-top_text">
                            <h3>Meet with Our Mentor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum <br/> euismod nullam elementum. Urna, posuere nisi sit gravida massa.</p>
                        </div>
                    </div>
                    <div className="home_block-teachers">
                        {
                          teachers.map(item =>{
                              return(
                                  <div className="home_block-teacher">
                                      <div className="home_block-teacher_img" key={item.id}>
                                          <div className="home_block-teacher_top">
                                              <img src={item.img} alt="teacher"/>
                                          </div>
                                          <div className="home_block-teacher_bottom">
                                              <div className="home_block-teacher_bottom-start">
                                                  <div className="home_block-teacher_how">
                                                      <h3>{item.name}</h3>
                                                      <p>{item.cource}</p>
                                                  </div>
                                                  <div className="home_block-teacher_grade">
                                                      <div className="home_block-teacher_grade-left">
                                                          <div className="home_teacher-grade_text">
                                                              <img src={icon1} alt="icon"/>
                                                              <p>8.2k</p>
                                                          </div>
                                                          <div className="home_teacher-grade_text-two">
                                                              <img src={icon2} alt="icon"/>
                                                              <p>4.5</p>
                                                          </div>
                                                      </div>
                                                      <div className="home_block-teacher_grade-right">
                                                          <p>25+ Courses</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              )
                          })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBlockTeachers;