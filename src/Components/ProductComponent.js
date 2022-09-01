import React from 'react'
import Product from './Product'
import pic1 from '../Pictures/pic1.jpg'
import pic2 from '../Pictures/pic2.jpg'
import pic3 from '../Pictures/pic3.jpg'

let styleProduct={
  maxWidth:window.innerWidth  - (window.innerWidth/10),
  margin:"auto",
}
function ProductComponent() {
  return (
    <div className='row mt-5 col-md-12 ' style={styleProduct} >
    <h1>Our products</h1>
        <Product pic={pic1}/>
        <Product pic={pic2}/>
        <Product pic={pic3}/>
        <Product pic={pic1}/>
        <Product pic={pic2}/>
        <Product pic={pic3}/>
        <Product pic={pic2}/>
        <Product pic={pic3}/>
    </div>
  )
}

export default ProductComponent