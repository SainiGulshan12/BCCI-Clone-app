import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IoPlayCircleOutline, IoShareSocialOutline } from 'react-icons/io5';

function Video() {

    const latestVideos = [
        {
            img: "https://brightcove.iplt20.com/output/input/6376103370112-1753424240.jpg",
            date: "25th Jul, 2025",
            title: "Recap of Team India's memorable and historic tour o...",
            views: "5.7k",
            duration: "04:42 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376003671112-1753254312.jpg",
            date: "23rd Jul, 2025",
            title: "This series win will give us a lot of confidence: Harmanpreet...",
            views: "3.1k",
            duration: "04:07 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376001016112-1753254315.jpg",
            date: "23rd Jul, 2025",
            title: "Dressing Room BTS | Impact Fielder of the Series | England...",
            views: "4.4 k",
            duration: "04:04 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375996373112-1753242439.jpg",
            date: "23rd Jul, 2025",
            title: "Harleen Deol interviews Centurion Harmanpreet Kaur...",
            views: "5.4 k",
            duration: "03:33 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375948472112-1753165800.jpg",
            date: "22nd Jul, 2025",
            title: "Rising against the odds: The Kranti Gaud Story",
            views: "5.8 k ",
            duration: "05:19 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375923737112-1753116629.jpg",
            date: "21th Jul, 2025",
            title: "We are really excited about playing the decider: Sneh Rana",
            views: "2.5 k",
            duration: "5:10 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375869411112-1752994230.jpg",
            date: "20th Jul, 2025",
            title: "We couldn’t adapt to the conditions quickly: Smriti...",
            views: "2.2 k",
            duration: "03:17 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375831777112-1752902654.jpg",
            date: "19th Jul, 2025",
            title: "Lord's Calling: A special video call ft. Harmanpreet Kaur,...",
            views: "6.6 k",
            duration: "01:50 mins"
        }
    ];

    const highlights = [
        {
            img: "https://brightcove.iplt20.com/output/input/6368164345112-1738520087.jpg",
            date: "2nd Feb, 2025",
            title: "India vs South Africa - Final | ICC U19 Women’s T20 World...",
            views: "32.1 k",
            duration: "06:57 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368042101112-1738324333.jpg",
            date: "31st Jan, 2025",
            title: "India vs Malaysia | ICC U19 Women’s T20 World Cup 2025...",
            views: "8.3 k",
            duration: "07:04 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368043756112-1738324519.jpg",
            date: "31st Jan, 2025",
            title: "India vs Scotland - Super Six | ICC U19 Women’s T20 World ...",
            views: "7.8 k",
            duration: "06:53 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368042716112-1738324521.jpg",
            date: "31st Jan, 2025",
            title: "India vs England - Semi-Final | ICC U19 Women’s T20 World...",
            views: "8.2 k",
            duration: "06:52 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368043284112-1738324340.jpg",
            date: "31st Jan, 2025",
            title: "India vs Bangladesh | ICC Champions Trophy, 2025...",
            views: "8.8 k",
            duration: "07:12 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368043656112-1738323922.jpg",
            date: "31st Jan, 2025",
            title: "India vs West Indies | ICC U19 Women’s T20 World Cup 2025...",
            views: "5.9 k",
            duration: "07:00 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368043013112-1738324342.jpg",
            date: "31st Jan, 2025",
            title: "India vs Bangladesh - Super Six | ICC U19 Women’s T20 World...",
            views: "5.5 k",
            duration: "07:07 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6367446813112-1737472925.jpg",
            date: "21st Jan, 2025",
            title: "IND-W vs IRE-W 2025, 3rd ODI: Match Highlights",
            views: "6.4 k",
            duration: "15:58 mins"
        },
    ];

    const features = [
        {
            img: "https://brightcove.iplt20.com/output/input/6376103370112-1753424240.jpg",
            date: "25th Jul, 2025",
            title: "Recap of Team India's memorable and historic tour o...",
            views: "5.7k",
            duration: "04:42 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6376001016112-1753254315.jpg",
            date: "23rd Jul, 2025",
            title: "Dressing Room BTS | Impact Fielder of the Series | England...",
            views: "4.4 k",
            duration: "04:04 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375996373112-1753242439.jpg",
            date: "23rd Jul, 2025",
            title: "Harleen Deol interviews Centurion Harmanpreet Kaur...",
            views: "5.4 k",
            duration: "03:33 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375948472112-1753165800.jpg",
            date: "22nd Jul, 2025",
            title: "Rising against the odds: The Kranti Gaud Story",
            views: "5.8 k ",
            duration: "05:19 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375831777112-1752902654.jpg",
            date: "19th Jul, 2025",
            title: "Lord's Calling: A special video call ft. Harmanpreet Kaur,...",
            views: "1.6 k",
            duration: "01:50 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375737604112-1752734110.jpg",
            date: "17th Jul, 2025",
            title: "Team India's Scintillating Southampton Tales after ODI...",
            views: "2.1 k ",
            duration: "04:06 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375699511112-1752646229.jpg",
            date: "16th Jul, 2025",
            title: "The art of comebacks ft. Sneh Rana",
            views: "2.5 k",
            duration: "3:19 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375684176112-1752605647.jpg",
            date: "15th Jul, 2025",
            title: "Team India meets His Majesty",
            views: "27.7k",
            duration: "01:23 mins"
        }
    ];

    const pressConfrence = [
        {
            img: "https://brightcove.iplt20.com/output/input/6376003671112-1753254312.jpg",
            date: "23rd Jul, 2025",
            title: "This series win will give us a lot of confidence: Harmanpreet...",
            views: "3.1k",
            duration: "04:07 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375923737112-1753116629.jpg",
            date: "21th Jul, 2025",
            title: "We are really excited about playing the decider: Sneh Rana",
            views: "2.5 k",
            duration: "5:10 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375869411112-1752994230.jpg",
            date: "20th Jul, 2025",
            title: "We couldn’t adapt to the conditions quickly: Smriti...",
            views: "2.2 k",
            duration: "03:17 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375809028112-1752859120.jpg",
            date: "18th Jul, 2025",
            title: "We are quite confident of winning the series: Pratika...",
            views: "2.3 k",
            duration: "05:47 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375739615112-1752736645.jpg",
            date: "17th Jul, 2025",
            title: "We had clear plans in the chase: Deepti Sharma",
            views: "2.2 k",
            duration: "03:08 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375663354112-1752559510.jpg",
            date: "15th Jul, 2025",
            title: "We want to carry the momentum from the T20I series:...",
            views: "1.2 k",
            duration: "08:47 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375605468112-1752402311.jpg",
            date: "13th Jul, 2025",
            title: "Pleased with the result of the series: Amol Muzumdar",
            views: "1.3 k",
            duration: "04:15 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6375536325112-1752237316.jpg",
            date: "11th Jul, 2025",
            title: "Very happy with our fielding commitment and intensity...",
            views: "1.2 k",
            duration: "04:35 mins"
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