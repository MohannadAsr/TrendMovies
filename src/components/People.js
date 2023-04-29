import React from 'react'
import Container from 'react-bootstrap/esm/Container'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Pagination } from "swiper";




function People(props) {

  const [visible,setVisible] = React.useState(10)



  function showmore(){
    if(visible === 15) {
      setVisible(props.content.length)
      return;
    }
    setVisible(prev => prev + 5)
  }

  return (
    <div className='people-section py-5' id='famous'>
        <Container className=''>
            <h2 className='text-center speacial-heading mb-5'>Famous People</h2>
     {props && <Swiper 
        
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          type: "progressbar",
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          // when window width is >= 640px
          340: {
            width: 340,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1080: {
            width: 1080,
            slidesPerView: 5,
          },
          1280: {
            width: 1280,
            slidesPerView: 6,
            spaceBetween:18
          },
        }}
        className="mySwiper py-4 "
      >

                {props.content.slice(0,visible).map(item => {
                    return <SwiperSlide key={item.id} className={item.profile_path ? "text-center" : "d-none"}> 
                       <div  className="img-container">
                          <span className='img-cover'><i className="fa-solid fa-circle-plus fa-3x text-light pe-auto details" onClick={()=>{props.select(item.id)}}></i><p className='text-light fw-bold fs-6'>Show Details</p></span>
                        <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} className='img-fluid ' alt={props.title}  />
                        </div>
                        <p className='fw-bold fs-6 title' title={item.name}>{item.name}</p>
                   </SwiperSlide> 
                   
                })}
                {visible < props.content.length  && <SwiperSlide className='d-flex justify-content-center align-items-center flex-column py-5' >
                <i className="fa-solid fa-circle-plus fa-3x text-dark  " onClick={showmore} style={{cursor : "pointer"}} ></i>
                <p className='fw-bold fs-6 '>{visible === 15 ? "View All" : "View More"}</p>
                </SwiperSlide>}
      </Swiper>}     
            
                
      

        </Container>
    </div>
    
  )
}

export default People