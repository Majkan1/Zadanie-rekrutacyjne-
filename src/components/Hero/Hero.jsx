import FirstPhoto from '../../images/illustration-hero.svg'
import './Hero.scss'

export default function Hero(){
  return(
    <div className="container">
      <FirstPhoto className = "Photo1"/>
      <div className='blue'>
      </div>
      <h1 className='h1'>A simple Bookmark Manager</h1>
      <p className='text'>A clean and simple interface to organize<br/>
      yout favouriet websites.Open a new<br/>
      browser tab and see your sites load<br/>
      instantly. try if for free.</p>
      <div className='buttons'>
        <button className='button--chrome'>
          Get it on Chrome
        </button>
        <button className='button--firefox'>
          Get it on Firefox
        </button>
      </div>
    </div>
  )
} 