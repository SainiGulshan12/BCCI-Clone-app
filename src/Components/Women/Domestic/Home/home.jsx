import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

function Home() {
  return (
    <section className="home-section">
      <div className="quick-links d-flex align-items-center">
        <p>Quick Links</p>
        <ul className="quick-links-items d-flex ps-0">
          <li>Apex Council Members <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
          <li>International Results <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
          <li>Domestic Schedule <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
          <li>Documents <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
          <li>Tenders <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
          <li>Jobs <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
        </ul>
      </div>
      <div className="hero-banner">
        <div className="overlay">
          <div id="carouselExampleAutoplaying" className="carousel slide homecarousel" data-bs-ride="carousel" data-bs-interval="4000">
            <div className="carousel-indicators homecarousel-indicators z-3">
              <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner homecarousel-inner">
              <div className="carousel-item active">
                <div className="img-wrapper">
                  <img src="https://brightcove.iplt20.com/output/input/6369873755112-1741686240.jpg" alt="img" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>COL C K NAYUDU TROPHY 2024-25, Punjab vs Rest of India, Final: Harnoor Singh sizzles wit...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>11th Jun, 2025</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>29.8 k</p>
                    </div>
                    <IoShareSocialOutline className='share-icon' />
                  </div>
                </div>
                <div className="play">
                  <FaPlay />
                </div>
              </div>
              <div className="carousel-item ">
                <div className="img-wrapper">
                  <img src="https://brightcove.iplt20.com/output/input/6369836788112-1741606733.jpg" alt="img" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>COL C K NAYUDU TROPHY 2024-25, Punjab vs Rest of India, Final: Garv Kumar sparkles with...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>10th Mar, 2025</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>17.8k</p>
                    </div>
                    <IoShareSocialOutline className='share-icon' />
                  </div>
                </div>
                <div className="play">
                  <FaPlay />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-wrapper">
                  <img src="https://brightcove.iplt20.com/output/input/6369807937112-1741520256.jpg" alt="img" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>COL C K NAYUDU TROPHY 2024-25, Punjab vs Rest of India, Final: Himanshu Singh stars for...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>9th Mar, 2025</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>15.8k</p>
                    </div>
                    <IoShareSocialOutline className='share-icon' />
                  </div>
                </div>
                <div className="play">
                  <FaPlay />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-wrapper">
                  <img src="https://brightcove.iplt20.com/output/input/6369475958112-1740890241.jpg" alt="img" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>Ranji Trophy 2025 Final, Vidarbha vs Kerala: <br />Crisis man Karun Nair delivers on the big stag...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>1st Mar, 2025</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>128k</p>
                    </div>
                    <IoShareSocialOutline className='share-icon' />
                  </div>
                </div>
                <div className="play">
                  <FaPlay />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-wrapper">
                  <img src="https://brightcove.iplt20.com/output/input/6369474585112-1740820920.jpg" alt="img" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>Ranji Trophy 2025 Final, Vidarbha vs Kerala: Danish Malewar's solid knock of 73(162)...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>1st Mar, 2025</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>12.6 k</p>
                    </div>
                    <IoShareSocialOutline className='share-icon' />
                  </div>
                </div>
                <div className="play">
                  <FaPlay />
                </div>
              </div>
              <div className="carousel-item">
                <div className="img-wrapper">
                  <img src="https://brightcove.iplt20.com/output/input/6369519660112-1740908268.jpg" alt="img" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>Ranji Trophy 2025 Final, Vidarbha vs Kerala: <br />Aditya Sarwate leads Kerala's fight with 4/96</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>2nd Mar, 2025</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>20.7k</p>
                    </div>
                    <IoShareSocialOutline className='share-icon' />
                  </div>
                </div>
                <div className="play">
                  <FaPlay />
                </div>
              </div>
            </div>
            <button className="carousel-control-prev z-3" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next z-3" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;