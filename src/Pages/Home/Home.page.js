import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import c4 from "../../Images/c4img.png";
import c5 from "../../Images/c5img.png";
import c7 from "../../Images/c7img.png";
import { FaFacebook, FaYelp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container-fluid " id="home-container">
      <div className="row" id="home-row-1">
        <div className="col-lg-7" id="home-img-col">
          <Carousel indicators={false} controls={false} interval={3000}>
            <Carousel.Item>
              <img alt="img1" className="c-item" src={c4} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="img2" className="c-item" src={c5} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="img3" className="c-item" src={c7} />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-5">
          <div id="home-content-flex-row">
            <div id="home-content-flex-col">
              <div>
                <h1 className="text-center">
                  " Restoration is our operation. "
                </h1>
              </div>
              <div>
                <h3 className="text-center">
                  High quality concrete service in your local area!
                </h3>
              </div>
              <div className="row mt-5">
                <div className="col-md-6 text-center home-link-div">
                  <a href="tel:2542202454">(254) 415 - 5018</a>
                  <p>
                    <a
                      href="mailto:durantexterior@outlook.com"
                      rel="noreferrer"
                      target="_blanck"
                    >
                      durantexterior@outlook.com
                    </a>
                    <br />
                    Servicing Killeen and surrounding areas
                  </p>
                </div>
                <div className="col-md-6 text-center home-link-div">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/DurantExterior/"
                  >
                    Like us on Facebook
                    <FaFacebook />
                  </a>
                  <p>
                    Review us on Yelp
                    <FaYelp color={"red"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
