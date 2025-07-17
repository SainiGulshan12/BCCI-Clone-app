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
                    <button type="button" className='desk-btn' data-scroll="2025"></button>
                    <button type="button" className='desk-btn' data-scroll="2365"></button>

                    <button type="button" className='mob-btn active' data-scroll="0" data-card="0"></button>
                    <button type="button" className='mob-btn' data-scroll="342" data-card="1"></button>
                    <button type="button" className='mob-btn' data-scroll="684" data-card="2"></button>
                    <button type="button" className='mob-btn' data-scroll="1022" data-card="3"></button>
                    <button type="button" className='mob-btn' data-scroll="1364" data-card="4"></button>
                    <button type="button" className='mob-btn' data-scroll="1706" data-card="5"></button>
                    <button type="button" className='mob-btn' data-scroll="2048" data-card="6"></button>
                    <button type="button" className='mob-btn' data-scroll="2390" data-card="7"></button>
                    <button type="button" className='mob-btn' data-scroll="2732" data-card="8"></button>
                    <button type="button" className='mob-btn' data-scroll="3074" data-card="9"></button>
                    <button type="button" className='mob-btn' data-scroll="3416" data-card="10"></button>
                </div>
                <div className="card-inner d-flex overflow-auto" id="cardInner">
                    <div className="card-items d-flex flex-column active">
                        <h5>1983</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/1983.png" alt="ICC World Cup" />
                        <p>ICC World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2000</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/Under_19.png" alt="ICC Under-19 World Cup" />
                        <p>ICC Under-19 World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2007</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/2007.png" alt="ICC T20 World Cup" />
                        <p>ICC T20 World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2008</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/Under_19.png" alt="ICC Under-19 World Cup" />
                        <p>ICC Under-19 World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2011</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/2011.png" alt="ICC Cricket World Cup" />
                        <p>ICC Cricket World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2012</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/Under_19.png" alt="ICC Under-19 World Cup" />
                        <p>ICC Under-19 World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2013</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/2013.png" alt="ICC Champions Trophy" />
                        <p>ICC Champions Trophy</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2018</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/Under_19.png" alt="ICC Under-19 World Cup" />
                        <p>ICC Under-19 World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2022</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/Under_19.png" alt="ICC Under-19 World Cup" />
                        <p>ICC Under-19 World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2024</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/2007.png" alt="ICC T20 World Cup" />
                        <p>ICC T20 World Cup</p>
                    </div>
                    <div className="card-items d-flex flex-column">
                        <h5>2025</h5>
                        <img src="https://documents.bcci.tv/bcci/images/Trophy/2013.png" alt="ICC Champions Trophy" />
                        <p>ICC Champions Trophy</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Honours;

