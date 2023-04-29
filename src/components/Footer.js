import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import bg from "../images/bg.jpg"
import {Row , Col , Button} from "react-bootstrap"
import AOS from "aos"
import 'aos/dist/aos.css';



export default function Footer() {


  React.useEffect(()=>{
    AOS.init();
  },[])
 

  return (
    <footer className='footer p-4' style={{backgroundImage : `url(${bg})`}} >
        <Container >
          <Row className='text-light pt-4 info pb-5'>
            <Col lg={3} className="p-2" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
              <h1 className='fw-bolder'>TrendMovies</h1>
              <span className='text-center text-muted'>Your Movies Mate</span>
            </Col>
            <Col lg={2} className="p-2" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" >
              <h3 className='mb-4'>Support</h3>
              <ul className='d-flex flex-column'>
                <li>
                  <a href='/' className='text-muted mb-2 '>Contact us</a>
                </li>
                <li>
                <a href='/' className='text-muted mb-2'>FAQ</a>
                  </li>
                  <li>
                  <a href='/' className='text-muted mb-2'>Downloads</a>
                  </li>
                  <li>
                  <a href='/' className='text-muted mb-2'>Pricing</a>
                  </li>
              </ul>
            </Col>
            <Col lg={2} className="p-2" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
            <h3 className='mb-4'>About Me</h3>
              <ul className='d-flex flex-column'>
                <li>
                  <a href='https://api.whatsapp.com/send/?phone=963964539647' className='text-muted mb-2 '>Contact me</a>
                </li>
                  <li>
                  <a href='/' className='text-muted mb-2'>Latest Project</a>
                  </li>
              </ul>

            </Col>
            <Col lg={5} className="p-2 " data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" >
            <h5 className='mb-3'> <i className="fa-solid fa-envelope p-1"></i> Stay up to date for all new Movies </h5>
            <input className='subscribe-input w-100 p-2 mb-4' placeholder='Enter Your E-mail' ></input>
            <Button variant="outline-primary" className=' fs-5 px-5 fw-bold free-button'>Sign up</Button>

            </Col>
            

          </Row>
          <div className='p-3 text-center text-light mt-3 copy-right'>
            <h5 className='mb-2'>Designed By Mohannad Alassar Using React JS</h5>
            <h6>All the Designs Are Made By My Self </h6>
            <h6>@2022 TrendMovies</h6>
            <div className='d-flex justify-content-center gap-4 mt-3 text-light '>
            <a href='https://www.facebook.com/mohannad.ala2sar' ><i className="fa-brands fa-facebook fa-2x facebook"></i></a>
            <a href='https://api.whatsapp.com/send/?phone=963964539647'  ><i className="fa-brands fa-whatsapp fa-2x whatsapp"></i></a>
            <a href='https://github.com/MohannadAsr' data-aos="flip-right"  ><i className="fa-brands fa-github fa-2x github"></i></a>

            </div>
          </div>
          
            
        </Container>
    </footer>
  )
}
