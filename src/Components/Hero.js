import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaCode,  } from 'react-icons/fa'; 
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                I'm Jack,{' '}
                <span>
                  <Typewriter
                    words={['a Developer', 'Web Designer']}
                    loop={10}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                </h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect </button>
            </div> 
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="rotating-icons">
              <h2 className="base"><FaCode /></h2>
              <a className="social-icon icon-1" href="https://linkedin.com">
                <FaLinkedin />
              </a>
              <a className="social-icon icon-2" href="https://github.com">
                <FaGithub />
              </a>
              <a className="social-icon icon-3" href="https://twitter.com">
                <FaTwitter />
              </a>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default Hero;