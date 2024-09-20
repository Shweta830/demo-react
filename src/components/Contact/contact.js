import React from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft  from '../../assets/microsoft.png';
import Facebook from '../../assets/walmart.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeUcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png'; 
const contact = () => {
  return (
    <section className="contactPage">
      <div id='clients'>
<h1 className='contactPageTitle'>My clients</h1>
<p className='clientDesc'>
  I have had the opportunity to work with a diverse group of
  companies .Some of the notable companies I have
  worked with includes
</p>
<div className='clientImgs'>
  <img src={Walmart} alt='clients' className='clientImg'/>
    <img src={Adobe} alt='clients' className='clientImg'/>
  <img src={Microsoft} alt='clients' className='clientImg'/>
  <img src={Facebook} alt='clients' className='clientImg'/>

</div>
      </div>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss
          my work
        </span>
        <form className='contactForm'>

<input type='text' className='name' placeholder='Your name' />
<input type='email' className='email' placeholder='Your email' />
<textarea className='msg'  name='message' rows="5" placeholder='your message'></textarea>
<button type='submit' value='Send' className='submitBtn'>Submit</button>
<div className='links'>
  <img  src={FacebookIcon} alt='Facebook' className='link' />
  <img  src={TwitterIcon} alt='twitter' className='link' />
  <img  src={YouTubeUcon} alt='Youtube' className='link' />
  <img  src={InstagramIcon} alt='Instagram' className='link' />

</div>

        </form>
      </div>
    </section>
  )
}

export default contact
