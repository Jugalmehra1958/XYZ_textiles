import React from 'react'
import About from "../Components/About"

let AboutUsStyle = {
  margin:"auto",
  maxWidth: window.innerWidth  - (window.innerWidth/10),
}


function Aboutus() {
  return (
    <div className='mt-5 ' style={AboutUsStyle}>
      <center>
        <h2 style={{marginTop:"100px"}}>About Us </h2>
        <About></About>
      </center>
    </div>
  )
}

export default Aboutus