import React, { useRef } from 'react';
import './photo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

function Photo() {

    const scrollGalleryRef = useRef(null);

    const scrollLeft = () => {
        if (scrollGalleryRef.current) {
            scrollGalleryRef.current.scrollLeft -= 478;
        }
    }
    const scrollRight = () => {
        if (scrollGalleryRef.current) {
            scrollGalleryRef.current.scrollLeft += 478;
        }
    }

    const gallery_img = [
        {
            img1: "https://assets.bcci.tv/bcci/photos/1635/6fce383c-09ef-46d9-abae-39ef1c08511c.jpg",
            desciption1: "India Women Tour of England 2025 - 3rd T20I",
            btn1: "19",
            img2: "https://assets.bcci.tv/bcci/photos/1629/4de00e80-d321-4f9c-aeee-5b176c742338.jpg",
            desciption2: "India Tour of England 2025 - 2nd Test",
            btn2: "81",
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1634/80244363-a5b5-4314-9a5f-5028f73aefe3.jpg",
            desciption1: "India Women Tour of England 2025 - 2nd T20I",
            btn1: "32",
            img2: "https://assets.bcci.tv/bcci/photos/1633/2c43cea6-5ca8-4c19-a9a7-aba889469ecd.jpg",
            desciption2: "India Women Tour of England 2025 - 1st T20I",
            btn2: "37",
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1761/6bbad0a0-8021-46c6-a41f-583347f230f4.jpg",
            desciption1: "ICC CHAMPIONS TROPHY 2024-25 - Final",
            btn1: "38",
            img2: "https://assets.bcci.tv/bcci/photos/1628/19d15725-3b0f-47da-aae1-803c1d12fb17.jpg",
            desciption2: "India Tour of England 2025 - 1st Test",
            btn2: "63"
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1759/c56ec375-7e9c-42d4-937b-d4c81b6e1915.jpg",
            desciption1: "ICC CHAMPIONS TROPHY 2024-25 - Semi Final",
            btn1: "130",
            img2: "https://assets.bcci.tv/bcci/photos/1758/5d95d748-4980-41fb-85c2-281aeffb7d0a.jpg",
            desciption2: "ICC CHAMPIONS TROPHY 2024-25 - 12th ODI",
            btn2: "105"
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1751/ca0c8e36-083d-4a4b-af87-ffa4f7cf1a14.jpg",
            desciption1: "ICC CHAMPIONS TROPHY 2024-25 - 5th ODI",
            btn1: "68",
            img2: "https://assets.bcci.tv/bcci/photos/1748/3f1cb581-c87e-4338-85ff-2bc0e9a4fbc4.jpg",
            desciption2: "ICC CHAMPIONS TROPHY 2024-25 - 2nd ODI",
            btn3: "85"
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1580/34c2b2e4-75d6-4278-afd2-3c2cae6eb2a2.jpg",
            desciption1: "England Tour Of India ODI Series 2025 - 3rd ODI",
            btn1: "225",
            img2: "https://assets.bcci.tv/bcci/photos/1579/9a6c1a0b-3299-4cc4-bc4d-4c63ede74c66.jpg",
            desciption2: "England Tour Of India ODI Series 2025 - 2nd ODI",
            btn2: "213"
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1578/62c411dc-8078-4899-946a-509721a41320.jpg",
            desciption1: "England Tour Of India ODI Series 2025 - 1st ODI",
            btn1: "195",
            img2: "https://assets.bcci.tv/bcci/photos/1577/f451d1b5-355b-48d7-bfff-c56e142ed0a7.jpg",
            desciption2: "England Tour Of India T20 Series 2025 - 5th T20I",
            btn2: "131",
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1576/d8654521-fa75-42ee-868e-d6345b6f6ef3.jpg",
            desciption1: "England Tour Of India T20 Series 2025 - 4th T20I",
            btn1: "161",
            img2: "https://assets.bcci.tv/bcci/photos/1575/deb33a13-7c1d-4d1b-b5a4-c28ade9129f9.jpg",
            desciption2: "England Tour Of India T20 Series 2025 - 3rd T20I",
            btn2: "152",
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1574/0f8a6352-2a0c-4b66-a56c-9c90bcfa8eef.jpg",
            desciption1: "England Tour Of India T20 Series 2025 - 2nd T20I",
            btn1: "172",
            img2: "https://assets.bcci.tv/bcci/photos/1573/4056437d-b24d-4f37-8b69-1c1b1d238ca3.jpg",
            desciption2: "England Tour Of India T20 Series 2025 - 1st T20I",
            btn2: "129"
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1738/daa2c6c7-097f-4b0c-bc02-1b06d244c0b6.jpg",
            desciption1: "Ireland Womens Tour Of India 2025 - 3rd ODI",
            btn1: "218",
            img2: "https://assets.bcci.tv/bcci/photos/1737/436feb26-abf8-4089-bbb9-5b5bc346e35d.jpg",
            desciption2: "Ireland Womens Tour Of India 2025 - 2nd ODI",
            btn2: "259"
        },
        {
            img1: "https://assets.bcci.tv/bcci/photos/1736/3c7037ae-5ffb-403e-ba4d-d840eb82e793.jpg",
            desciption1: "Ireland Womens Tour Of India 2025 - 1st ODI",
            btn1: "239",
            img2: "https://documents.bcci.tv/resizedimageskirti/9d798571-0051-4085-b9bf-f3e38134cbc0_compressed.jpg",
            desciption2: "Ind Vs SL Series 2022 - 2nd Test",
            btn2: "409"
        },
        {
            img1: "https://documents.bcci.tv/resizedimageskirti/c98a8045-7b80-49e8-8c06-16f67f7fdd28_compressed.jpg",
            desciption1: "Ind Vs SL Series 2022 - 3rd T20I",
            btn1: "121",
            img2: "https://documents.bcci.tv/resizedimageskirti/fbe9a21b-deb4-4b6d-93e4-b938e540de1c_compressed.jpg",
            desciption2: "Ind Vs SL Series 2022 - 2nd T20I",
            btn2: "140"
        },
        {
            img1: "https://documents.bcci.tv/resizedimageskirti/a8e1318b-46b9-4570-bc1a-f87532fe772d_compressed.jpg",
            desciption1: "India v West Indies 2022 - 3rd T20I",
            btn1: "86",
            img2: "https://documents.bcci.tv/resizedimageskirti/1645191719__B8A0475%2520copy_compressed.jpg",
            desciption2: "India v West Indies 2022 - 2nd T20I",
            btn2: "94"
        },
        {
            img1: "https://documents.bcci.tv/resizedimageskirti/d29fec09-8622-4005-8441-7edcd3f8793e_compressed.jpg",
            desciption1: "India v West Indies 2022 - 1st T20I",
            btn1: "151",
            img2: "https://documents.bcci.tv/resizedimageskirti/1644603121__AN_8047%2520copy_compressed.jpg",
            desciption2: "India v West Indies 2022 - 3rd ODI",
            btn2: "100",
        },
        {
            img1: "https://documents.bcci.tv/resizedimageskirti/1644393145_cropped_compressed.jpg",
            desciption1: "India v West Indies 2022 - 2nd ODI",
            btn1: "69",
            img2: "https://documents.bcci.tv/resizedimageskirti/1644165035_cropped_compressed.jpg",
            desciption2: "India v West Indies 2022 - 1st ODI",
            btn2: "66",
        }
    ]

    return (
        <section className='photo-section padding-tb' id="gallery">
            <div className="heading d-flex justify-content-between align-items-center mb-4 pe-3">
                <h2>Galleries</h2>
                <div className="seeall d-flex align-items-center`">
                    <div className="angle-icons d-flex align-items-center gap-4">
                        <FontAwesomeIcon icon={faAngleLeft} className='angle-icon' onClick={scrollLeft} />
                        <FontAwesomeIcon icon={faAngleRight} className='angle-icon' onClick={scrollRight} />
                    </div>
                    <div className="arrow d-flex align-items-center gap-2">
                        <p className='m-0'>SEE ALL</p>
                        <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                    </div>
                </div>
            </div>
            <div className="container-fluid image-gallery ps-0">
                <div className="row">
                    <div className="col gallery-container d-flex" ref={scrollGalleryRef}>
                        {gallery_img.map((gallery, index) => (
                            <div className="row gallery-content flex-column" key={index} >
                                <div className="col overflow-hidden rounded-3">
                                    <div className="overlay">
                                        <div className="caption">
                                            <button><FontAwesomeIcon icon={faImage} className='icon' />{gallery.btn1}</button>
                                            <h4>{gallery.desciption1}</h4>
                                        </div>
                                    </div>
                                    <img className='d-block ' src={gallery.img1} alt="memory images" />
                                </div>
                                <div className="col overflow-hidden rounded-3">
                                    <div className="overlay">
                                        <div className="caption">
                                            <button><FontAwesomeIcon icon={faImage} className='icon' />{gallery.btn2}</button>
                                            <h4>{gallery.desciption2}</h4>
                                        </div>
                                    </div>
                                    <img className='d-block ' src={gallery.img2} alt="memory images" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Photo;





// img1: "https://assets.bcci.tv/bcci/photos/1628/19d15725-3b0f-47da-aae1-803c1d12fb17.jpg",
//     desciption1: "India Tour of England 2025 - 1st Test",
//         btn1: "63",