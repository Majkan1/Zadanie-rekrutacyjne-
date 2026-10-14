import { useState } from 'react';
import Logo from '../../images/logo-bookmark.svg';
import Hamburger from '../../images/icon-hamburger.svg';
import Close from '../../images/icon-close.svg';
import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import './Header.scss';

export default function Header() {
  const [isOpen,setIsOpen] = useState(false)

  return (
    <header className={isOpen ? 'header header--open':'header'  }>
      <Logo className="header__logo" />

      <button className="header__toggle" onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ? <Close/>:<Hamburger/>}
      </button>

      <nav className="header__nav">
        <ul className="header__links">
          <li><a className="header__link" href="#">Features</a></li>
          <li><a className="header__link" href="#">Pricing</a></li>
          <li><a className="header__link" href="#">Contact</a></li>
          <li><a className="header__login" href="#">Login</a></li>
        </ul>
        <div className="header__socials">
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
        </div>
      </nav>
    </header>
  );
}