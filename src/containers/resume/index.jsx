import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiOutlinePaperClip } from "react-icons/ai";
import kaylinResume from "./kaylinchung_resume.pdf";
import "./styles.scss";

const Resume = () => {
  return (
    <section className="resume" id="resume">
      <PageHeaderContent
        headerText="my resume"
        icon={<AiOutlinePaperClip size={40} />}
      />
      <div className="resume__resDoc">
        <embed src={kaylinResume} width="900px" height="970px" />
      </div>
    </section>
  );
};

export default Resume;
