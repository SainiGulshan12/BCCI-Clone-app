import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IoShareSocialOutline } from 'react-icons/io5';



function News() {
    return (
        <section className='news-section' id="news">
            <div className="news-heading d-flex align-items-center justify-content-between">
                <h1>Latest News</h1>
                <div className="seeall-arrow d-flex align-items-center ">
                    <p>SEE ALL</p>
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                </div>
            </div>
            <div className="news-content d-flex">
                <div className="cover-img d-flex position-relative">
                    <img src="https://assets.bcci.tv/bcci/articles/1751634757_BCCI___Thumbnail.png" alt="Board of Control for Cricket in India (BCCI) invites proposals for accreditation services" />
                    <div className="coverImg-caption position-absolute bottom-0">
                        <button className='newsbtn'>News</button>
                        <h2>Board of Control for Cricket in India (BCCI) invites proposals for accreditation services</h2>
                        <p className="d-flex align-items-center justify-content-between">18th July, 2025 <span> <IoShareSocialOutline className='shareIcon' /> </span> </p>
                    </div>
                </div>
                <div className="side-news-content">
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1752765963_CWC-Warmup-Thumbnail.png" alt="Warm-up match schedule for ICC Women’s Cricket World Cup 2025 announced" />
                        </div>
                        <div className="news-text">
                            <h6>17th July, 2025</h6>
                            <h3>Warm-up match schedule for ICC Women’s Cricket World Cup 2025 announced</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1751634757_BCCI___Thumbnail.png" alt="Squad for India A Women’s Tour of Australia 2025 announced" />
                        </div>
                        <div className="news-text">
                            <h6>10 July, 2025</h6>
                            <h3>Squad for India A Women’s Tour of Australia 2025 announced</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1751634757_BCCI___Thumbnail.png" alt="BCCI invites proposals for provision of broadcast graphics services for BCCI’s domestic seasons" />
                        </div>
                        <div className="news-text">
                            <h6>3rd July, 2025</h6>
                            <h3>BCCI invites proposals for provision of broadcast graphics services for BCCI’s...</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1750062722_Fixtures_Announced_16x9.png" alt="ICC Women’s Cricket World Cup 2025 schedule announced" />
                        </div>
                        <div className="news-text">
                            <h6>16th June, 2025</h6>
                            <h3>ICC Women’s Cricket World Cup 2025 schedule announced</h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1747404106_BCCI_Thumbnail.png" alt="India A’s squad for tour of England announced" />
                        </div>
                        <div className="news-text">
                            <h6>14th June, 2025 </h6>
                            <h3>Update – 28th Apex Council Meeting</h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1749630095_PMK04519.jpg" alt="Radha Yadav named as replacement for injured Shuchi Upadhyay" />
                        </div>
                        <div className="news-text">
                            <h6>12th June, 2025 </h6>
                            <h3>Radha Yadav named as replacement for injured Shuchi Upadhyay</h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1749449963__AI_5796.JPG" alt="BCCI announces updated venues for Team India (Int'l home season) & South Africa..." />
                        </div>
                        <div className="news-text">
                            <h6>09th June, 2025 </h6>
                            <h3>BCCI announces updated venues for Team India (Int'l home season) & South Africa...</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default News;