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
                    <img src="https://assets.bcci.tv/bcci/articles/1753066781_Website_Thumbnail.png" alt="Rescheduling of India’s white-ball Tour of Bangladesh" />
                    <div className="coverImg-caption position-absolute bottom-0">
                        <button className='newsbtn'>News</button>
                        <h2>Squad Update: Nitish Kumar Reddy ruled out of the series. Arshdeep Singh ruled out of fourth Test</h2>
                        <p className="d-flex align-items-center justify-content-between">21st July, 2025 <span> <IoShareSocialOutline className='shareIcon' /> </span> </p>
                    </div>
                </div>
                <div className="side-news-content">
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1750334914_WhatsApp_Image_2025-06-19_at_16.54.14.jpeg" alt="New trophy to honour James Anderson and Sachin Tendulkar in England–India Test Series" />
                        </div>
                        <div className="news-text">
                            <h6>19th June, 2025</h6>
                            <h3>New trophy to honour James Anderson and Sachin Tendulkar in England–India Test...</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1750174146_4.jpg" alt="Squad Update: Harshit Rana links up with Team India for first Test in Leeds" />
                        </div>
                        <div className="news-text">
                            <h6>17th June, 2025</h6>
                            <h3>Squad Update: Harshit Rana links up with Team India for first Test in Leeds</h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1747404106_BCCI_Thumbnail.png" alt="India U19 Squad for Tour of England: Injury and Replacement Updates" />
                        </div>
                        <div className="news-text">
                            <h6>16th June, 2025 </h6>
                            <h3>India U19 Squad for Tour of England: Injury and Replacement Updates </h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1747404106_BCCI_Thumbnail.png" alt="India A’s squad for tour of England announced" />
                        </div>
                        <div className="news-text">
                            <h6>18th July, 2025 </h6>
                            <h3>Board of Control for Cricket in India (BCCI) invites proposals for accreditation...</h3>
                        </div>
                        <p className="share-div mb-0"><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1751634757_BCCI___Thumbnail.png" alt="Rescheduling of India’s white-ball Tour of Bangladesh" />
                        </div>
                        <div className="news-text">
                            <h6>05th July, 2025 </h6>
                            <h3>Rescheduling of India’s white-ball Tour of Bangladesh</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1751634757_BCCI___Thumbnail.png" alt="BCCI invites proposals for provision of broadcast graphics services for BCCI’s domestic seasons" />
                        </div>
                        <div className="news-text">
                            <h6>03rd July, 2025</h6>
                            <h3>BCCI invites proposals for provision of broadcast graphics services for BCCI’s...</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                    <div className="side-news">
                        <div className="side-cover-img">
                            <img src="https://assets.bcci.tv/bcci/articles/1750749867_black-and-white.png " alt="BCCI mourns the passing of Dilip Doshi" />
                        </div>
                        <div className="news-text">
                            <h6>24th June, 2025</h6>
                            <h3>BCCI mourns the passing of Dilip Doshi</h3>
                        </div>
                        <p className="share-div mb-0 "><IoShareSocialOutline className="share-icon" /></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News;