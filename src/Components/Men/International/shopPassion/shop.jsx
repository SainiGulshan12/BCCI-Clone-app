import React from 'react';
import './shop.css';
import { Container, Row, Col } from 'react-bootstrap';

function Shop() {
    return (
        <section className='shopPassion-section padding-tb'>
            <Container fluid className='p-0'>
                <Row>
                    <Col md={6} className='p-0'>
                        <div className="shop-img">
                            <img src="https://documents.bcci.tv/web-images/shop-img.png" height={"485px"} width={"666px"} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="passion-img">
                            <img src="https://www.bcci.tv/img/shop-left-img.png" width={"554px"} height={"238px"} alt="" />
                        </div>
                        <div className="passion-description">
                            <p>Show your true colors and support Indian cricket team with our vibrant merchandise</p>
                            <a href="https://bit.ly/3WFynhP"><button className='buybtn'>Buy now</button></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Shop