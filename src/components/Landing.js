import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import logo from "../images/landing1.jpg"
import {motion} from "framer-motion"
import AOS from "aos"
import 'aos/dist/aos.css';




function Landing() {

  React.useEffect(()=>{
    AOS.init();
  },[])


// https://postimg.cc/ For Images Hosting
//"https://i.postimg.cc/QMK6LNkr/landing1.jpg"

  return (
   <div className='landing py-4' id='home' style={{backgroundImage : `url(${logo})` }}>
    <div className='overlay'></div>
    <Container className='landing-container'>
        <div className='landing-info py-5' data-aos="flip-left" data-aos-duration="3000">
            <motion.p 
            
            className='fs-4 fw-bold now'
            animate={{scale : [1 , 1.3 , 1]  }}
            transition={{ repeat: Infinity, duration: 1 , }}

            >Showing Now</motion.p>
            <h1 >Aquaman (2018) </h1>
            <p className='fw-bold'>Action</p>
            <Button variant="outline-primary" className=' fs-4 px-5 fw-bold'>Watch Now</Button>

        </div>
        


    </Container>

   </div>
  )
}

export default Landing