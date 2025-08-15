import React, { useRef, useState } from 'react';
import './video.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IoPlayCircleOutline, IoShareSocialOutline } from 'react-icons/io5';

function Video() {
    const latestVideos = [
        {
            img: "https://brightcove.iplt20.com/output/input/6368145282112-1738474174.jpg",
            date: "2nd Feb, 2025",
            title: "BCCI Awards: Legendary Sachin Tendulkar's speech",
            views: "30.8 k",
            duration: "18:17 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368116274112-1738425152.jpg",
            date: "1st Feb, 2025",
            title: "Life beyond the boundary ft. Jemimah Rodrigues, Hardik...",
            views: "71.5 k",
            duration: "21:43 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368114508112-1738424324.jpg",
            date: "1st Feb, 2025",
            title: "BCCI Awards: Col. C.K. Nayudu Lifetime Achievement Award...",
            views: "62.2k",
            duration: "18:29 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368115099112-1738423791.jpg",
            date: "1st Feb, 2025",
            title: "Reliving historic T20 World Cup win ft. captain Rohit Sharma",
            views: "57.4k",
            duration: "06:31 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368115204112-1738423794.jpg",
            date: "1st Feb, 2025",
            title: "BCCI Awards: BCCI Special Award 2023-24",
            views: "56.3k",
            duration: "06:33 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368114026112-1738423361.jpg",
            date: "1st Feb, 2025",
            title: "BCCI Awards: Polly Umrigar Award Best International...",
            views: "60.1k",
            duration: "01:05 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368115464112-1738423363.jpg",
            date: "1st Feb, 2025",
            title: "BCCI Awards: Best International Cricketer (Women) 2023-24",
            views: "51.3k",
            duration: "00:54 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6368114200112-1738422930.jpg",
            date: "1st Feb, 2025",
            title: "BCCI Awards: Best International Debut (Men) 2023-24",
            views: "18.9k",
            duration: "00.43 mins"
        }
    ];

    const highlights = [
        {
            img: "https://brightcove.iplt20.com/output/input/6367429294112-1737442609.jpg",
            date: "21st Jan, 2025",
            title: "Senior Womens One Day Trophy 2024 Final, Bengal vs Madhya...",
            views: "989",
            duration: "10:34 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6366473344112-1737448420.jpg",
            date: "27th Dec, 2024",
            title: "Senior Womens One Day Trophy 2024 SF1,Railways vs Bengal...",
            views: "995",
            duration: "12:01 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6366401210112-1735269850.jpg",
            date: "24th Dec, 2024",
            title: "Senior Womens One Day Trophy 2024 QF1,Railways vs...",
            views: "1.2 k",
            duration: "12:50 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6366364504112-1735053063.jpg",
            date: "23rd Dec, 2024",
            title: "Senior Womens One Day Trophy 2024 QF3,Madhya Pradesh vs...",
            views: "1.6 k",
            duration: "15:45 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6366306656112-1734876951.jpg",
            date: "21st Dec, 2024",
            title: " Senior Womens One Day Trophy 2024 PQF1,Karnataka vs...",
            views: "1.8 k",
            duration: "13:33 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6364594488112-1731733027.jpg",
            date: "12th Nov, 2024",
            title: "Senior Womens's T20 Trophy 2024 Final: Mumbai vs Bengal...",
            views: "1.9 k",
            duration: "11:30 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6364506369112-1731642074.jpg",
            date: "10th Nov, 2024",
            title: "Senior Womens's T20 Trophy 2024 SF2:Himachal Pradesh v... ",
            views: "1.2 k",
            duration: "10:20 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6364500246112-1731229194.jpg",
            date: "10th Nov, 2024",
            title: "Senior Womens's T20 Trophy 2024 SF1:Mumbai vs ... ",
            views: "1.1 k",
            duration: "09:58 mins"
        }
    ];

    const features = [
        {
            img: "https://brightcove.iplt20.com/output/input/6364639460112-1731487075.jpg",
            date: "13th Nov, 2024",
            title: "Decoding Mumbai's Trophy winning Mantra with pacers...",
            views: "6.5 k",
            duration: "03:42 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6364605411112-1731469107.jpg",
            date: "12th Nov, 2024",
            title: "Mumbai Magic: Captain Humairaa Kaazi sums up...",
            views: "4.5k",
            duration: "02:09 mins"
        },
        {
            img: "https://documents.bcci.tv/resizedimageskirti/3588749423001/6eb62bd7-fa27-4967-99d9-b2391c3b4507/d486606c-d802-4483-bd4f-e8b8513e1d70/1280x720/match/image_compress.jpeg",
            date: "3rd Nov, 2023",
            title: "Senior Women's T20 Trophy 2023 PQF 2: Mumbai vs Andhr...",
            views: "265",
            duration: "02:59 mins"
        },
        {
            img: "https://documents.bcci.tv/resizedimageskirti/3588749423001/9d03095c-bd49-4c74-ae7a-a4ece6ba3b80/07fae8b8-8abe-41db-852b-7ecf21dfe64c/1280x720/match/image_compress.jpeg",
            date: "5th Nov, 2022",
            title: "Senior Women's T20 Trophy 2022 Final : Railways vs Beng...",
            views: "358",
            duration: "02:00 mins"
        },
        {
            img: "https://cf-images.eu-west-1.prod.boltdns.net/v1/jit/3588749423001/f8e13901-d573-48c9-98ee-fc6b5d2ded2b/main/1280x720/30s773ms/match/image.jpg",
            date: "5th Nov, 2022",
            title: "Senior Women's T20 Trophy 2022 Final : Railways vs Beng...",
            views: "176",
            duration: "01:02 mins"
        },
        {
            img: "https://documents.bcci.tv/resizedimageskirti/3588749423001/b548c92b-09ae-4d37-9d6a-407f72dc1933/38ee61cb-fe79-49ac-88c5-71f5a9a2b83f/1280x720/match/image_compress.jpeg",
            date: "5th Nov, 2022",
            title: "Senior Women's T20 Trophy 2022 Final: Railways vs Benga...",
            views: "758",
            duration: "06:27 mins"
        },
        {
            img: "https://documents.bcci.tv/resizedimageskirti/3588749423001/87ea34d3-d1eb-4790-ab96-f3b33408fbb7/f52487b8-2ad7-4d27-949a-c4f0e49828bd/1280x720/match/image_compress.jpeg",
            date: "5th Nov, 2022",
            title: "Senior Women's T20 Trophy 2022 Final : Tanuja Kanwer's...",
            views: "311",
            duration: "02:08 mins"
        },
        {
            img: "https://documents.bcci.tv/resizedimageskirti/3588749423001/7ee5abc9-1fd5-4312-8018-2cd4e42d7f90/3c8cc6e1-2e67-4b75-aab4-4f9ce9f26138/1280x720/match/image_compress.jpeg",
            date: "5th Nov, 2022",
            title: "Senior Women's T20 Trophy 2022 Final : Railways' K Anjali...",
            views: "368",
            duration: "02:07 mins"
        }
    ];


    const [activeTab, setactiveTab] = useState('latest');

    const latestref = useRef(null);
    const highlightref = useRef(null);
    const featureref = useRef(null);

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
    }

    return (
        <section className="video-section mt-3" id="video">
            <div className="container-fluid ps-0">
                <div className="video-heading domestic-video-heading d-flex align-items-center justify-content-between">
                    <div className="video-head d-flex align-items-center justify-content-between px-3">
                        <h1>Videos</h1>
                        <ul className="nav nav-pills dom-vid-head-ul" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" onClick={() => setactiveTab('latest')}>Latest</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Highlights-tab" data-bs-toggle="pill" data-bs-target="#pills-Highlights" type="button" onClick={() => setactiveTab('highlight')}>Highlights</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Features -tab" data-bs-toggle="pill" data-bs-target="#pills-Features" type="button" onClick={() => setactiveTab('features')}>Features & Interviews</button>
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
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab" tabIndex={0}>
                        <div className="card-group video-card domestic-video-card" ref={latestref}>
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
                        <div className="card-group video-card domestic-video-card" ref={highlightref}>
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
                        <div className="card-group video-card domestic-video-card" ref={featureref}>
                            {features.map((video, index) => (
                                <div className="card" key={index}>
                                    <img src={video.img} className='card-img-top' alt={video.title} />
                                    <IoPlayCircleOutline className='play-btn' strokeWidth='1px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{video.date}</h5>
                                        <p className="card-text">{video.title} </p>
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