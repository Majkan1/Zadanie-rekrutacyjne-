import Logo from '../../images/logo-bookmark.svg';
import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Logo className="footer__logo" />
      <ul className="footer__links">
        <li>
          <a className="footer__link" href="#">Features</a>
        </li>
        <li>
          <a className="footer__link" href="#">Pricing</a>
        </li>
        <li>
          <a className="footer__link" href="#">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a className="footer__social" href="#" aria-label="Facebook">
          <Facebook />
        </a>
        <a className="footer__social" href="#" aria-label="Twitter">
          <Twitter />
        </a>
      </div>
    </footer>
  );
}
