import React, { useEffect, useRef, useState } from 'react';
import './captain.css';
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
        { year: "1Yrs", year_bet: "2025-25", name: "Shubhman Gill", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Shubhman_test.jpg" },
        { year: "3Yrs", year_bet: "2022-25", name: "Rohit Sharma", img: "https://documents.bcci.tv/resizedimageskirti/Rohit_Test_compress.jpg" },
        { year: "1Yrs", year_bet: "2022-22", name: "KL Rahul", img: "https://documents.bcci.tv/resizedimageskirti/KLRahul_Test_compress.jpg" },
        { year: "1Yrs", year_bet: "2022-22", name: "Jasprit Bumrah", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Jasprit_Test.jpg" },
        { year: "8Yrs", year_bet: "2014-22", name: "Virat Kohli", img: "https://documents.bcci.tv/resizedimageskirti/Virat_Test_compress.jpg" },
        { year: "4Yrs", year_bet: "2017-21", name: "Ajinkya Rahane ", img: "https://documents.bcci.tv/resizedimageskirti/Rahane_Test_compress.jpg" },
        { year: "6Yrs", year_bet: "2008-14", name: "MS Dhoni ", img: "https://documents.bcci.tv/resizedimageskirti/Dhoni_Test_compress.jpg" },
        { year: "7Yrs", year_bet: "2005-12", name: "Virendra Sehwag ", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "1Yrs", year_bet: "2007-08", name: "Anil Kumble ", img: "https://documents.bcci.tv/resizedimageskirti/AnilKumble_compress.jpg" },
        { year: "4Yrs", year_bet: "2003-07", name: "Rahul Dravid ", img: "https://documents.bcci.tv/resizedimageskirti/RahulDravid_compress.jpg" },
        { year: "5Yrs", year_bet: "2000-05", name: "Soruav Ganguly ", img: "https://documents.bcci.tv/resizedimageskirti/SouravGanguly_compress.jpg" },
        { year: "4Yrs", year_bet: "1996-00", name: "Sachin Tendulkar ", img: "https://documents.bcci.tv/resizedimageskirti/SachinTendulkar_compress.jpg" },
        { year: "9Yrs", year_bet: "1990-99", name: "Mohd. Azhruddin ", img: "https://www.bcci.tv/img/default-player-men-inner.svg" }
    ]
    const odiCaptains = [
        { year: "8 Yrs", year_bet: "2017-2025", name: "Rohit Sharma", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Rohit_ODI.jpg" },
        { year: "1 Yrs", year_bet: "2023-2023", name: "Hardik Pandya", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Hardik_ODI.jpg" },
        { year: "1 Yrs", year_bet: "2022-2022", name: "KL Rahul", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Rahul_ODI.jpg" },
        { year: "1 Yrs", year_bet: "2021-2022", name: "Shikhar Dhawan", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Shikar_ODI.JPG" },
        { year: "8 Yrs", year_bet: "2013-2021", name: "Virat Kohli", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Virat_ODI.jpg" },
        { year: "11 Yrs", year_bet: "2007-2018", name: "MS Dhoni", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Dhoni_ODI.JPG" },
        { year: "1 Yrs", year_bet: "2015-2015", name: "Ajinkya Rahane", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Rahane_ODI.jpg" },
        { year: "4 Yrs", year_bet: "2010-2014", name: "Suresh Raina", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/Raina_ODI.JPG" },
        { year: "9 Yrs", year_bet: "2003-2012", name: "Virendra Sehwag", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "1 Yrs", year_bet: "2010-2011", name: "Gautam Gambhir", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/GautamGambhir.JPG" },
        { year: "7 Yrs", year_bet: "2000-2007", name: "Rahul Deavid", img: "https://www.bcci.tv/img/default-player-men-inner.svg" },
        { year: "6 Yrs", year_bet: "1999-2005", name: "Sourav Ganguly", img: "https://www.bcci.tv/img/default-player-men-inner.svg" }
    ]
    const t20iCaptains = [
        { year: "1Yrs", year_bet: "2024-2025", name: "SuryaKumar Yadav", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/SuriyaKumar_T20.jpg" },
        { year: "7Yrs", year_bet: "2017-2024", name: "Rohit Sharma", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/RohitSharma.jpg" },
        { year: "1Yrs", year_bet: "2023-2023", name: "Jasprit Bumrah", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/JaspritBumrah.jpg" },
        { year: "1Yrs", year_bet: "2022-2023", name: "Hardik Pandya", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/HardikPandya.jpg" },
        { year: "1Yrs", year_bet: "2022-2022", name: "KL Rahul", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/KLRahul.jpg" },
        { year: "1Yrs", year_bet: "2022-2022", name: "Rishab Pant", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/RishabhPant.jpg" },
        { year: "1Yrs", year_bet: "2021-2021", name: "Shikhar Dhawan", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/ShikharDhawan.JPG" },
        { year: "4Yrs", year_bet: "2017-2021", name: "Virat Kohli", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/ViratKohli.jpg" },
        { year: "9Yrs", year_bet: "2007-2016", name: "MS Dhoni", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/MSDhoni.JPG" },
        { year: "1Yrs", year_bet: "2015-2015", name: "Ajinkya Rahane", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/AjinkyaRahane.jpg" },
        { year: "1Yrs", year_bet: "2010-2011", name: "Suresh Raina", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/SureshRaina.JPG" },
        { year: "1Yrs", year_bet: "2006-2006", name: "Virendra Sehwag", img: "https://documents.bcci.tv/bcci/images/Captains_Corner/VirenderSehwag.JPG" }
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