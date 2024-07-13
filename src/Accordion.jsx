import React, { useState } from 'react'
import './App.jsx'
import './App.css'

const Accordion = ({title,body}) => {
  const [show, setShow]= useState(false);

  return (
    <div>
        <div className='bodyClass'>
          <button onClick={()=> setShow(!show)}>{show ? "-" : "+"}</button>{body}</div>
        <div>{show && <div>{title}</div>}</div>
    </div>
  )
}

export default Accordion
