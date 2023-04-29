import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import poster from "../images/Poster.jpg"
import bg from "../images/bg.jpg"
import thor from "../images/Thor.png"
import Button from "react-bootstrap/Button"


export default function TrendingSection() {
  return (
    <div className='trending-section '>
        <Row className='g-0'>
        <Col lg={5}  style={{backgroundImage:`url(${poster})`}} className="poster"></Col>
        <Col lg={7}  style={{backgroundImage:`url(${bg})`}} className="poster-info text-center py-5 px-5">
          <img src={thor} alt="thor" className='img-fluid' ></img>
          <h2 className='text-light my-4 bg-dark overview'>OverView</h2>
          <p className='text-light'>
Marvel Studios’ “Thor: Love and Thunder” finds the God of Thunder on a journey unlike anything he’s ever faced—one of self-discovery. But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who—to Thor’s surprise—inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor.
          </p>
          <div className='poster-cast'>
            <div>
              <h4>PRODUCERS</h4>
              <p>Kevin Feige and Brad Winderbaum</p>
            </div>
            <div>
              <h4>WRITERS</h4>
              <p>Taika Waititi and Jennifer Kaytin Robinson</p>
            </div>
            <div>
              <h4>DIRECTOR</h4>
              <p>Taika Waititi</p>
            </div>
            <div>
              <h4>CAST</h4>
              <p>Chris Hemsworth, Tessa Thompson, Taika Waititi, Natalie Portman and Christian Bale</p>
            </div>
            <div>
              <h4>RELEASE DATE</h4>
              <p>July 8, 2022</p>
            </div>
          </div>
          <Button variant="outline-primary" className=' fs-5 px-5 fw-bold free-button'>Watch For Free</Button>
          <span className='text-muted d-block'>Limited Time Offer Get it Now </span>
        </Col>
      </Row>

    </div>
  )
}
