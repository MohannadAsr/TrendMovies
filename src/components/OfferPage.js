import React from "react";
import Container from "react-bootstrap/esm/Container";
import offer from "../images/offer.jpg";
import CountDown from "./CountDown";
import Button from "react-bootstrap/esm/Button";
import AOS from "aos";
import "aos/dist/aos.css";

// CountDown Components from my Design Take Parameter [target] to take the target date and the calculate the gap

export default function OfferPage() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="offer-page py-5 text-center"
      style={{ backgroundImage: `url(${offer})` }}
    >
      <Container className="offer-page-container">
        <div
          className="new-movie py-5"
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2 className="text-light fs-3 fw-bold"> New Movie Coming Soon </h2>
          <CountDown target="may 30 , 2023 00:00:00" />
          <i className="text-dark w-bolder">
            Get Up to 50% Discount by preOrder this Movie in our Site
          </i>
          <Button variant="outline-primary" className="mt-3 px-5 fw-bolder ">
            Get a Discount
          </Button>
        </div>
      </Container>
    </div>
  );
}
