import Logo from '../../images/logo-bookmark.svg';
import Hamburger from '../../images/icon-hamburger.svg'
import './Header.scss' 

export default function Header(){
  return(
    <header className='header'>
      <Logo className="logo"/>
      <Hamburger className="hamburger"/>
    </header>
  )
}