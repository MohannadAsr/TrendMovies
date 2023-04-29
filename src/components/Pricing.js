import React from 'react'
import bg from "../images/bg.jpg"
import Container from 'react-bootstrap/esm/Container'
import {motion} from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {

    React.useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div  className='py-5 pricing' style={{backgroundImage : `url(${bg})`}}>
        <h2 className='text-center fs-1 mb-5 text-light'>Plans Pricing</h2>
        <Container className='d-flex justify-content-around align-items-center py-5 gap-5 gap-lg-4 flex-wrap '>
           
            <div className='pt-4 d-flex flex-column plans text-center' data-aos="fade-right"  data-aos-duration="3000">
        <div className='price-info text-center px-3'>
              <h1>Free</h1>
              <p className='text-muted '>First step to start watch movies and tv shows in our site</p>
              <p className='fs-2 fw-bolder'>Start Free Trial</p>
        </div>
        <button className='my-4 fw-bold fs-4' >Get Started</button>
        <div className='features d-flex flex-column text-center text-light fw-bolder'>
            <div>Free First Month</div>
            <div>Unsubscribe Anytime</div>
            <div>Movies a Tv shows Unlimited</div>
            <div>Watch on Any Device</div>
            <div>2 Times Watch at same time </div>
            <div>Available HD </div>
        </div>
            </div>


            
            <motion.div 
            className='pt-4 d-flex flex-column plans text-center best-value' data-aos="fade-down"
            animate={{scale: 1.05}}
            data-aos-duration="3000"
            
            >
        <div className='price-info text-center px-3' >
              <h1>Premium</h1>
              <p className='text-muted '> watch movies and tv shows with high quality</p>
              <p className='fs-2 fw-bolder'>$12/month</p>
        </div>
        <button className='my-4 fw-bold fs-4' >Get Started</button>
        <div className='features d-flex flex-column text-center text-light fw-bolder'>
            <div>Free First Month</div>
            <div>Unsubscribe Anytime</div>
            <div>Movies a Tv shows Unlimited</div>
            <div>Watch on Any Device</div>
            <div>2 Times Watch at same time </div>
            <div>Available 4K </div>
        </div>
            </motion.div>


            <div className='pt-4 d-flex flex-column plans text-center' data-aos="fade-left"  data-aos-duration="3000">
        <div className='price-info text-center px-3'>
              <h1>Basic</h1>
              <p className='text-muted '> watch movies and tv shows Unlimited</p>
              <p className='fs-2 fw-bolder'>$6/month</p>
        </div>
        <button className='my-4 fw-bold fs-4' >Get Started</button>
        <div className='features d-flex flex-column text-center text-light fw-bolder'>
            <div>Free First Month</div>
            <div>Unsubscribe Anytime</div>
            <div>Movies a Tv shows Unlimited</div>
            <div>Watch on Any Device</div>
            <div>2 Times Watch at same time </div>
            <div>Available FHD </div>
        </div>
            </div>



           

            
 
        </Container>
    </div>
  )
}
