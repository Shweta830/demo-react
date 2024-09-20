import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
<span className='skillDesc'>I am a skilled and passionate
    web designer with experience.
</span>
<div className='skillBars'>
    <div className='skillBar'>
    <img src={UIDesign} alt='UIDesign' className='skillBarTmg'/>
    <div className='skillBartext'>
        <h2>UI/UX Design</h2>
<p>This is a demo text,you can write your own content here</p>    
</div>
</div>

<div className='skillBar'>
    <img src={WebDesign} alt='WebDesign' className='skillBarTmg'/>
    <div className='skillBartext'>
        <h2>Web Design</h2>
        <p>This is a demo web design,you can write your own content here</p>    

</div>
</div>

<div className='skillBar'>
    <img src={AppDesign} alt='AppDesign' className='skillBarTmg'/>
    <div className='skillBartext'>
        <h2>App Design</h2>
        <p>This is a demo app design ,you can write your own content here</p>    
        </div>
</div>
</div>
    
    
    </section>
  )
}

export default skills
