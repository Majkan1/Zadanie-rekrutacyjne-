import Chrome from '../../images/logo-chrome.svg'
import Firefox from '../../images/logo-firefox.svg'
import Opera from '../../images/logo-opera.svg'


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
      <div>
        <div>
          <Chrome/>
          <h3>Add to Chrome</h3>
          <h6>Minimum version 62</h6>
          <button>Add & Install Extension</button>
        </div>
        <div>
          <Firefox/>
          <h3>Add to Firefox</h3>
          <h6>Minimum version 55</h6>
          <button>Add & Install Extension</button>
        </div>
        <div>
          <Opera/>
          <h3>Add to Opera</h3>
          <h6>Minimum version 46</h6>
          <button>Add & Install Extension</button>
        </div>
      </div>
    </>
  )
}