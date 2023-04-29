import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import AOS from "aos"
import 'aos/dist/aos.css';





export default function Download() {



  React.useEffect(()=>{
    AOS.init();
  },[])


  return (
  <section className='download-section py-5 '>
    <Container className='d-flex justify-content-between align-items-center flex-wrap text-sm-center px-4 text-center'>
            <div className='info text-light fw-bold'>
              <h3 className='mb-4 fw-bold'>Download Our New App for Desktops</h3>
              <span ><ul className='d-flex justify-content-between align-items-center gapx-2 flex-wrap text-center mb-4'> 
              <li><i className="fa-solid fa-check px-1"></i>Fast</li>
               <li><i className="fa-solid fa-check px-1"></i>Easy To watch</li> 
               <li className='text-center'><i className="fa-solid fa-check px-1 "></i>Free to Download</li>
               </ul>
               </span>
            </div>
            
            <div className='links d-flex justify-content-around align-items-center gap-4 ' data-aos="fade-right" data-aos-duration="3000">
            <Button variant="outline-primary rounded-pill" className=' fs-5 px-4 fw-bold'>Download Now</Button>
            <Button variant="outline-primary rounded-pill" className=' fs-5 px-4 fw-bold'>Try it</Button>
            </div>

        </Container>
  </section>
  )
}
