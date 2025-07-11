import React from 'react';
import './download.css';
import { Col, Container, Row } from 'react-bootstrap';
import playstore from '../../../Assets/playstore.webp';
import appstore from '../../../Assets/appstore.png';
import phone from '../../../Assets/phone.avif';

function Download() {
    return (
        <section className='download-section'>
            <div className="official-bcci-app">
                <Container >
                    <Row>
                        <Col md={6} className='mt-sm-5 mt-0'>
                            <div className="download-info align-content-center">
                                <h1>Get the Official BCCI App</h1>
                                <p>Get the latest scores on the go. Find the latest content, including match highlights, press conferences and recap all at your fingertips by downloading the official BCCI app.
                                </p>
                                <div className="download-btn d-flex align-items-center mt-2">
                                    <a href="https://play.google.com/store/apps/details?id=tv.bcci&hl=en-IN" target='blank'>
                                        <img src={playstore} alt="download-bcciApp-play-store" width={"140px"} height={"70px"} />
                                    </a>
                                    <a href="https://apps.apple.com/in/app/bcci/id1374037778" target='blank'>
                                        <img src={appstore} alt="download-bcciApp-app-store" width={"160px"} height={"80px"} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center">
                            <div className="phone pt-sm-3 pt-0">
                                <img src={phone} alt="mobile-demo-image" height="422px" width="380px"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </section>
    )
}

export default Download;