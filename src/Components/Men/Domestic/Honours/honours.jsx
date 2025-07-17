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
      <div id="carouselExample" className="honourscarousel domestic-honourscarousel position-relative">
        <div className="honourcard-indicators domestic-indicators">
          <button type="button" data-scroll="0" className="desk-btn active"></button>
          <button type="button" data-scroll="335" className='desk-btn'></button>

          <button type="button" className='mob-btn active' data-scroll="0" data-card="0"></button>
          <button type="button" className='mob-btn' data-scroll="335" data-card="1"></button>
          <button type="button" className='mob-btn' data-scroll="670" data-card="2"></button>
          <button type="button" className='mob-btn' data-scroll="1005" data-card="3"></button>
          <button type="button" className='mob-btn' data-scroll="1340" data-card="4"></button>
        </div>
        <div className="card-inner domestic-card-inner d-flex overflow-auto" id="cardInner">
          <div className="card-items active d-flex flex-column">
            <h5>2024-25</h5>
            <div className="tropies d-flex align-items-center justify-content-around">
              <img src="https://documents.bcci.tv/bcci/images/Trophy/Ranji.png" alt="ICC World Cup" />
              <p>Ranji Trophy</p>
            </div>
            <div className="wining-team d-flex align-items-center justify-content-center">
              <img src="https://bcci-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/matchcentre/teamlogos/Vidarbha.png" alt="Vidarbha" />
              <span>Vidarbha</span>
            </div>
          </div>
          <div className="card-items d-flex flex-column">
            <h5>2024-25</h5>
            <div className="tropies d-flex align-items-center justify-content-around">
              <img src="https://documents.bcci.tv/bcci/images/Trophy/Vijay_Hazare.png" alt="ICC World Cup" />
              <p>Vijay Hazare Trophy</p>
            </div>
            <div className="wining-team d-flex align-items-center justify-content-center">
              <img src="https://bcci-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/matchcentre/teamlogos/Karnataka.png" alt="Karnataka" />
              <span>Karnataka</span>
            </div>
          </div>
          <div className="card-items d-flex flex-column">
            <h5>2024-25</h5>
            <div className="tropies d-flex align-items-center justify-content-around">
              <img src="https://documents.bcci.tv/bcci/images/Trophy/Syed%E2%80%A8Mushtaq_Ali_Trophy.png" alt="Syed Mushtaq Ali Trophy" />
              <p>Syed Mushtaq Ali Trophy</p>
            </div>
            <div className="wining-team d-flex align-items-center justify-content-center">
              <img src="https://bcci-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/matchcentre/teamlogos/Mumbai.png" alt="Mumbai" />
              <span>Mumbai</span>
            </div>
          </div>
          <div className="card-items d-flex flex-column">
            <h5>2024-25</h5>
            <div className="tropies d-flex align-items-center justify-content-around">
              <img src="https://documents.bcci.tv/bcci/images/Trophy/ZR_irani.png" alt="Irani Cup" />
              <p>Irani Cup</p>
            </div>
            <div className="wining-team d-flex align-items-center justify-content-center">
              <img src="https://bcci-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/matchcentre/teamlogos/Mumbai.png" alt="Mumbai" />
              <span>Mumbai</span>
            </div>
          </div>
          <div className="card-items d-flex flex-column">
            <h5>2024-25</h5>
            <div className="tropies d-flex align-items-center justify-content-around">
              <img src="https://documents.bcci.tv/bcci/images/Trophy/Duleep_Trophy.png" alt="Irani Cup" />
              <p>Duleep Trophy</p>
            </div>
            <div className="wining-team d-flex align-items-center justify-content-center">
              <img src="https://scores.bcci.tv/matchcentre/teamlogos/india-a.png" alt="India A" />
              <span>India A</span>
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}

export default Honours;