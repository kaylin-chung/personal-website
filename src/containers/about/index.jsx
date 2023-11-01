import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { LuScanFace } from "react-icons/lu";
import "./styles.scss";
import ProfilePic from "../../images/profilepic.png";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="about me"
        icon={<LuScanFace size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3 className="introPara"> it's nice to meet you! </h3>
          <p>
            i'm a driven student, passionate about software engineering and
            infusing creativity into everything i do. i believe that combining
            innovation and accessibility is a powerful formula, which i strive
            to incorporate into every project i undertake. big data and AI
            intrigue me, particularly in their potential to revolutionize
            cognitive science, healthcare, and IT. i am constantly looking for
            opportunities to connect with and learn from mentors in the
            industry, so if you resonate with what you see on my website please
            do not hesitate to reach out!
          </p>
          <img
            src={ProfilePic}
            alt="My Image"
            style={{ width: "350px", height: "400px" }}
          />
        </div>
        <div className="about__content__listWrapper">
          <h3 className="basicInfo"> basic information </h3>
          <ul>
            <li>
              {" "}
              <b>name:</b> kaylin chung{" "}
            </li>
            <li>
              {" "}
              <b>pronouns:</b> she/her{" "}
            </li>
            <li>
              {" "}
              <b>school:</b> second year @ UCLA (go bruins!!)
            </li>
            <li>
              {" "}
              <b>studying:</b> computer science{" "}
            </li>
            <li>
              {" "}
              <b>based in:</b> orange county{" "}
            </li>
            <li>
              {" "}
              <b>mbti:</b> infj
            </li>
            <li>
              {" "}
              <b>qualities:</b> determined, goal-oriented, open-minded, creative{" "}
            </li>
          </ul>

          <h3 className="goals"> goals </h3>
          <ul>
            <li>
              {" "}
              gain practical work experience in the fields of <b>
                SWE
              </b> and <b>data science</b>{" "}
            </li>
            <li>
              {" "}
              always practice <b>effective communication</b>, both verbally and
              through clear code writing
            </li>
            <li>
              {" "}
              couple web development with data science to create an{" "}
              <b>informative, data-driven websites</b>{" "}
            </li>
            <li> sharpen and enhance my backend development skills</li>
            <li>
              {" "}
              explore various methods of integrating <b>creativity</b> into my
              front-end development skills{" "}
            </li>
          </ul>
          <h3 className="funFacts"> fun facts </h3>
          <ul>
            <li> a HUGE foodie (so let me know if you need recs) </li>
            <li> enjoys making food/lifestyle content on TikTok </li>
            <li> has practiced hot yoga for 6 years </li>
            <li>
              {" "}
              loves to constantly create! whether through baking, painting, or
              ceramic-making{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
