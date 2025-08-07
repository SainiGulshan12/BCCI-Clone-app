import React from 'react';
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
                                    <img src="https://brightcove.iplt20.com/output/input/6376103370112-1753424240.jpg" alt="Recap of Team India's memorable and historic tour of England" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Recap of Team India's memorable and historic tour of England</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>25th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>5.5 k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375996373112-1753242439.jpg" alt="Harleen Deol interviews Centurion Harmanpreet Kaur & Pace Sensation Kranti Gaud" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Harleen Deol interviews Centurion Harmanpreet Kaur & Pace Sensation Kranti Gaud</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>23rd Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>5.3 k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375948472112-1753165800.jpg" alt="Rising against the odds: The Kranti Gaud Story" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Rising against the odds: The Kranti Gaud Story</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>13th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>2.2</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375831777112-1752902654.jpg" alt="Lord's Calling: A special video call ft. Harmanpreet Kaur, Jemimah Rodrigues & Jhulan Goswami" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Lord's Calling: A special video call ft. Harmanpreet Kaur, Jemimah Rodrigues &...</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>19th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>5.7 k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375737604112-1752734110.jpg" alt="Team India's Scintillating Southampton Tales after ODI win" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>Team India's Scintillating Southampton Tales after ODI win</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>17th Jun, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>4.8k</p>
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
                                    <img src="https://brightcove.iplt20.com/output/input/6375699511112-1752646229.jpg" alt="The art of comebacks ft. Sneh Rana" />
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <button>Video</button>
                                    <h3>The art of comebacks ft. Sneh Rana</h3>
                                    <div className="d-flex align-items-center gap-4 pb-1">
                                        <p>16th Jul, 2025</p>
                                        <div className="d-flex align-items-center gap-2">
                                            <FontAwesomeIcon icon={faEye} />
                                            <p className='p-0'>5.7k</p>
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