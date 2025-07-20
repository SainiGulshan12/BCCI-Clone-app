import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


function Captain() {

    const testRef = useRef();
    const odiRef = useRef();
    const t20iRef = useRef();

    const [activeTestIndex, setActiveTestIndex] = useState(0);
    const [activeODIIndex, setActiveODIIndex] = useState(0);
    const [activeT20Index, setActiveT20Index] = useState(0);

    const handleScroll = (index, type, scroll) => {
        const container = type === "test" ? testRef.current :
            type === "odi" ? odiRef.current : t20iRef.current;

        const cards = container.querySelectorAll(".caps");

        cards.forEach((card, i) => {
            const content = card.querySelector(".content");
            if (i === index) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });

        if (scroll && cards[index]) {
            setTimeout(() => {
                const selectedCard = cards[index];
                const scrollLeft = selectedCard.offsetLeft - container.offsetLeft;
                container.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }, 25);
        }

        if (type === "test") setActiveTestIndex(index);
        else if (type === "odi") setActiveODIIndex(index);
        else setActiveT20Index(index);
    };

    useEffect(() => {
        handleScroll(0, "test", true);
        handleScroll(0, "odi", true);
        handleScroll(0, "t20i", true);
    }, []);

    const testCaptains = [
        { year: "3Yrs", year_bet: "2022-25", name: "Harmanpreet Kaur", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Harmanpreet_Test.jpg" },
        { year: "16Yrs", year_bet: "2005-21", name: "Mitali Raj", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/MithaliRaj.jpeg" },
        { year: "1Yrs", year_bet: "2003-03", name: "Mamtha Maben", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "1Yrs", year_bet: "2002-02", name: "Anjum Chopra", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/AnjumChopra.jpeg" },
        { year: "1Yrs", year_bet: "1999-99", name: "Chanderkanta Kaul", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "1Yrs", year_bet: "1995-95", name: "Pramila Bhatt", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "1Yrs", year_bet: "1995-95", name: "Purnima Rau", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "1Yrs", year_bet: "1991-91", name: "Sandhya Agarwal", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "5Yrs", year_bet: "1986-91", name: "Shubhangi Kulkarni", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "1Yrs", year_bet: "1985-86", name: "Diana Edulji", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/DianaEdulji.jpeg" },
        { year: "1Yrs", year_bet: "1985-85", name: "Nilima Jogalekar", img: "https://www.bcci.tv/img/default-player-men-inner.svg" }
    ]
    const odiCaptains = [
        { year: "12 Yrs", year_bet: "2013-2025", name: "Harmanpreet Kaur", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/HarmanpreetKaur.jpeg" },
        { year: "18 Yrs", year_bet: "2004-2022", name: "Mitali Raj", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/MithaliRaj.jpeg" },
        { year: "10 Yrs", year_bet: "2002-2012", name: "Anjum Chopra", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/AnjumChopra.jpeg" },
        { year: "3 Yrs", year_bet: "2008-2011", name: "Jhulan Goswami", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/JhulanGoswami.jpeg" },
        { year: "1 Yrs", year_bet: "2008-2008", name: "Rumeli Dhar", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/RumeliDhar.jpeg" },
        { year: "1 Yrs", year_bet: "2003-2008", name: "Mamtha Maben", img: "https://www.bcci.tv/img/default-player-women-inner.svg" },
        { year: "1 Yrs", year_bet: "2000-2000", name: "Anju Jain", img: "https://www.bcci.tv/img/default-player-women-inner.svg" },
        { year: "1 Yrs", year_bet: "1999-1999", name: "Chanderkanta Kaul", img: "https://www.bcci.tv/img/default-player-women-inner.svg" },
        { year: "2 Yrs", year_bet: "1995-1997", name: "Pramila Bhatt", img: "https://www.bcci.tv/img/default-player-women-inner.svg" },
        { year: "1 Yrs", year_bet: "1995-1995", name: "Purnima Rau", img: "https://www.bcci.tv/img/default-player-women-inner.svg" },
        { year: "15 Yrs", year_bet: "1978-1993", name: "Diana Edulji", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/DianaEdulji.jpeg" },
        { year: "1 Yrs", year_bet: "1986-1986", name: "Shubhangi Kulkarni", img: "https://www.bcci.tv/img/default-player-women-inner.svg" }
    ]
    const t20iCaptains = [
        { year: "6Yrs", year_bet: "2019-2025", name: "Smriti Mandhana", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/SmritiMandhana.jpeg" },
        { year: "11Yrs", year_bet: "2012-2023", name: "Harmanpreet Kaur", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Harmanpreet_T20.jpg" },
        { year: "10Yrs", year_bet: "2006-2016", name: "Mithali Raj", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Mithali_T20.jpg" },
        { year: "7Yrs", year_bet: "2008-2015", name: "Jhulan Goswami", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Jhulan_T20.jpg" },
        { year: "1Yrs", year_bet: "2012-2012", name: "Anjuma Chopra", img: "https://www.bcci.tv/img/default-player-women-inner.svg" },
        { year: "0Yrs", name: "Rumeli dhar", img: "https://www.bcci.tv/img/default-player-women-inner.svg" }
    ]
    return (
        <article className='captainCorner-section' >
            <Container fluid className='px-0'>
                <Row>
                    <Col sm={12} className='p-0'>
                        <div className="heading d-flex flex-wrap justify-content-between align-items-center mb-4">
                            <div className="head">
                                <h3>Captain's Corner</h3>
                                <p>Shaping Legends, Writing Indian Cricket History</p>
                            </div>
                            <div className="tabs pe-3">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="Test-tab" data-bs-toggle="tab" data-bs-target="#Test-tab-pane" type="button" role="tab" aria-controls="Test-tab-pane" aria-selected="true">Test</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="Odi-tab" data-bs-toggle="tab" data-bs-target="#Odi-tab-pane" type="button" role="tab" aria-controls="Odi-tab-pane" aria-selected="false">ODI</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="T20-tab" data-bs-toggle="tab" data-bs-target="#T20-tab-pane" type="button" role="tab" aria-controls="T20-tab-pane" aria-selected="false">T20I</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} className='p-0'>
                        <div className="captains-list">
                            <div className="tab-content position-relative" id="myTabContent">
                                <div className="tab-pane show active position-relative" id="Test-tab-pane" role="tabpanel" aria-labelledby="Test-tab" tabIndex={0}>
                                    <div className="captains test" ref={testRef}>
                                        {testCaptains.map((test, index) => (
                                            <div className="caps" key={index}>
                                                <div className="year">{test.year_bet}</div>
                                                <div className="content position-relative">
                                                    <img src={test.img} alt={test.name} />
                                                    <div className="content-caption w-100 px-3">
                                                        <span>{test.name}</span>
                                                        <span>{test.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <ul className="scroll-items d-flex justify-content-center align-items-end">
                                        {testCaptains.map((test, index) => (
                                            <li key={index} onClick={() => handleScroll(index, "test", true)} className={activeTestIndex === index ? 'active' : ''}>
                                                <p className='testyear' >{activeTestIndex === index ? test.year_bet : ''}</p>
                                                <button>{index + 1}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tab-pane position-relative" id="Odi-tab-pane" role="tabpanel" aria-labelledby="Odi-tab" tabIndex={0}>
                                    <div className="captains odi" ref={odiRef}>
                                        {odiCaptains.map((odi, index) => (
                                            <div className="caps" key={index}>
                                                <div className="year">{odi.year_bet}</div>
                                                <div className="content position-relative">
                                                    <img src={odi.img} alt={odi.name} />
                                                    <div className="content-caption w-100 px-3">
                                                        <span>{odi.name}</span>
                                                        <span>{odi.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <ul className="scroll-items d-flex justify-content-center align-items-end">
                                        {odiCaptains.map((odi, index) => (
                                            <li key={index} onClick={() => handleScroll(index, "odi", true)}
                                                className={activeODIIndex === index ? 'active' : ''}>
                                                <p>{activeODIIndex === index ? odi.year_bet : ''}</p>
                                                <button>{index + 1}</button>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <div className="tab-pane position-relative" id="T20-tab-pane" role="tabpanel" aria-labelledby="T20-tab" tabIndex={0}>
                                    <div className="captains t20 " ref={t20iRef}>
                                        {t20iCaptains.map((t20i, index) => (
                                            <div className="caps" key={index}>
                                                <div className="year">{t20i.year_bet}</div>
                                                <div className="content position-relative">
                                                    <img src={t20i.img} alt={t20i.name} />
                                                    <div className="content-caption w-100 px-3">
                                                        <span>{t20i.name}</span>
                                                        <span>{t20i.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <ul className="scroll-items d-flex justify-content-center align-items-end">
                                        {t20iCaptains.map((t20i, index) => (
                                            <li key={index} onClick={() => handleScroll(index, "t20i", true)} className={activeT20Index === index ? 'active' : ''} >
                                                <p>{activeT20Index === index ? t20i.year_bet : ''}</p>
                                                <button>{index + 1}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

export default Captain;