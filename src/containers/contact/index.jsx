import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { TbMailStar } from 'react-icons/tb'
import "./styles.scss"
import toby from "../../images/toby.png"

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <PageHeaderContent
                headerText="contact me"
                icon={<TbMailStar size={40} />}
            />
            <div className="contact__content">
                <div className="contact__content__right-wrapper"> 
                    <h3> 
                        let's talk! :)
                    </h3>
                    <br/>
                    <img 
                    src={toby} 
                    alt="silly pic"
                    style={{ width: '250px', height: '400px' }}
                    />
                    <h4> 
                        my dog toby!
                    </h4>
                </div>
                <div className="contact__content__left-wrapper"> 
                    <ul>
                        <li> email: {" "}
                            <a href="mailto:kay1inchung@g.ucla.edu">kay1inchung@g.ucla.edu</a>
                        </li>
                        <li> phone number:  {" "}
                            <a> (714) 856-3530 </a> 
                        </li>
                        <li> linkedin:  {" "}
                        <a href="https://www.linkedin.com/in/kaylin-chung/" target="_blank" rel="noopener noreferrer"> kaylin's linkedin page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact; 