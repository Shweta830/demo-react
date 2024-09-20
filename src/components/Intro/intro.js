import React from 'react'
import './intro.css';
import bg from '../../assets/image.jpeg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
      <span className='hello'>Hello</span>
      <span>I'm <span className='introName'>Shweta</span>
      <br/>Website Designer   </span>
      <p className='introPara'>I am a skilled web Designer with experience in creating visually
         appealing and user<br/> friendly websites.
      </p>
      <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
</div>
<img src={bg} alt='Profile' className='bg'/>
   </section>  


  );
}

export default Intro
