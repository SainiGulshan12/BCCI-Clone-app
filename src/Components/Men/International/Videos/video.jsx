import React, { useRef, useState } from 'react';
import './video.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IoPlayCircleOutline, IoShareSocialOutline } from 'react-icons/io5';

function Video() {

    const latestVideos = [
        {
            img: "https://brightcove.iplt20.com/output/input/6375975278112-1753201454.jpg",
            date: "22nd Jul, 2025",
            title: "Anshul is very close to making his debut – Shubman Gill",
            views: "21.5 k",
            duration: "06:41 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375923349112-1753116913.jpg",
            date: "21st Jul, 2025",
            title: "Jasprit Bumrah will play the Manchester Test: Mohd. Siraj",
            views: "23.1k",
            duration: "08:07 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375908073112-1753096653.jpg",
            date: "21st Jul, 2025",
            title: "Captains Unite(d) ft. Shubman Gill and Bruno Fernandes",
            views: "28.5k",
            duration: "01:53 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375903032112-1753085115.jpg",
            date: "21st Jun, 2025",
            title: "Manchester United x Team India",
            views: "35.8k",
            duration: "02:30 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375778447112-1752806110.jpg",
            date: "18th Jul, 2025",
            title: "The MVP ft. Ravindra Jadeja",
            views: "33.2 k",
            duration: "02:29 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375762393112-1752771029.jpg",
            date: "17th Jul, 2025",
            title: "Managing the team environment is very important: Ryan ten...",
            views: "5.5k",
            duration: "06:20 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375735272112-1752734112.jpg",
            date: "17th Jul, 2025",
            title: "India U19's Day out at Lord's",
            views: "23.2k",
            duration: "02:31 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375684176112-1752605647.jpg",
            date: "15th Jul, 2025",
            title: "Team India meets His Majesty",
            views: "29.5 k ",
            duration: "01:23 mins"
        }
    ];

    const highlights = [
        {
            img: "https://brightcove.iplt20.com/output/input/6369841078112-1741613828.jpg",
            date: "10th Mar, 2025",
            title: "India vs New Zealand - Final | ICC Champions Trophy, 2025...",
            views: "220.4 k",
            duration: "07:09 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369637678112-1741192652.jpg",
            date: "5th May, 2025",
            title: "India vs Australia | ICC Champions Trophy, 2025...",
            views: "275 k",
            duration: "06:59 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369562263112-1741078303.jpg",
            date: "3rd May, 2025",
            title: "India vs New Zealand | ICC Champions Trophy 2025...",
            views: "292.3 k",
            duration: "06:58 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369258056112-1740416896.jpg",
            date: "24th Feb, 2025",
            title: "India vs Pakistan | ICC Champions Trophy, 2025...",
            views: "402.2 k",
            duration: "06:49 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369137748112-1740403371.jpg",
            date: "21st Feb, 2025",
            title: "India vs Bangladesh | ICC Champions Trophy, 2025...",
            views: "357.5 k",
            duration: "07:05 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368691840112-1739372655.jpg",
            date: "12th Feb, 2025",
            title: "IND vs ENG 2025, 3rd ODI: Match Highlights",
            views: "1 m",
            duration: "13:41 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368546001112-1739121021.jpg",
            date: "25th May, 2025",
            title: "IND vs ENG 2025, 2nd ODI: Match Highlights",
            views: "942.7 k",
            duration: "13:15 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368359149112-1739024640.jpg",
            date: "25th May, 2025",
            title: "IND vs ENG 2025, 1st ODI: Match Highlights",
            views: "1 m",
            duration: "13:01 mins"
        },
    ];

    const features = [
        {
            img: "https://brightcove.iplt20.com/output/input/6375908073112-1753096653.jpg",
            date: "21st Jul, 2025",
            title: "Captains Unite(d) ft. Shubman Gill and Bruno Fernandes",
            views: "28.5k",
            duration: "01:53 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375903032112-1753085115.jpg",
            date: "21st Jun, 2025",
            title: "Manchester United x Team India",
            views: "35.8k",
            duration: "02:30 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375778447112-1752806110.jpg",
            date: "18th Jul, 2025",
            title: "The MVP ft. Ravindra Jadeja",
            views: "56.2 k",
            duration: "02:29 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375735272112-1752734112.jpg",
            date: "17th Jul, 2025",
            title: "India U19's Day out at Lord's",
            views: "46.2k",
            duration: "02:31 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375684176112-1752605647.jpg",
            date: "15th Jul, 2025",
            title: "Team India meets His Majesty",
            views: "51.5 k ",
            duration: "01:23 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375623384112-1752462312.jpg",
            date: "14th Jul, 2025",
            title: "BoWled (th)'em ft. Washington Sundar",
            views: "51.5k",
            duration: "01:47 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375598233112-1752375910.jpg",
            date: "13th Jul, 2025",
            title: "Lord's Glory ft. KL Rahul",
            views: "48.8k",
            duration: "01:24 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375570285112-1752289508.jpg",
            date: "12th Jul, 2025",
            title: "Jasprit Bumrah, a buzz at the Lord's",
            views: "52.7k",
            duration: "02:03 mins"
        }
    ];

    const pressConfrence = [
        {
            img: "https://brightcove.iplt20.com/output/input/6375975278112-1753201454.jpg",
            date: "22nd Jul, 2025",
            title: "Anshul is very close to making his debut – Shubman Gill",
            views: "21.5 k",
            duration: "06:41 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375923349112-1753116913.jpg",
            date: "21st Jul, 2025",
            title: "Jasprit Bumrah will play the Manchester Test: Mohd. Siraj",
            views: "23.1k",
            duration: "08:07 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375762393112-1752771029.jpg",
            date: "17th Jul, 2025",
            title: "Managing the team environment is very important: Ryan ten...",
            views: "5.5k",
            duration: "06:20 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375666451112-1752565829.jpg",
            date: "15th Jul, 2025",
            title: "I am proud of the effort we put in the Test: Shubman Gill",
            views: "7.9k",
            duration: "09:02 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375627292112-1752479238.jpg",
            date: "14th Jul, 2025",
            title: "I had solid plans coming into this Test match: Washington...",
            views: "9.3k",
            duration: "05:53 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375606428112-1752400469.jpg",
            date: "13th Jul, 2025",
            title: "My mindset, hunger, and passion has always been ther...",
            views: "8.2k",
            duration: "09:51 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375576677112-1752310034.jpg",
            date: "12th Jul, 2025",
            title: "The memories you make on field are more important: Jasprit...",
            views: "8.3k",
            duration: "06:26 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375525234112-1752218710.jpg",
            date: "11th Jul, 2025",
            title: "Happy with the way I bowled today: Nitish Kumar Reddy",
            views: "8.8k",
            duration: "005:03 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375450611112-1752074673.jpg",
            date: "9th Jul, 2025",
            title: "I like to bat with a very clear mindset: Rishabh Pant",
            views: "9.6k",
            duration: "05:28 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375379063112-1751992510.jpg",
            date: "8th Jul, 2025",
            title: "Rishabh Pant approaches his batting with lots of planning;...",
            views: "10.8k",
            duration: "08:55 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375310229112-1751872640.jpg",
            date: "7th Jul, 2025",
            title: "It will be a series to remember if we keep grinding like this:...",
            views: "11.6k",
            duration: "10:46 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375288509112-1751782830.jpg",
            date: "6th Jul, 2025",
            title: "Akash produced a dream delivery to dismiss Root: Mor...",
            views: "17.4 k",
            duration: "06:36 mins"
        }
    ];

    const [activeTab, setactiveTab] = useState('latest');

    const latestref = useRef(null);
    const highlightref = useRef(null);
    const featureref = useRef(null);
    const pressconfref = useRef(null);

    const scrollLeft = () => {
        if (activeTab === 'latest' && latestref.current) {
            latestref.current.scrollLeft -= 1275;
        }
        else if (activeTab === 'highlight' && highlightref.current) {
            highlightref.current.scrollLeft -= 1275;
        }
        else if (activeTab === 'features' && featureref.current) {
            featureref.current.scrollLeft -= 1275;
        }
        else if (activeTab === 'press' && pressconfref.current) {
            pressconfref.current.scrollLeft -= 1275;
        }
    }
    const scrollRight = () => {
        if (activeTab === 'latest' && latestref.current) {
            latestref.current.scrollLeft += 1275;
        }
        else if (activeTab === 'highlight' && highlightref.current) {
            highlightref.current.scrollLeft += 1275;
        }
        else if (activeTab === 'features' && featureref.current) {
            featureref.current.scrollLeft += 1275;
        }
        else if (activeTab === 'press' && pressconfref.current) {
            pressconfref.current.scrollLeft += 1275;
        }
    }


    return (
        <section className="video-section mt-3" id="video">
            <div className="container-fluid ps-0">
                <div className="video-heading position-relative w-100 d-flex align-items-center justify-content-between">
                    <div className="video-head d-flex align-items-center justify-content-between px-3">
                        <h1>Videos</h1>
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" onClick={() => setactiveTab('latest')}>Latest</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Highlights-tab" data-bs-toggle="pill" data-bs-target="#pills-Highlights" type="button" onClick={() => setactiveTab('highlight')}>Highlights</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Features -tab" data-bs-toggle="pill" data-bs-target="#pills-Features" type="button" onClick={() => setactiveTab('features')}>Features & Interviews</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Press-Confrences-tab" data-bs-toggle="pill" data-bs-target="#pills-Press-Confrences" type="button" onClick={() => setactiveTab('press')}>Press Confrences</button>
                            </li>
                        </ul>
                    </div>
                    <div className="seeall-arrow d-flex align-items-center justify-content-end gap-4">
                        <FontAwesomeIcon icon={faAngleLeft} className='angle-icon' onClick={scrollLeft} />
                        <FontAwesomeIcon icon={faAngleRight} className='angle-icon' onClick={scrollRight} />
                        <div className="seeall d-flex align-items-center gap-2">
                            <p>SEE ALL</p>
                            <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent" >
                    <div className="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab" tabIndex={0}>
                        <div className="card-group video-card" ref={latestref} >
                            {latestVideos.map((video, index) => (
                                <div className="card" key={index}>
                                    <img src={video.img} className='card-img-top' alt={video.title} />
                                    <IoPlayCircleOutline className='play-btn' strokeWidth='1px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{video.date}</h5>
                                        <p className="card-text">{video.title}</p>
                                        <div className="bottom-part d-flex align-items-center justify-content-between">
                                            <div className="visible d-flex align-items-center gap-4">
                                                <p><FontAwesomeIcon icon={faEye} className='eye-icon pe-2' /><span>{video.views}</span></p>
                                                <p>{video.duration}</p>
                                            </div>
                                            <button><IoShareSocialOutline className="share-icon" /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-Highlights" role="tabpanel" aria-labelledby="pills-Highlights-tab" tabIndex={0} >
                        <div className="card-group video-card" ref={highlightref}>
                            {highlights.map((video, index) => (
                                <div className="card" key={index}>
                                    <img src={video.img} className='card-img-top' alt={video.title} />
                                    <IoPlayCircleOutline className='play-btn' strokeWidth='1px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{video.date}</h5>
                                        <p className="card-text">{video.title}</p>
                                        <div className="bottom-part d-flex align-items-center justify-content-between">
                                            <div className="visible d-flex align-items-center gap-4">
                                                <p><FontAwesomeIcon icon={faEye} className='eye-icon pe-2' /><span>{video.views}</span></p>
                                                <p>{video.duration}</p>
                                            </div>
                                            <button><IoShareSocialOutline className="share-icon" /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-Features" role="tabpanel" aria-labelledby="pills-Features-tab" tabIndex={0}>
                        <div className="card-group video-card" ref={featureref}>
                            {features.map((video, index) => (
                                <div className="card" key={index}>
                                    <img src={video.img} className='card-img-top' alt={video.title} />
                                    <IoPlayCircleOutline className='play-btn' strokeWidth='1px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{video.date}</h5>
                                        <p className="card-text">{video.title}</p>
                                        <div className="bottom-part d-flex align-items-center justify-content-between">
                                            <div className="visible d-flex align-items-center gap-4">
                                                <p><FontAwesomeIcon icon={faEye} className='eye-icon pe-2' /><span>{video.views}</span></p>
                                                <p>{video.duration}</p>
                                            </div>
                                            <button><IoShareSocialOutline className="share-icon" /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Press-Confrences" role="tabpanel" aria-labelledby="pills-Press-Confrences-tab" tabIndex={0}>
                        <div className="card-group video-card" ref={pressconfref}>
                            {pressConfrence.map((video, index) => (
                                <div className="card" key={index}>
                                    <img src={video.img} className='card-img-top' alt={video.title} />
                                    <IoPlayCircleOutline className='play-btn' strokeWidth='1px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{video.date}</h5>
                                        <p className="card-text">{video.title}</p>
                                        <div className="bottom-part d-flex align-items-center justify-content-between">
                                            <div className="visible d-flex align-items-center gap-4">
                                                <p><FontAwesomeIcon icon={faEye} className='eye-icon pe-2' /><span>{video.views}</span></p>
                                                <p>{video.duration}</p>
                                            </div>
                                            <button><IoShareSocialOutline className="share-icon" /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video;