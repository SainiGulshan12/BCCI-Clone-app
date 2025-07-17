import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <section className='footer-section'>
            <div className="sponsors">
                <div className="row align-items-center">
                    <div className="cols col">
                        <p>TITLE SPONSOR</p>
                        <div className="image-wrapper">
                            <img src="https://documents.bcci.tv/web-images/spsr-idfc-first.png" alt="IDFC First Bank" width="120px" />
                        </div>
                    </div>
                    <div className="cols col">
                        <p>LEAD SPONSOR</p>
                        <div className="image-wrapper">
                            <img src="https://documents.bcci.tv/web-images/spsr-dream11.png" alt="Dream 11" width="130px" />
                        </div>
                    </div>
                    <div className="cols col">
                        <p>KIT SPONSOR</p>
                        <div className="image-wrapper">
                            <img src="https://documents.bcci.tv/web-images/spsr-addidas.png" alt="Addidas" width="75px" />
                        </div>
                    </div>
                    <div className="cols col">
                        <p>OFFICIAL PARTNERS</p>
                        <div className="official-partners d-flex align-items-center">
                            <img src="https://documents.bcci.tv/web-images/SBI.png" alt="SBI Life" width="120px" />
                            <img src="https://documents.bcci.tv/web-images/campa-white-bg.png" alt="Campa" width="80px" />
                            <img src="https://documents.bcci.tv/web-images/atomberg.png" alt="Atomberg" width="90px" />
                        </div>
                    </div>
                    <div className="cols col mb-0">
                        <p>OFFICIAL <br /> BROADCASTER</p>
                        <div className="image-wrapper">
                            <img src="https://documents.bcci.tv/web-images/spsr-star-sports.png" alt="Star Sports" width="75px" />
                        </div>
                    </div>
                    <div className="cols col mb-0">
                        <p>OFFICIAL DIGITAL <br /> STREAMING PARTNERS</p>
                        <div className="image-wrapper">
                            <img src="https://documents.bcci.tv/web-images/JioHotstar.webp" alt="Jio hotstar" width="105px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer">
                <div className="footer-bg">
                    <div className="top-footer col-sm-11 d-flex align-items-center justify-content-between">
                        <img src="https://documents.bcci.tv/web-images/bcci-logo-rounded.png" alt="" />
                        <div className="top-icons">
                            <FontAwesomeIcon icon={faXTwitter} className='brand-icons' />
                            <FontAwesomeIcon icon={faInstagram} className='brand-icons' />
                            <FontAwesomeIcon icon={faFacebookF} className='brand-icons me-4' />
                        </div>
                    </div>
                    <div className="middle-footer pe-3">
                        <div className="contact-div cols p-0">
                            <h3>Contact Us</h3>
                            <p>4th Floor, Cricket Centre <br />
                                Wankhede Stadium ‘D’ Road, <br />
                                Churchgate Mumbai - 400020, India. </p>
                            <br />
                            <a href="mailto:office@bcci.tv">Email: office@bcci.tv</a>
                            <a href="tel:+912267598800">T:+91 22 67598800</a>
                            <a href="tel:+912261580300">T:+91 22 61580300</a>
                        </div>
                        <div className="match-div cols p-0">
                            <h3>Matches</h3>
                            <p>Domestic</p>
                            <p>International</p>
                        </div>
                        <div className="match-div cols p-0">
                            <h3>Videos</h3>
                            <a href="#video"><p>Latest</p></a>
                            <a href="#video"><p>Highlights</p></a>
                            <a href="#video"><p>Features and Interviews</p></a>
                            <a href="#video"><p>Press Conferences</p></a>
                        </div>
                        <div className="match-div cols p-0">
                            <h3>News</h3>
                            <a href="#news"><p>Latest</p></a>
                            <a href="#news"><p>Press Releases</p></a>
                            <a href="#news"><p>Features and Interviews</p></a>
                            <a href="#news"><p>BCCI News</p></a>
                        </div>
                        <div className="match-div cols p-0">
                            <h3>More</h3>
                            <p>IPL</p>
                            <p>WPL</p>
                            <p>Venues</p>
                            <p>Galleries</p>
                            <p>Jobs</p>
                            <p>Tender</p>
                            <p>Playing Conditions</p>
                        </div>
                        <div className="match-div cols p-0">
                            <h3>About</h3>
                            <p>History</p>
                            <p>Anti Corruption</p>
                            <p>Anti Racism</p>
                            <p>Anti Doping</p>
                            <p>TUE Application Form</p>
                            <p>Annual Reports</p>
                            <p>MCC Laws of Cricket</p>
                        </div>
                        <div className="match-div cols p-0">
                            <h3>Players</h3>
                            <p>Men</p>
                            <p>Women</p>
                        </div>
                        <div className="match-div cols p-0">
                            <h3>BCCI</h3>
                            <p>Copyrights</p>
                            <p>Terms and Conditions</p>
                            <p>Privacy and Policy</p>
                        </div>
                    </div>
                    <div className="end-footer">
                        <div className="container d-flex flex-wrap justify-content-center justify-content-md-between align-items-center">
                            <p>Terms & Conditions &nbsp; Privacy Policy</p>
                            <p>Copyrights BCCI 2025, All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;