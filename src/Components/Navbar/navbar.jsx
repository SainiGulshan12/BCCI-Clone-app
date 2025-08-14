import React, { useEffect, useState } from 'react';
import './navbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { GrCertificate } from "react-icons/gr";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const [toggleSearch, setToggleSearch] = useState(false);
    const [showSelectLanguage, setShowSelectLanguage] = useState(false);
    const [activeAnchorLink, setActiveAnchorLink] = useState(null);
    const navigate = useNavigate();

    const [activeTab, setactiveTab] = useState("/international/men");
    const [isDomestic, setIsDomestic] = useState(false);

    const handleENClick = () => setShowSelectLanguage(true);
    const handleCloseLanguage = () => setShowSelectLanguage(false);

    const handletoggle = () => {
        setIsDomestic(prev => {
            const newValue = !prev;
            const route = newValue ? "/domestic/men" : "/international/men";
            setactiveTab(route);
            navigate(route);
            return newValue;
        });
    };

    const handleMenclick = () => {
        const route = isDomestic ? "/domestic/men" : "/international/men";
        setactiveTab(route);
        navigate(route);
    };


    const handleWomenclick = () => {
        const route = isDomestic ? "/domestic/women" : "/international/women";
        setactiveTab(route);
        navigate(route);
    };

    useEffect(() => {
        navigate("/");
        setactiveTab("/international/men");
        setIsDomestic(false);
    }, []);


    return (
        <>
            {/* desktop Menu Modal Start */}
            <div className="modal menumodal fade" id="desktopMenuModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog menu-modal-dialog">
                    <div className="modal-content menu-modal-content">
                        <div className="modal-header menu-modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body menu-modal-body p-0">
                            <ul className="list-unstyled ">
                                <li>About</li>
                                <li>Apex Council Members</li>
                                <li>Documents</li>
                                <li>Tenders</li>
                                <li>Jobs</li>
                                <li>Integrity Initiatives</li>
                                <li>Photo Gallery</li>
                                <li>Venues</li>
                                <li>Mobile Products</li>
                            </ul>
                        </div>
                        <div className="modal-footer menu-modal-footer row">
                            <div className="col border-0">
                                <FontAwesomeIcon icon={faCopyright} className='footer-icons' />
                                <p>Copyrights</p>
                                <span>All right are reserved,BCCI 2025</span>
                            </div>
                            <div className="col">
                                <GrCertificate className='footer-icons' />
                                <p>Terms & Conditions</p>
                                <span>A terms, rules and guidelines for using your website or mobile app</span>
                            </div>
                            <div className="col">
                                <RiShieldKeyholeLine className='footer-icons' />
                                <p>Privacy & Policy</p>
                                <span>We collect and why, how we use it, and how to review and update it.</span>
                            </div>
                            <div className="col followon">
                                <p>Follow Us on</p>
                                <div className="brand-icons mt-1">
                                    <FontAwesomeIcon icon={faXTwitter} className='icon ps-2' />
                                    <FontAwesomeIcon icon={faInstagram} className='icon' />
                                    <FontAwesomeIcon icon={faFacebookF} className='icon border-0' />
                                </div>
                                <span>Copyrights BCCI 2025, All Rights Reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* desktop Menu Modal End */}

            {/* mobile offcanvas menu modal start */}

            <div className="offcanvas offcanvas-start mobileMenu" tabIndex={-1} id="mobileMenuModal" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <RxCross2 type='button' className='close-btn' data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body overflow-hidden p-0">
                    <ul className="list-unstyled ">
                        <li>
                            <span>About</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                        <li>
                            <span>Apex Council Members</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                        <li>
                            <span>Documents</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                        <li>
                            <span>Tenders</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                        <li>
                            <span>Jobs</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                        <li>
                            <span>Integrity Initiatives</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                        <li>
                            <span>Photo Gallery</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                        <li>
                            <span>Venues</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                        <li>
                            <span>Mobile Products</span>
                            <FaArrowRightLong className='right_arrow' />
                        </li>
                    </ul>
                </div>
                <div className="menu-modal-footer">
                    <span>Copyrights BCCI 2025, All Rights Reserved.</span>
                </div>
            </div>
            {/* mobile offcanvas menu modal end */}

            <header>
                {/* desktop menu first  navbar */}
                <nav className="navbar navbar-expand-lg first-navbar py-0">
                    <div className="container-fluid p-0">
                        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" data-bs-toggle="offcanvas" data-bs-target="#mobileMenuModal">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-flex align-items-center left-nav">
                            <a href="https://www.bcci.tv/">
                                <img src="https://documents.bcci.tv/web-images/bcci-logo-rounded.png" alt="bcci" />
                            </a>
                            <ul className="navbar-nav flex-row">
                                <li className="nav-item">
                                    <button className={`nav-link px-0 ${!isDomestic ? "active" : ""}`} onClick={() => handletoggle('international')}> International
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className={`nav-link px-0 ${isDomestic ? "active" : ""}`} onClick={() => handletoggle('domestic')}> Domestic
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center right-nav">
                            <div className="right-nav-item" onClick={() => setToggleSearch(toggle => !toggle)}>
                                <img src="https://documents.bcci.tv/web-images/search-icon.png" height="24px" width="24px" alt="" />
                            </div>
                            <div className="right-nav-item t20-league desk-nav-item">
                                <img src="https://documents.bcci.tv/web-images/ipl-logo.webp" height="30px" width="50px" alt="" />
                            </div>
                            <div className="right-nav-item t20-league desk-nav-item">
                                <img src="https://documents.bcci.tv/web-images/wpl-logo.webp" height="28" width="50px" alt="" />
                            </div>
                            <div className="right-nav-item desk-nav-item" data-bs-toggle="modal" data-bs-target="#desktopMenuModal">
                                <img src="https://documents.bcci.tv/web-images/hamburger-menu.png" height="11px" width="24px" alt="" />
                            </div>
                            <div className="right-nav-item desk-nav-item" style={{ padding: showSelectLanguage ? "0 0 0 5px" : "20px" }}>
                                {showSelectLanguage ? (
                                    <Dropdown className="select-lang dropdown d-flex align-items-center gap-2">
                                        <Dropdown.Toggle variant='white' className="d-inline-flex gap-1 align-items-center text-white" id="dropdown-basic" >
                                            Select Language
                                            <FontAwesomeIcon icon={faAngleDown} className="angle-icon" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="dropdown-menu ">
                                            <Dropdown.Item className="dropdown-item active" href="#">Select Language</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item" href="#">Hindi</Dropdown.Item>
                                        </Dropdown.Menu>
                                        <RxCross2 className="angle-icon cross cursor-pointer" onClick={handleCloseLanguage} />
                                    </Dropdown>
                                ) : (
                                    <a className="nav-link d-flex align-items-center gap-2" role="button" onClick={handleENClick}>
                                        <span>EN</span>
                                        <FontAwesomeIcon icon={faAngleDown} className="angle-icon" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* mobile menu cricket type*/}
                <div className="mob-nav-cricket-type" style={{ marginTop: toggleSearch ? "44px" : "0px", backgroundColor: !isDomestic ? "#c65142" : "#2798e0" }}>
                    <div className="cric-types">
                        <span className={`intern ${!isDomestic ? "active" : ""}`} >International</span>
                        <div className="toggle">
                            <input type="checkbox" id="inter-domec-toggle" checked={isDomestic} onChange={handletoggle} />
                            <label htmlFor="inter-domec-toggle"></label>
                        </div>
                        <span className={`domec ${isDomestic ? "active" : ""}`}>Domestic</span>
                    </div>
                </div>

                {/* mobile menu match type  */}
                <div className="mob-match-type">
                    <ul>
                        <li className={activeTab === "/international/men" || activeTab === "/domestic/men" ? "active" : ""} onClick={handleMenclick}>men</li>
                        <li className={activeTab === "/international/women" || activeTab === "/domestic/women" ? "active" : ""} onClick={handleWomenclick}>women</li>
                    </ul>
                </div>

                {/* Search toggle Start */}
                {toggleSearch && (
                    <div className="container-fluid searchbar active p-0 py-1">
                        <div className="row">
                            <div className="col-md-7 mx-auto d-flex">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <Dropdown className="mx-2">
                                    <Dropdown.Toggle className="dropdownbtn d-flex align-items-center">
                                        All
                                        <FontAwesomeIcon icon={faAngleDown} className=" dropdown-toggle" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item className="dropdown-item active" href="#latest">All</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" href="#video" aria-current="true">Videos</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" href="#news">News</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <button className="btn searchbtn" type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                )}
                {/* Search toggle End */}

                {/* desktop menu second navbar */}
                <div className="bg-white second-navbar d-flex flex-nowrap" style={{ marginTop: toggleSearch ? "44px" : "0px" }}>
                    <div className="match-type ">
                        <ul className="nav flex-nowrap">
                            <li>
                                <button className={`men nav-link ${activeTab === "/international/men" || activeTab === "/domestic/men" ? "active" : ""}`} onClick={handleMenclick}>
                                    MEN
                                </button>
                            </li>
                            <li>
                                <button className={`women nav-link ${activeTab === "/international/women" || activeTab === "/domestic/women" ? "active" : ""}`} onClick={handleWomenclick}>
                                    WOMEN
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="other-cric-info d-flex align-items-center">
                        <a href="#news">
                            <p className={activeAnchorLink === 'news' ? 'active' : ''} onClick={() => setActiveAnchorLink('news')}>News</p>
                        </a>
                        <a href="#video">
                            <p className={activeAnchorLink === 'video' ? 'active' : ''} onClick={() => setActiveAnchorLink('video')}>Videos</p>
                        </a>
                        <a href="#fixtures">
                            <p className={activeAnchorLink === 'fixtures' ? 'active' : ''} onClick={() => setActiveAnchorLink('fixtures')}>Fixtures and Results</p></a>
                        <a href="#">
                            <p className={activeAnchorLink === '#series&tournament' ? 'active' : ''} onClick={() => setActiveAnchorLink('#series&tournament')}>Series and Tournaments </p>
                        </a>
                        <a href="#">
                            <p className={activeAnchorLink === '#archive' ? 'active' : ''} onClick={() => setActiveAnchorLink('#archive')}>Archive</p>
                        </a>
                        {!isDomestic && (<>
                            <a href="#">
                                <p className={activeAnchorLink === '#player' ? 'active' : ''} onClick={() => setActiveAnchorLink('#player')} >Players</p>
                            </a>
                            <a href="#ranks">
                                <p className={activeAnchorLink === 'ranks' ? 'active' : ''} onClick={() => setActiveAnchorLink('ranks')}>Rankings</p>
                            </a>
                            <a href="#">
                                <p className={activeAnchorLink === '#stats' ? 'active' : ''} onClick={() => setActiveAnchorLink('#stats')}>Stats</p>
                            </a>
                        </>)}
                    </div>
                </div>
            </header >
        </>
    )
}

export default Navbar;