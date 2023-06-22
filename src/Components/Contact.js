import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <h1>Book your Table</h1>
        <form>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Type your email' />
            <textarea placeholder='write ghere...' />
            <input type="submit" value='BOOK' />
        </form>

    </div>
  )
}

export default Contact