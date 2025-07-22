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
          <img src="https://assets.bcci.tv/bcci/articles/1749911175_BCCI_Thumbnail.png" alt="Update – 28th Apex Council Meeting" />
          <div className="coverImg-caption position-absolute bottom-0">
            <button className='newsbtn'>News</button>
            <h2>Board of Control for Cricket in India (BCCI) invites proposals for accreditation services</h2>
            <p className="d-flex align-items-center justify-content-between">18th July, 2025 <span> <IoShareSocialOutline className='shareIcon' /> </span> </p>
          </div>
        </div>
        <div className="side-news-content">
          <div className="side-news">
            <div className="side-cover-img">
              <img src="https://assets.bcci.tv/bcci/articles/1749911175_BCCI_Thumbnail.png" alt="A special century: Anil Dandekar set to umpire 100th First Class match as BCCI Umpire" />
            </div>
            <div className="news-text">
              <h6>03rd July, 2025 </h6>
              <h3>BCCI invites proposals for provision of broadcast graphics services for BCCI’s...</h3>
              <p className="mb-0 text-end"><IoShareSocialOutline className="share-icon" /></p>
            </div>
          </div>
          <div className="side-news">
            <div className="side-cover-img">
              <img src="https://assets.bcci.tv/bcci/articles/1737120007_BCCI%20_%20Thumbnail.png" alt="BCCI invites proposals for Stadium Signage Production and Management Services for International Events, Domestic Events, IPL and WPL" />
            </div>
            <div className="news-text">
              <h6>14th June, 2025 </h6>
              <h3>Update – 28th Apex Council Meeting</h3>
              <p className="mb-0 text-end"><IoShareSocialOutline className="share-icon" /></p>
            </div>
          </div>
          <div className="side-news">
            <div className="side-cover-img">
              <img src="https://assets.bcci.tv/bcci/articles/1749449963__AI_5796.JPG" alt="TATA IPL 2025 suspended for one week" />
            </div>
            <div className="news-text">
              <h6>09th June, 2025</h6>
              <h3>BCCI announces updated venues for Team India (Int'l home season) & South Africa...</h3>
              <p className="mb-0 text-end"><IoShareSocialOutline className="share-icon" /></p>
            </div>
          </div>
          <div className="side-news">
            <div className="side-cover-img">
              <img src="https://assets.bcci.tv/bcci/articles/1749030081_BCCI_Thumbnail.png" alt="Board of Control for Cricket in India (BCCI) invites proposals for provision of videography and editing services" />
            </div>
            <div className="news-text">
              <h6>04th June, 2025</h6>
              <h3>Board of Control for Cricket in India (BCCI) invites proposals for provision of service...</h3>
              <p className="mb-0 text-end"><IoShareSocialOutline className="share-icon" /></p>
            </div>
          </div>
          <div className="side-news">
            <div className="side-cover-img">
              <img src="https://assets.bcci.tv/bcci/articles/1749030081_BCCI_Thumbnail.png" alt="BCCI announces fixtures for Australia Women's, Australia Men's A and South Africa Men's A team tours of India" />
            </div>
            <div className="news-text">
              <h6>29th May, 2025</h6>
              <h3>BCCI announces fixtures for Australia Women's, Australia Men's A and South...</h3>
              <p className="mb-0 text-end"><IoShareSocialOutline className="share-icon" /></p>
            </div>
          </div>
          <div className="side-news">
            <div className="side-cover-img">
              <img src="https://assets.bcci.tv/bcci/articles/1749030081_BCCI_Thumbnail.png" alt="Junior Cricket Committee picks Rest of India squad" />
            </div>
            <div className="news-text">
              <h6>07th March, 2025</h6>
              <h3>Junior Cricket Committee picks Rest of <br /> India squad</h3>
              <p className="mb-0 text-end"><IoShareSocialOutline className="share-icon" /></p>
            </div>
          </div>
          <div className="side-news">
            <div className="side-cover-img">
              <img src="https://assets.bcci.tv/bcci/articles/1738052966_Umpire%20Ulhas%20Gandhe%20website%20Thumbnail%20high%20res.png" alt="Umpire Ulhas Gandhe's storied career hits 100th First-class match milestone " />
            </div>
            <div className="news-text">
              <h6>28th January, 2025 </h6>
              <h3>Umpire Ulhas Gandhe's storied career hits 100th First-class match milestone </h3>
              <p className="mb-0 text-end"><IoShareSocialOutline className="share-icon" /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News;