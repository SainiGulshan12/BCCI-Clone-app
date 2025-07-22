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
                  <img src="https://assets.bcci.tv/bcci/articles/1742560553_BCCI_Thumbnail.png" alt="Squads for Senior Women’s Multi-Day Challenger Trophy announced" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>News</button>
                  <h3>Squads for Senior Women’s Multi-Day Challenger Trophy announced</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>22nd Mar, 2025</p>
                    <IoShareSocialOutline className='share-icon' />
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="img-wrapper">
                  <img src="https://brightcove.iplt20.com/output/input/6366470985112-1737440894.jpg" alt="Senior Womens One Day Trophy 2024 SF1, Railways vs Bengal: Jhansi Lakshmi shines on the big stage with solid century" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>Senior Womens One Day Trophy 2024 SF1, Railways vs Bengal: Jhansi Lakshmi shines on...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>27th Dec, 2024</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>5.2k</p>
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
                  <img src="https://brightcove.iplt20.com/output/input/6366472056112-1735285157.jpg" alt="Senior Womens One Day Trophy 2024 SF1, Railways vs Bengal: Impressive Nuzhat Parween sparkles with solid ton" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>Senior Womens One Day Trophy 2024 SF1, Railways vs Bengal: Impressive Nuzhat...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>27th Dec, 2024</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>3.1k</p>
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
                  <img src="https://brightcove.iplt20.com/output/input/6366401116112-1735269894.jpg" alt="Senior Womens One Day Trophy 2024 QF1, Railways vs Maharashtra: Sixathon! Kiran Navgire's blistering knock of 64(25)" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>Senior Womens One Day Trophy 2024 QF1, Railways vs Maharashtra: Sixathon! Kiran...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>24th Mar, 2024</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>3.8k</p>
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
                  <img src="https://brightcove.iplt20.com/output/input/6366400361112-1735026254.jpg" alt="Senior Womens One Day Trophy 2024 QF1, Railways vs Maharashtra: Simran Bahadur's fantastic fifer in Rajkot" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>Senior Womens One Day Trophy 2024 QF1, Railways vs Maharashtra: Simran Bahadur's...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>24th Dec, 2024</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>3.4 k</p>
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
                  <img src="https://brightcove.iplt20.com/output/input/6366399916112-1735023108.jpg" alt="Senior Womens One Day Trophy 2024 QF1, Railways vs Maharashtra: Captain Anuja Patil's crucial 50(51)" />
                </div>
                <div className="carousel-caption d-md-block">
                  <button>Video</button>
                  <h3>Senior Womens One Day Trophy 2024 QF1, Railways vs Maharashtra: Captain Anuja Patil'...</h3>
                  <div className="d-flex align-items-center gap-4 pb-1">
                    <p>24th Dec, 2024</p>
                    <div className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <p className='p-0'>3.3k</p>
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