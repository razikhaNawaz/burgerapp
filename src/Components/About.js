import React from 'react'
import aboutImage from '../images/about.png'

const About = () => {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENT</h1>
            <p>very delicious burger from burger shop</p>
            <button>Read more</button>
        </div>
        <div className='about-image'>
            <img src={aboutImage} alt='' />
        </div>

    </div>
  )
}

export default About