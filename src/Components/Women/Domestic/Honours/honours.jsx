import React, { useEffect } from 'react';
import './honours.css';


function Honours() {

    useEffect(() => {
        const indicators = document.querySelectorAll(".honourcard-indicators button");
        const cardInner = document.getElementById("cardInner");
        const cardItems = document.querySelectorAll(".card-items");

        indicators.forEach((btn) => {
            btn.addEventListener("click", () => {
                const scrollValue = btn.getAttribute("data-scroll");
                const cardIndex = parseInt(btn.getAttribute("data-card"));

                cardInner.scrollLeft = parseInt(scrollValue);

                indicators.forEach((i) => i.classList.remove("active"));
                btn.classList.add("active");

                cardItems.forEach((c) => c.classList.remove("active"));
                if (!isNaN(cardIndex) && cardItems[cardIndex]) {
                    cardItems[cardIndex].classList.add("active");
                }
            });
        });

        return () => {
            indicators.forEach((btn) => {
                btn.replaceWith(btn.cloneNode(true));
            });
        };
    }, []);

    return (
        <article className='honours-section'>
            <h2>Honours</h2>
            <div id="carouselExample" className="honourscarousel position-relative"  >
                <div className="honourcard-indicators">
                    <button type="button" className='desk-btn active' data-scroll="0"></button>
                    <button type="button" className='desk-btn' data-scroll="1012"></button>

                    <button type="button" className='mob-btn active' data-scroll="0" data-card="0"></button>
                    <button type="button" className='mob-btn' data-scroll="342" data-card="1"></button>
                    <button type="button" className='mob-btn' data-scroll="684" data-card="2"></button>
                    <button type="button" className='mob-btn' data-scroll="1022" data-card="3"></button>
                    <button type="button" className='mob-btn' data-scroll="1364" data-card="4"></button>
                    <button type="button" className='mob-btn' data-scroll="1706" data-card="5"></button>
                    <button type="button" className='mob-btn' data-scroll="2048" data-card="6"></button>
                </div>
                <div className="card-inner dom-women-card-inner d-flex overflow-auto" id="cardInner">
                    <div className="card-items d-flex flex-column active">
                        <h5>2024-25</h5>
                        <div className="trophies">
                            <img src="https://www.bcci.tv/img/cup.png" alt="Senior Women's One Day Challenger Trophy" />
                            <span>Senior Women's One Day Challenger Trophy</span>
                        </div>
                        <p>
                            <img src="https://scores.bcci.tv/matchcentre/teamlogos/3rZEXbgE201717491912india.png" alt="Teacm C" />
                            <span>Team C</span>
                        </p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2024-25</h5>
                        <div className="trophies">
                            <img src="https://www.bcci.tv/img/cup.png" alt="Senior Women's One Day Trophy" />
                            <span>Senior Women's One Day Trophy</span>
                        </div>
                        <p>
                            <img src="https://bcci-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/matchcentre/teamlogos/Madhya Pradesh.png" alt="Madhya Pradesh" />
                            <span>Madhya Pradesh</span>
                        </p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2024-25</h5>
                        <div className="trophies">
                            <img src="https://www.bcci.tv/img/cup.png" alt="Senior Women's T20 Trophy" />
                            <span>Senior Women's T20 Trophy</span>
                        </div>
                        <p>
                            <img src="https://bcci-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/matchcentre/teamlogos/Mumbai.png" alt="Mumbai" />
                            <span>Mumbai</span>
                        </p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2024-25</h5>
                        <div className="trophies">
                            <img src="https://www.bcci.tv/img/cup.png" alt="Senior Women's T20 Challenger Trophy" />
                            <span>Senior Women's T20 Challenger Trophy</span>
                        </div>
                        <p>
                            <img src="https://scores.bcci.tv/matchcentre/teamlogos/3rZEXbgE201717491912india.png" alt="Team E" />
                            <span>Team E</span>
                        </p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2023-24</h5>
                        <div className="trophies">
                            <img src="https://www.bcci.tv/img/cup.png" alt="Senior Women's Inter Zonal T20 Trophy" />
                            <span>Senior Women's Inter Zonal T20 Trophy</span>
                        </div>
                        <p>
                            <img src="https://scores.bcci.tv/matchcentre/teamlogos/ezone.png" alt="East Zone" />
                            <span>East Zone</span>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Honours;

