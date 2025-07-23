import React, { useEffect } from 'react';
import './rank.css';
import { Carousel } from 'bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Rank() {
    useEffect(() => {
        // ODI Carousel
        const odiCarousel = document.querySelector('#carouselExampleAutoplayingODI');
        if (odiCarousel) {
            new Carousel(odiCarousel, {
                ride: 'carousel'
            });
        }

        // T20I Carousel
        const t20Carousel = document.querySelector('#carouselExampleAutoplayingT20I');
        if (t20Carousel) {
            new Carousel(t20Carousel, {
                ride: 'carousel'
            });
        }
    }, []);

    return (
        <section className='team-player-ranking-section' id="ranks">
            <Container fluid>
                <Row>
                    <Col sm={3} xs={12} className="d-flex align-items-center justify-content-md-center ">
                        <div className="rank-head">
                            <h1>The Game in Numbers</h1>
                            <p>A look at the Current cricket rankings</p>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="ranks d-flex position-relative">
                            <div className="blue-ranks">
                                <p>Team Ranking</p>
                                <div className="team-ranking_odi d-flex bor-bottom">
                                    <span>#03<sub>ODI</sub></span>
                                </div>
                                <div className="team-ranking_t20 ">
                                    <span>#03<sub>T20</sub></span>
                                    <div className="bcci-logo">
                                        <img src="https://documents.bcci.tv/web-images/bcci-logo.webp" alt="bcci-logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="seeall d-flex align-items-center gap-2">
                                <p>SEE ALL</p>
                                <FontAwesomeIcon icon={faArrowRight} className='arr-icon' />
                            </div>
                            <div className="grey-ranks position-relative d-flex">
                                {/* ODI Carousel */}
                                <div id="carouselExampleAutoplayingODI" className="carousel slide rankscarousel odi" data-bs-ride="carousel" data-bs-interval="3500">
                                    <div className="carousel-indicators rankscarousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleAutoplayingODI" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleAutoplayingODI" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleAutoplayingODI" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner rankscarousel-inner h-100">
                                        <div className="carousel-item active h-100">
                                            <img src="https://documents.bcci.tv/resizedimageskirti/3192_compress.png" alt="Deepti Sharma" />
                                            <div className="carousel-caption d-md-block">
                                                <h5>Deepti Sharma</h5>
                                                <span>All Rounder</span>
                                                <p>Rank : #04</p>
                                            </div>
                                            <button className='odi'>ODI</button>
                                            <h1>04</h1>
                                        </div>
                                        <div className="carousel-item h-100">
                                            <img src="https://documents.bcci.tv/resizedimageskirti/4101_compress.png" alt="Smriti Mandhana" />
                                            <div className="carousel-caption d-md-block">
                                                <h5>Smriti Mandhana</h5>
                                                <span>Batter</span>
                                                <p>Rank : #01</p>
                                            </div>
                                            <button className='odi'>ODI</button>
                                            <h1>01</h1>
                                        </div>
                                        <div className="carousel-item h-100">
                                            <img src="https://documents.bcci.tv/resizedimageskirti/3192_compress.png" alt="Deepti Sharma" />
                                            <div className="carousel-caption d-md-block">
                                                <h5>Deepti Sharma</h5>
                                                <span>Bowler</span>
                                                <p>Rank : #04</p>
                                            </div>
                                            <button className='odi'>ODI</button>
                                            <h1>04</h1>
                                        </div>
                                    </div>
                                </div>

                                {/* T20 Carousel */}
                                <div id="carouselExampleAutoplayingT20I" className="carousel slide rankscarousel t20i" data-bs-ride="carousel" data-bs-interval="3500">
                                    <div className="carousel-inner rankscarousel-inner h-100">
                                        <div className="carousel-item active h-100">
                                            <img src="https://documents.bcci.tv/resizedimageskirti/3192_compress.png" alt="Deepti Sharma" />
                                            <div className="carousel-caption d-md-block">
                                                <h5>Deepti Sharma</h5>
                                                <span>All Rounder</span>
                                                <p>Rank : #03</p>
                                            </div>
                                            <button className='odi'>ODI</button>
                                            <h1>03</h1>
                                        </div>
                                        <div className="carousel-item h-100">
                                            <img src="https://documents.bcci.tv/resizedimageskirti/4101_compress.png" alt="Smriti Mandhana" />
                                            <div className="carousel-caption d-md-block">
                                                <h5>Smriti Mandhana</h5>
                                                <span>Batter</span>
                                                <p>Rank : #03</p>
                                            </div>
                                            <button className='t20i'>T20I</button>
                                            <h1>03</h1>
                                        </div>
                                        <div className="carousel-item h-100">
                                            <img src="https://documents.bcci.tv/resizedimageskirti/3192_compress.png" alt="Deepti Sharma" />
                                            <div className="carousel-caption d-md-block">
                                                <h5>Deepti Sharma</h5>
                                                <span>Bowler</span>
                                                <p>Rank : #03</p>
                                            </div>
                                            <button className='odi'>ODI</button>
                                            <h1>03</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Rank;