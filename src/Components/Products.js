import React from 'react'

import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import { Productbox } from './Productbox';

const Products = () => {
  return (
    <div id="products">
        <h1>Choose & Enjoy</h1>
        <p>very good products to explore</p>
        <div className='a-container'>
            <Productbox image={pimage1} title="veg burger" />
            <Productbox image={pimage2} title="pigeon burger" />
            <Productbox image={pimage1} title="veggie burger" />
        </div>
    </div>
  )
}

export default Products