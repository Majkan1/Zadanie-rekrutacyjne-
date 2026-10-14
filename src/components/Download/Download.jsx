import Chrome from '../../images/logo-chrome.svg'
import Firefox from '../../images/logo-firefox.svg'
import Opera from '../../images/logo-opera.svg'
import './Download.scss'


export default function Download(){
  return(
    <>
      <div className='Download__start'>
        <h3 className='Download__h1'>Download the extension</h3>
        <p>We'got more browsers in the pipeline.
          Please do let us know if you're got a 
          favourite you'd like us to proritize
        </p>
      </div>
      <div className='Download__cards'>
        <div className='Download__card downolad--div'>
          <Chrome className='Download__logo'/>
          <h3 className='Download__title'>Add to Chrome</h3>
          <h6 className='Download__version'>Minimum version 62</h6>
          <button className='Download__button'>Add & Install Extension</button>
        </div>
        <div className='Download__card'>
          <Firefox className='Download__logo'/>
          <h3 className='Download__title'>Add to Firefox</h3>
          <h6 className='Download__version'>Minimum version 55</h6>
          <button className='Download__button'>Add & Install Extension</button>
        </div>
        <div className='Download__card'>
          <Opera className='Download__logo'/>
          <h3 className='Download__title'>Add to Opera</h3>
          <h6 className='Download__version'>Minimum version 46</h6>
          <button className='Download__button'>Add & Install Extension</button>
        </div>
      </div>
    </>
  )
}
