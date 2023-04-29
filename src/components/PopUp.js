import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CloseButton from 'react-bootstrap/CloseButton';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import {motion , AnimatePresence} from 'framer-motion'

import ClipLoader from "react-spinners/ClipLoader"

export default function PopUp(props) {

    const [rating , setRating] = React.useState("")

    React.useEffect(()=>{

        if( props.content !== null  ) {

            if (props.content.vote_average >= 6 && props.content.vote_average <= 7.5  ) {
             setRating("med")
            }
            else if(props.content.vote_average > 7.5) {
             setRating("high")
            }
            else {
             setRating("low")
            }
         
           }

           
        

    },[props.content])

  
    

  return (
    <AnimatePresence>
    <motion.div
     className='pop-up' 
     layout
     initial={{opacity:0 , scale: 0}}
     animate={{opacity:1 , scale : 1 }}
     exit={{opacity:0, scale: 0}}
     transition={{duration:1 , type:"spring" , stiffness:100}}
     >
        <Container>
            <div className='pop-upinfo px-4  overflow-x-scroll' >
                <div className='close-section p-3'>
                    <span><CloseButton className='fs-5' onClick={props.close} /></span>
                </div>
                <div className='pop-content'>

                    {props.type === "movie" &&  <div> {props.content !== null? 
                    <Row className='py-2'>
                    <Col lg={4} className="p-4">
                     <img src={'https://image.tmdb.org/t/p/w500' + props.content.backdrop_path} className='img-fluid rounded' alt={props.content.title}  />   
                    </Col>
                    <Col lg={8} className="p-4">
                        <h1> {props.content.title}</h1>
                        <h2 className='my-2'> Released : <span className='text-muted'>{props.content.release_date} </span> </h2>

                        <h4 className='d-flex justify-content-start align-items-center flex-wrap'> 
                        <span className='px-2 ' >Rating :  <span rate={rating} className="rating"> {props.content.vote_average} <i className="fa-solid fa-heart mx-2"></i> </span>  </span> , 
                        <span className='px-2'>  Popularity :  {props.content.popularity}  <i className="fa-solid fa-fire" style={{color: "red"}}></i> </span>
                        </h4>

                        <div className='genres y-4'>
                        {props.content.genre_ids.includes(28) && <span type="action"> Action </span>}
                        {props.content.genre_ids.includes(12) && <span type="Adventure"> Adventure </span>}
                        {props.content.genre_ids.includes(16) && <span type="Animation"> Animation </span>}
                        {props.content.genre_ids.includes(35) && <span type="Comedy"> Comedy </span>}
                        {props.content.genre_ids.includes(80) && <span type="Crime"> Crime </span>}
                        {props.content.genre_ids.includes(99) && <span type="Documentary"> Documentary </span>}
                        {props.content.genre_ids.includes(18) && <span type="Drama"> Drama </span>}
                        {props.content.genre_ids.includes(10751) && <span type="Family"> Family </span>}
                        {props.content.genre_ids.includes(14) && <span type="Fantasy"> Fantasy </span>}
                        {props.content.genre_ids.includes(36) && <span type="History"> History </span>}
                        {props.content.genre_ids.includes(27) && <span type="Horror"> Horror </span>}
                        {props.content.genre_ids.includes(10402) && <span type="Music"> Music </span>}
                        {props.content.genre_ids.includes(9648) && <span type="Mystery"> Mystery </span>}
                        {props.content.genre_ids.includes(10749) && <span type="Romance"> Romance </span>}
                        {props.content.genre_ids.includes(878) && <span type="ScienceFiction"> Science Fiction </span>}
                        {props.content.genre_ids.includes(10770) && <span type="TVMovie">TV Movie </span>}
                        {props.content.genre_ids.includes(53) && <span type="Thriller"> Thriller </span>}
                        {props.content.adult ? null :
                         <i className="fa-solid fa-shield fa-x2"  title="No Adult Content" ></i>}
                        </div>
                    </Col>
                    <Col lg={12} className="text-center" >
                        <h2 className='speacial-heading'>OverView</h2>
                        <p className='my-3'>{props.content.overview}</p>
                        <Button variant="outline-primary" className=' fs-5 px-5 fw-bold free-button m-lg-4 m-2'>Watch</Button>
                        <Button variant="outline-primary" className=' fs-5 px-5 fw-bold free-button m-lg-4 m-2 later'>Add To Watch List</Button>
                    </Col>
                </Row> 
                

               :
                  <div className='d-flex justify-content-center align-items-center p-5'><h1 className='text-muted'>Nothing To show </h1></div>
                    
                } </div> }
                

                {props.type === "person" &&  <div> {props.content !== null? 
                <Row className='py-2 h-100'>
                <Col lg={3} className="img-fluid"><img src={'https://image.tmdb.org/t/p/w500' + props.content.profile_path} className='img-fluid rounded' alt={props.content.title} /></Col>
                <Col lg={8} className="p-4">
                    <h1> {props.content.name}</h1>
                    <h3 className='py-2'> <b> Gender : </b> {props.content.gender === 1 ? <span> Female <i className="fa-solid fa-venus" style={{color: "pink"}}></i> </span> :<span> Male <i className="fa-solid fa-mars" style={{color: "blue"}}></i> </span> }</h3>
                    <h3 className='py-2'> <b> Popularity : </b> {props.content.popularity}M <i className="fa-solid fa-fire" style={{color: "red"}}></i> </h3>
                    <div className='p-4 text-center'>
                    <h2 className='speacial-heading'>Related Works</h2>
                    <div className='d-flex justify-content-center align-items-space-around py-4 flex-wrap'>
                        {props.content.known_for.map(item => {
                        
                                return <div lg={3} className=' p-2 d-flex justify-content-center align-items-center flex-column flex-wrap ' key={item.id} id={item.id}>
                                {item.backdrop_path ? <img src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path} className='img-fluid rounded pop-known' alt={item.title}  /> : <ClipLoader color="#36d7b" /> }    
                                    <p className='fw-bold fs-5 title mb-0' title={item.title}>{item.title ? item.title : "Untitled"}</p>
                                    <p className='fs-6 p-0 m-auto' >
                                      <b>  Rating :  </b>
                                        {(item.vote_average >= 6 && item.vote_average <=7.5)  && <span className='px-2 ' >  <span rate="med" className="rating"> {item.vote_average} <i className="fa-solid fa-heart mx-2"></i> </span> </span>  }
                                        {(item.vote_average < 6)  && <span className='px-2 ' >  <span rate="low" className="rating"> {item.vote_average} <i className="fa-solid fa-heart mx-2"></i> </span> </span>  }
                                        {(item.vote_average > 7.5)  && <span className='px-2 ' >  <span rate="high" className="rating"> {item.vote_average} <i className="fa-solid fa-heart mx-2"></i> </span> </span>  }
                                      </p>
                                </div>
                            
                        })}
                    </div>

                    </div>
                </Col>
                
            </Row> 
            

           :
              <div className='d-flex justify-content-center align-items-center p-5'><h1 className='text-muted'>Nothing To show </h1></div>
                
            } </div> }
                    



                     

                </div>

            </div>

        </Container>
        </motion.div>
        </AnimatePresence>
  )
}
