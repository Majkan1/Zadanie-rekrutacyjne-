import { useState } from 'react'
import './Faq.scss'
const array = [
  {
    question:"What is a Bookmark ?",
    answer:"hey"
  },
    {
    question:"How can I request a new browser?",
    answer:"no"
  },
    {
    question:"Is there a mobile app?",
    answer:"yes"
  },
    {
    question:"What about other Chromium browsers?",
    answer:"maybe"
  }
]

export default function Faq(){
  const [show,setShow] = useState(null);
  return(
    <div>
      <h1>
        Frequentl Asked Quections
      </h1>
      <p>
        Here are some of our FAQs. If you have any other questions
        you'd like answered please feel free to email us
      </p>
      <div>
          {array.map((item,index)=>
          <div key={index}>
            <button onClick={()=>{setShow(show===index?null:index)}}>
              <p>{item.question}</p>
              {index===show && <p>{item.answer}</p>}
            </button>
          </div>
          )}
      </div>
    </div>
  ) 
}