import React from 'react'
import ControlledCarousel from '../Components/ControlledCarousel';
import CounterArea from '../Components/CounterArea';
import ProductComponent from '../Components/ProductComponent';
// impoer CounterArea
// import Service from './Service';
import AppNavbar from "../Components/AppNavbar"

function Home () {
  return (
    <div>
   
    <ControlledCarousel/>
    <ProductComponent></ProductComponent>
      <CounterArea/></div>
  )
}

export default Home;