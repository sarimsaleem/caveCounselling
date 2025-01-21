import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const faqData = [
    { id: 1, question: 'What happens during counselling/therapy?', answer: 'Counselling, also known as therapy, is a form of talking therapy where I provide a safe and confidential space for you to explore your feelings and challenges. Building a warm, trusting relationship between therapist and client is key to the healing process,  and I am here to support you every step of the way. You are always in control of what we discuss, as only you know how it feels to be you. My role is to support and guide you in a way that feels right for you.' },
    { id: 2, question: 'How long does each session last and how often?', answer: 'Counselling sessions last 50 minutes. It is helpful to have weekly sessions to get the most benefit and positive impact on your wellbeing.' },
    { id: 3, question: 'How many sessions do I need?', answer: 'Therapy can be long term, or it can be short term, each person is different, and the number of sessions depends on you.  During the initial assessment we will discuss your requirements and work accordingly.' },
    { id: 4, question: 'How much do you charge and how do I pay?', answer: 'Both adult and child/young person counselling are charged at £60 per session. <br /> Please note I do offer limited spaces for low-cost counselling (students/low income), so do feel free to reach out to discuss this with me. <br /> Payments must be made prior to each session via bank transfer. All payment information is written clearly on the contract.' },
    { id: 5, question: 'Can I do online sessions', answer: 'Yes, I offer online sessions as well as in-person session based in Walthamstow, East London.' },
    { id: 6, question: 'What is your availability?', answer: 'In person: I currently see clients on Mondays, Tuesdays and Thursdays 12-4pm (Walthamstow, East London). <br /> Online sessions: Please contact me to discuss' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq-main section-padding' id='faq'>
      <div className='container'>

        <div className='faq-heading text-center'>
          <h1>Frequently Asked Questions</h1>
        </div>


        <div className="faq-container">
          {faqData.map((item) => (
            <div className="faq-item" key={item.id} onClick={() => toggleAnswer(item.id)}>
              <div className="question d-flex justify-content-between">
                {item.question}
                <div className="plus d-flex">
                  <h3 className="m-0">+</h3>
                </div>
              </div>
              {activeIndex === item.id && (
                <div className="d-flex justify-content-between">
                  <div
                    className="answer"
                    dangerouslySetInnerHTML={{ __html: item.answer }} // Handles <br /> tags properly
                  ></div>
                  <div>
                    <h3 className="m-0">-</h3>
                  </div>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default FAQ;