import React, { useEffect, useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
 

import PropagateLoader from 'react-spinners/PropagateLoader';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const [loading, setLoading]=useState(false)

  // const override=css`
  // display:block;
  // border-color:red;
  // margin-top:20px;
  // `;
  

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)

  },[])


  return (
    <div className="App">
      {
        loading ? <PropagateLoader color={'#3D2514'} Loading={loading}   size={40} /> 
        : 
        <>
        <Navbar />
        <Header />
        <Products />
        <About />
        <Contact />
        </>
      }
    </div>
  );
}

export default App;
