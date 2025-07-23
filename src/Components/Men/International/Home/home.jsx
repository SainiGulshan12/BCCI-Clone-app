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
                                    <img src="https://brightcove.iplt20.com/output/input/6375908073112-1753096653.jpg" alt="Captains Unite(d) ft. Shubman Gill and Bruno Fernandes" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Captains Unite(d) ft. Shubman Gill and Bruno Fernandes</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>21th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>17.4k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375903032112-1753085115.jpg" alt="Manchester United x Team India" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Manchester United x Team India</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>21th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>20.3 kk</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375778447112-1752806110.jpg" alt="The MVP ft. Ravindra Jadeja" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>The MVP ft. Ravindra Jadeja</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>18th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>56.8k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375735272112-1752734112.jpg" alt="India U19's Day out at Lord's" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>India U19's Day out at Lord's</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>17th Jun, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>43.2k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375684176112-1752605647.jpg" alt="Team India meets His Majesty" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Team India meets His Majesty</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>15th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>55.8 k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375623384112-1752462312.jpg" alt="BoWled (th)'em ft. Washington Sundar" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>BoWled (th)'em ft. Washington Sundar</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>14th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>56.2 k</p>
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