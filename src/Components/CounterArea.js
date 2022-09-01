import React from "react";
import CountUp from 'react-countup';
import Counter from "./Counter";


let styleProduct={
  maxWidth:window.innerWidth  - (window.innerWidth/10),
  margin:"auto",
}

function CounterArea() {
  return (
    <div className='row mt-5 col-md-12 ' style={styleProduct} >
    <h2>Our Archivements</h2>
    <div className=""></div>
    <Counter title="Happy Costumers" count={100}></Counter>
    <Counter title="Delivered projects" count={140}></Counter>
    <Counter title="Countries served" count={15}></Counter>
    <div className=""></div>
    </div>
   
  );
}

export default CounterArea;
