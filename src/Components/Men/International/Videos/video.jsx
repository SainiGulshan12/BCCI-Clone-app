import React, { useRef, useState } from 'react';
import './video.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IoPlayCircleOutline, IoShareSocialOutline } from 'react-icons/io5';

function Video() {

    const latestVideos = [
        {
            img: "https://brightcove.iplt20.com/output/input/6376602495112-1754450224.jpg",
            date: "6th Aug, 2025",
            title: "A series to remember: Recap of India's Test Tour of England...",
            views: "30.5 k",
            duration: "02:07 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376568349112-1754377518.jpg",
            date: "5th Aug, 2025",
            title: "Our performance today showed why we are a gun team:...",
            views: "39.6k",
            duration: "18:17 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376566694112-1754376908.jpg",
            date: "5th Aug, 2025",
            title: "Raw Emotions after India's special win at the Oval",
            views: "51.7k",
            duration: "01:50 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376560023112-1754389230.jpg",
            date: "5th Aug, 2025",
            title: "Dressing Room BTS | Impact Player of the Series | England...",
            views: "95.2 k",
            duration: "01:37 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376561385112-1754364310.jpg",
            date: "5th Aug, 2025",
            title: "Epic win and Epic reactions from the series finale at the...",
            views: "69.8k",
            duration: "02:50 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376559430112-1754363110.jpg",
            date: "5th Aug, 2025",
            title: "Mohammed Siraj - You are a Hero!",
            views: "81.5k",
            duration: "02:25 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376528070112-1754289311.jpg",
            date: "4th Aug, 2025",
            title: "Mohd. Siraj is a natural leader: Morne Morkel",
            views: "41.8k",
            duration: "05:43 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376504740112-1754199311.jpg",
            date: "3rd Aug, 2025",
            title: "Was enjoying batting on a spicy wicket: Yashasvi Jaiswal",
            views: "33.6 k ",
            duration: "06:25 mins"
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
            img: "https://brightcove.iplt20.com/output/input/6376602495112-1754450224.jpg",
            date: "6th Aug, 2025",
            title: "A series to remember: Recap of India's Test Tour of England...",
            views: "30.5 k",
            duration: "02:07 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376566694112-1754376908.jpg",
            date: "5th Aug, 2025",
            title: "Raw Emotions after India's special win at the Oval",
            views: "51.7k",
            duration: "01:50 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376560023112-1754389230.jpg",
            date: "5th Aug, 2025",
            title: "Dressing Room BTS | Impact Player of the Series | England...",
            views: "95.2 k",
            duration: "01:37 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376561385112-1754364310.jpg",
            date: "5th Aug, 2025",
            title: "Epic win and Epic reactions from the series finale at the...",
            views: "69.8k",
            duration: "02:50 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376559430112-1754363110.jpg",
            date: "5th Aug, 2025",
            title: "Mohammed Siraj - You are a Hero!",
            views: "81.5k",
            duration: "02:25 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376500349112-1754188014.jpg",
            date: "3rd Aug, 2025",
            title: "When Team India were in awe of Akash Deep the batter",
            views: "79.7k",
            duration: "02:47 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376476175112-1754105711.jpg",
            date: "2nd Aug, 2025",
            title: "Prasidh Krishna & Mohd. Siraj sum up India's spirited...",
            views: "73.8k",
            duration: "02:11 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376354979112-1753931108.jpg",
            date: "31st Jul, 2025",
            title: "Team First ft. Dhruv Jurel",
            views: "73.2 k",
            duration: "02:43 mins"
        }
    ];

    const pressConfrence = [
        {
            img: "https://brightcove.iplt20.com/output/input/6376568349112-1754377518.jpg",
            date: "5th Aug, 2025",
            title: "Our performance today showed why we are a gun team:...",
            views: "39.6k",
            duration: "18:17 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376528070112-1754289311.jpg",
            date: "4th Aug, 2025",
            title: "Mohd. Siraj is a natural leader: Morne Morkel",
            views: "41.8k",
            duration: "05:43 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376504740112-1754199311.jpg",
            date: "3rd Aug, 2025",
            title: "Was enjoying batting on a spicy wicket: Yashasvi Jaiswal",
            views: "33.6 k ",
            duration: "06:25 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376477417112-1754112311.jpg",
            date: "2nd Aug, 2025",
            title: "It's not about the performance but the process for me: Prasid...",
            views: "26.6k",
            duration: "4:10 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376424907112-1754029524.jpg",
            date: "1st Aug, 2025",
            title: "Karun Nair is a quality player who can absorb pressure: Rya...",
            views: "20.6 k",
            duration: "06:15 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376332174112-1753884312.jpg",
            date: "30th Jul, 2025",
            title: "Levelling the series would be a great achievement: Shubman",
            views: "19.4k",
            duration: "07:47 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376294169112-1753806912.jpg",
            date: "29th Jul, 2025",
            title: "It's been an absolutely brilliant Test series so far: Sitanshu...",
            views: "15.5k",
            duration: "14:35 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376226677112-1753686630.jpg",
            date: "28th Jul, 2025",
            title: "We’ve characters in dressing room wanting to fight for...",
            views: "25.9k",
            duration: "07:13 mins"
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