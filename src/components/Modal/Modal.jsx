import { useEffect, useState } from 'react';
import { features } from '../Features/Features';
import CloseIcon from '../../images/icon-close.svg';
import './Modal.scss';

export default function Modal(){
  const [isOpen,setIsOpen] = useState(false);
  const [closed,setClosed] = useState(false);
useEffect(() => {
  if (closed) return; 

  const timer = setTimeout(() => {
    setIsOpen(true);
  }, 30000);

  function handleMouseMove(e) {
   {e.clientY <20 && setIsOpen(true)}
  }

  document.addEventListener('mousemove', handleMouseMove);

  return () => {
    clearTimeout(timer);
    document.removeEventListener('mousemove',handleMouseMove);
  };
}, [closed]);

function handleClose() {
    setIsOpen(false);
    setClosed(true);
}


if (!isOpen) return null;

const feature = features[1];
const Image = feature.Image;

return (
  <div className="modal">
    <div className="modal__box">
      <button className="modal__close" onClick={handleClose}>
        <CloseIcon />
      </button>
      <Image className="modal__image" />
      <h2 className="modal__title">{feature.title}</h2>
      <p className="modal__text">{feature.text}</p>
      <button className="modal__button">More Info</button>
    </div>
  </div>
    );
}