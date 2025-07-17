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
                                    <img src="https://brightcove.iplt20.com/output/input/6375475922112-1752132259.jpg" alt="Team India is ready for Lord's" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Team India is ready for Lord's</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>10th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>9.4k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375306164112-1751869076.jpg" alt="Special win and special reactions from Edgbaston" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Special win and special reactions from Edgbaston</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>7th Jun, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>49.8k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375305873112-1751858245.jpg" alt="Pitch side with the Captain Shubman Gill" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Pitch side with the Captain Shubman Gill</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>7th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>42.5 k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375266792112-1751680109.jpg" alt="Birmingham Besties, ft. Mohd. Siraj & Akash Deep" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Birmingham Besties, ft. Mohd. Siraj & Akash Deep</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>5th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>67.2 k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375232423112-1751591110.jpg" alt="Full Access ft. Captain Shubman Gill" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Full Access ft. Captain Shubman Gill</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>4th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>69.3k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375245783112-1751628910.jpg" alt="Future watching the present: India U19's Day Out at Edgbaston" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Future watching the present: India U19's Day Out at Edgbaston</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>4th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>56.8 kk</p>
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