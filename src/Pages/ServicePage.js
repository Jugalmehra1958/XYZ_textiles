import React from 'react'
import Services from '../Components/Services';

let ServiceStyle = {
  margin:"auto",
  maxWidth: window.innerWidth  - (window.innerWidth/10),
  
}
function ServicePage() {
  return (
    <div className='' style={ServiceStyle}>
    <div className='mt-5 row '>
      
    <Services title="Service 1" desciption="lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum"/>
    <Services title="Service 2" desciption="lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum"/>
    <Services title="Service 3" desciption="lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum"/>
    <Services title="Service 4" desciption="lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum"/>
    <Services title="Service 5" desciption="lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum"/>
    <Services title="Service 6" desciption="lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum lorium ipsum"/>


    </div>
    </div>
  )
}

export default ServicePage;
