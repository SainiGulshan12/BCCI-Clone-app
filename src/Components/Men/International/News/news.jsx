import React from 'react';
import './news.css';
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
                    <img src="https://assets.bcci.tv/bcci/articles/1754046995_BCCI_Thumbnail.png" alt="Board of Control for Cricket in India (BCCI) invites proposals for provision of verification services for player registration" />
                    <div className="coverImg-caption position-absolute bottom-0">
                        <button className='newsbtn'>News</button>
                        <h2>Board of Control for Cricket in India (BCCI) invites proposals for provision of verification services for player registration</h2>
                        <p className="d-flex align-items-center justify-content-between">01st Aug, 2025 <span> <IoShareSocialOutline className='shareIcon' /> </span> </p>
                    </div>
                </div>
                <div className="side-news-content">
                    <div className="side-news">
                        <div className="side-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1753960347_AD6_4238_QAVIrFz4_copy.jpg" alt="Jasprit Bumrah released from squad for fifth Test against England" />
                        </div>
                        <div className="news-text">
                            <h6>31st July, 2025 </h6>
                            <h3>Jasprit Bumrah released from squad for fifth Test against England</h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1753888608_BCCI___Thumbnail.png" alt="India U19 squad for tour of Australia announced" />
                        </div>
                        <div className="news-text">
                            <h6>30th July, 2025</h6>
                            <h3>India U19 squad for tour of Australia announced</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1753637546_Pant.jpg" alt="Rishabh Pant ruled out of fifth Test due to injury; N Jagadeesan named replacement" />
                        </div>
                        <div className="news-text">
                            <h6>27th July, 2025</h6>
                            <h3>Rishabh Pant ruled out of fifth Test due to injury; N Jagadeesan named replacement</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1753066781_Website_Thumbnail.png" alt="Squad Update: Nitish Kumar Reddy ruled out of the series. Arshdeep Singh ruled out of fourth Test" />
                        </div>
                        <div className="news-text">
                            <h6>21st July, 2025</h6>
                            <h3>Squad Update: Nitish Kumar Reddy ruled out of the series. Arshdeep Singh ruled...</h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1747404106_BCCI_Thumbnail.png" alt="India A’s squad for tour of England announced" />
                        </div>
                        <div className="news-text">
                            <h6>18th July, 2025 </h6>
                            <h3>Board of Control for Cricket in India (BCCI) invites proposals for accreditation...</h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1751634757_BCCI___Thumbnail.png" alt="Rescheduling of India’s white-ball Tour of Bangladesh" />
                        </div>
                        <div className="news-text">
                            <h6>05th July, 2025 </h6>
                            <h3>Rescheduling of India’s white-ball Tour of Bangladesh</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1751634757_BCCI___Thumbnail.png" alt="BCCI invites proposals for provision of broadcast graphics services for BCCI’s domestic seasons" />
                        </div>
                        <div className="news-text">
                            <h6>03rd July, 2025</h6>
                            <h3>BCCI invites proposals for provision of broadcast graphics services for BCCI’s...</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News;