import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";


function Home() {
    return (
        <section className="home-section">
            <div className="quick-links d-flex align-items-center justify-content-start">
                <p>Quick Links</p>
                <ul className="quick-links-items d-flex p-0">
                    <li>Apex Council Members <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
                    <li>International Results <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
                    <li>Domestic Schedule <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
                    <li>Documents <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
                    <li>Tenders <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
                    <li>Jobs <FontAwesomeIcon icon={faAngleRight} className='icon' /></li>
                </ul>
            </div>
            <div className="hero-banner mb-3">
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
                                    <img src="https://brightcove.iplt20.com/output/input/6376602495112-1754450224.jpg" alt="A series to remember: Recap of India's Test Tour of England 2025" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>A series to remember: Recap of India's Test Tour of England 2025</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>6th Aug, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>30.4k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6376561385112-1754364310.jpg" alt="Epic win and Epic reactions from the series finale at the Oval" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Epic win and Epic reactions from the series finale at the Oval</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>5th Aug, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>70.3 kk</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6376559430112-1754363110.jpg" alt="Mohammed Siraj - You are a Hero!" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Mohammed Siraj - You are a Hero!</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>5th Aug, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>82.8k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6376500349112-1754188014.jpg" alt="When Team India were in awe of Akash Deep the batter" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>When Team India were in awe of Akash Deep the batter</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>3rd Aug, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>80.2k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6376476175112-1754105711.jpg" alt="Prasidh Krishna & Mohd. Siraj sum up India's spirited comeback at the Oval" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Prasidh Krishna & Mohd. Siraj sum up India's spirited comeback at the Oval</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>2nd Aug, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>72.8 k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6376354979112-1753931108.jpg" alt="Team First ft. Dhruv Jurel" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Team First ft. Dhruv Jurel</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>31st Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>73.2 k</p>
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