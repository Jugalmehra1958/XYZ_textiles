import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const textStyle ={
  color:"white",
  
}
const footerStyle={
  marginTop:"170px",
  padding:"5px",
  maxWidth:window.innerWidth  - (window.innerWidth/10),
  margin:"auto",
}

function Footer() {
  return (
    <MDBFooter bgColor='dark'  className='text-center text-lg-start text-muted' style={footerStyle} >
    

      <section className='' style={textStyle}>
        <MDBContainer className=' text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol  lg="4" xl="3" className='mx-auto '>
            <h3>XYZ textiles</h3>
              <p  style={textStyle}>
            
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Shirting
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Suiting
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Jeans
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Shirts
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" />
               Udaipur - 313002
              </p>
              <p>
                <MDBIcon icon="envelope"  />
                Bapu Bazar, nr surajpole
              </p>
              <p>
                <MDBIcon icon="phone"  /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print"  /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
    </MDBFooter>
  )
}

export default Footer;