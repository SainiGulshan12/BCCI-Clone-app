import React from 'react';
import './video.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { IoPlayCircleOutline, IoShareSocialOutline } from 'react-icons/io5';

function Video() {
    const latestVideos = [
        {
            img: "https://brightcove.iplt20.com/output/input/6369918840112-1741774443.jpg",
            date: "12th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "13.2 k",
            duration: "08:01 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369878260112-1741756447.jpg",
            date: "11th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "12.8 k",
            duration: "05:37 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369877757112-1741693039.jpg",
            date: "11th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "10.7k",
            duration: "08:42 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369873755112-1741686240.jpg",
            date: "11th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "29.5k",
            duration: "08:24 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369837386112-1741607925.jpg",
            date: "1th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY ",
            title2: "2024-25, Punjab vs Rest of...",
            views: "10.3k",
            duration: "08:44 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369836788112-1741606733.jpg",
            date: "10th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "17.3k",
            duration: "02:20 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369807633112-1741520663.jpg",
            date: "9th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "8.5k",
            duration: "09:59 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369807937112-1741520256.jpg",
            date: "9th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "15.6k",
            duration: "02:09 mins"
        }
    ];

    const highlights = [
        {
            img: "https://brightcove.iplt20.com/output/input/6369918840112-1741774443.jpg",
            date: "12th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "13 k",
            duration: "08:01 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369877757112-1741693039.jpg",
            date: "11th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "10.6 k",
            duration: "08:42 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369837386112-1741607925.jpg",
            date: "10th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "10.3 k",
            duration: "08:44 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369807633112-1741520663.jpg",
            date: "9th Mar, 2025",
            title1: "COL C K NAYUDU TROPHY",
            title2: "2024-25, Punjab vs Rest of...",
            views: "8.5 k",
            duration: "09:59 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369517467112-1740910903.jpg",
            date: "2nd Mar, 2025",
            title1: "Ranji Trophy 2025 Final, ",
            title2: "Vidarbha vs Kerala, Day 5...",
            views: "6.3 k",
            duration: "07:03 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369473465112-1740830081.jpg",
            date: "1st Mar, 2025",
            title1: "Ranji Trophy 2025 Final, ",
            title2: "Vidarbha vs Kerala, Day 4...",
            views: "6.5 k",
            duration: "07:53 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369429122112-1740744454.jpg",
            date: "28th Feb, 2025",
            title1: "Ranji Trophy 2025 Final, ",
            title2: "Vidarbha vs Kerala, Day 3...",
            views: "7.7 k",
            duration: "06:43 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369383435112-1740658482.jpg",
            date: "27th Feb, 2025",
            title1: "Ranji Trophy 2025 Final, ",
            title2: "Vidarbha vs Kerala, Day 2...",
            views: "8 k",
            duration: "10:13 mins"
        }
    ];

    const features = [
        {
            img: "https://brightcove.iplt20.com/output/input/6369517011112-1740907763.jpg",
            date: "2nd Mar, 2025",
            title1: "Ranji Trophy 2025 Final,",
            title2: "Vidarbha vs Kerala: Y V Ratho...",
            views: "4.3 k",
            duration: "01:44 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369517909112-1740907305.jpg",
            date: "2nd Mar, 2025",
            title1: "Ranji Trophy 2025 Final,",
            title2: "Vidarbha vs Kerala: Y V Usman...",
            views: "3.8k",
            duration: "01:55 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369470479112-1740802159.jpg",
            date: "1st Mar, 2025",
            title1: "Ranji Trophy 2025 Final,",
            title2: "Vidarbha vs Kerala: Y V Harsh...",
            views: "2.8 k",
            duration: "02:40 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369425560112-1740716075.jpg",
            date: "28th Feb, 2025",
            title1: "Ranji Trophy 2025 Final,",
            title2: "Vidarbha vs Kerala: Y V Danish...",
            views: "3.4 k",
            duration: "02:12 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369377775112-1740629523.jpg",
            date: "27th Feb, 2025",
            title1: "Ranji Trophy 2025 Final,",
            title2: "Vidarbha vs Kerala: Karun Nai...",
            views: "3.5 k",
            duration: "03:22 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369131618112-1740111302.jpg",
            date: "21st Feb, 2025",
            title1: "Ranji Trophy 2025 SF1, Gujarat",
            title2: " vs Kerala: P K Panchal...",
            views: "6 k",
            duration: "03:24 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369130146112-1740111308.jpg",
            date: "21st Feb, 2025",
            title1: "Ranji Trophy 2025 SF1, Gujarat",
            title2: " vs Kerala: Mohammed...",
            views: "5.6 k",
            duration: "02:14 mins"
        },
        {
            img: "https://brightcove.iplt20.com/output/input/6369076124112-1740025342.jpg",
            date: "20th Feb, 2025",
            title1: "Ranji Trophy 2025 SF1, Gujarat",
            title2: " vs Kerala: Interview",
            views: "4.8 k",
            duration: "01:53 mins"
        }
    ];

    return (
        <section className="video-section mt-3" id="video">
            <div className="container-fluid ps-0">
                <div className="video-heading domestic-video-heading d-flex align-items-center justify-content-between">
                    <div className="video-head d-flex align-items-center justify-content-between px-3">
                        <h1>Videos</h1>
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button">Latest</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Highlights-tab" data-bs-toggle="pill" data-bs-target="#pills-Highlights" type="button">Highlights</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Features -tab" data-bs-toggle="pill" data-bs-target="#pills-Features" type="button">Features & Interviews</button>
                            </li>
                        </ul>
                    </div>
                    <div className="seeall-arrow d-flex align-items-center justify-content-end gap-4">
                        <FontAwesomeIcon icon={faAngleLeft} className='angle-icon' />
                        <FontAwesomeIcon icon={faAngleRight} className='angle-icon' />
                        <div className="seeall d-flex align-items-center gap-2">
                            <p>SEE ALL</p>
                            <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent" >
                    <div className="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab" tabIndex={0}>
                        <div className="card-group video-card domestic-video-card">
                            {latestVideos.map((video, index) => (
                                <div className="card" key={index}>
                                    <img src={video.img} className='card-img-top' alt={video.title} />
                                    <IoPlayCircleOutline className='play-btn' strokeWidth='1px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{video.date}</h5>
                                        <p className="card-text">{video.title1} <br /> {video.title2} </p>
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
                        <div className="card-group video-card domestic-video-card">
                            {highlights.map((video, index) => (
                                <div className="card" key={index}>
                                    <img src={video.img} className='card-img-top' alt={video.title} />
                                    <IoPlayCircleOutline className='play-btn' strokeWidth='1px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{video.date}</h5>
                                        <p className="card-text">{video.title1} <br /> {video.title2} </p>
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
                        <div className="card-group video-card domestic-video-card">
                            {features.map((video, index) => (
                                <div className="card" key={index}>
                                    <img src={video.img} className='card-img-top' alt={video.title} />
                                    <IoPlayCircleOutline className='play-btn' strokeWidth='1px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{video.date}</h5>
                                        <p className="card-text">{video.title1} <br /> {video.title2} </p>
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