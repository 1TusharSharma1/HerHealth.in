import React from "react";
import "./FAQ.css";

const FAQ = () => {

    function toggleAnswer(event) {
        const answer = event.target.nextElementSibling;
        answer.classList.toggle("show");
      }
  return (
    <>
      <div className="FAQs">
      <h2>Frequently Asked Questions</h2>

        <div className="faq-section">
          <div className="faq-item">
            <h3 className="question" onClick={toggleAnswer}>
              Are there any support groups or resources available for patients
              with specific conditions?
            </h3>
            <p className="answer">
              Yes, after your consultation with the doctor, you will be directed
              to the necessary groups. Sharing is caring after all! ;)
            </p>
          </div>
          <div className="faq-item">
            <h3 className="question" onClick={toggleAnswer}>
              Are telehealth or virtual appointments available?
            </h3>
            <p className="answer">
              Yes, you can schedule appointments in either telehealth or virtual
              mode.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="question" onClick={toggleAnswer}>
              What academic support services are provided, such as tutoring or
              counseling?
            </h3>
            <p className="answer">
              Both! After you complete a questionnaire, you will be assigned a
              counselor and provided with a personalized academic calendar and
              resources.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="question" onClick={toggleAnswer}>
              What extracurricular activities or student organizations are
              available?
            </h3>
            <p className="answer">
              We offer a wide range of extracurricular activities and student
              organizations, including sports clubs, cultural societies,
              volunteering opportunities, and academic clubs. These provide
              students with opportunities to explore their interests, develop
              new skills, and foster a sense of community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
