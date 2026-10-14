import { useState } from 'react';
import './Faq.scss';
import Arrow from '../../images/icon-arrow.svg';
const array = [
  {
    question: 'What is Bookmark?',
    answer: 'hey',
  },
  {
    question: 'How can I request a new browser?',
    answer: 'no',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'yes',
  },
  {
    question: 'What about other Chromium browsers?',
    answer: 'maybe',
  },
];

export default function Faq() {
  const [show, setShow] = useState(null);
  return (
    <section className="Faq">
      <h2 className="Faq__title">Frequently Asked Questions</h2>
      <p className="Faq__text">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className="Faq__list">
        {array.map((item, index) => (
          <div
            key={index}
            className={`Faq__item ${show === index ? 'Faq__item--open' : ''}`}
          >
            <button
              className="Faq__question"
              onClick={() => {
                setShow(show === index ? null : index);
              }}
            >
              <span>{item.question}</span>
              <Arrow className="Faq__arrow" />
            </button>
            {index === show && <p className="Faq__answer">{item.answer}</p>}
          </div>
        ))}
      </div>
      <button className="Faq__button">More Info</button>
    </section>
  );
}
