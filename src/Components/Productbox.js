import React from 'react'

export const Productbox = (props) => {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt='' />
        </div>
        <div className='a-b-test'>
            <h2>{props.title}</h2>
            <button className='productbox-button'>Order now</button>
        </div>

    </div>
  )
}
