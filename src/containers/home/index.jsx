import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import {Animate} from "react-simple-animate";
import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa'
const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__text-wrapper">
                <h1>
                    hello, my name is
                    <br />
                    kaylin chung
                </h1>
            </div>
            <Animate
                play={true}
                duration={1.5}
                delay={1}
                start = {{
                    transform: "translateY(600px)"

                }}
                end = {{
                    transform: "translateX(0px)"

                }}
            >
            <div className="contact-me">
                <div className="contact-me__buttons-wrapper">
                    <Link to={'/contact'}> let's connect! </Link>
                    <a href="https://docs.google.com/document/d/1zLJgW217LoLmg2ybzmSX0yy51ov6rN1K/edit?usp=sharing&ouid=116731288247349933491&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" >download resume</a>
                </div>
                <div className="contact-me__socials-wrapper">
                    <a href="https://www.linkedin.com/in/kaylin-chung/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://www.instagram.com/kaylin.chung/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={32} />
                    </a>
                    <a href="https://www.tiktok.com/@kaylin_chung" target="_blank" rel="noopener noreferrer">
                        <FaTiktok size={32} />
                    </a>
                    
                </div>
            </div>
            </Animate>
            

        </section>

    )
};

export default Home; 