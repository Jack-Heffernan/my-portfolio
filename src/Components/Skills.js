import React from 'react';
import { Container, Carousel  } from 'react-bootstrap';
import { LuGauge } from "react-icons/lu";
import { FaJsSquare, FaCss3Alt, FaPhp } from "react-icons/fa";


const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel  infinite={true} indicators={false} className="skill-slider">
                            <div className="carousel-item item">
                            <FaJsSquare className="skill-icon" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="carousel-item item">
                            <FaCss3Alt className="skill-icon"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="carousel-item item">
                            <FaPhp className="skill-icon"/>
                                <h5>PHP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};

export default Skills;
