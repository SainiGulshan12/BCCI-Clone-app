import React, { useRef, useState } from 'react';
import './fixture.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TiArrowRight } from 'react-icons/ti';
import vs from '../../../../Assets/vs.png'


function Match() {

  const [activeTab, setactiveTab] = useState('fixtures');

  const fixturesRef = useRef(null);
  const resultsRef = useRef(null);

  const scrollLeft = () => {
    if (activeTab === 'fixtures' && fixturesRef.current) {
      fixturesRef.current.scrollLeft -= 565;
    }
    else if (activeTab === 'results' && resultsRef.current) {
      resultsRef.current.scrollLeft -= 565;
    }
  };
  const scrollRight = () => {
    if (activeTab === 'fixtures' && fixturesRef.current) {
      fixturesRef.current.scrollLeft += 560;
    }
    else if (activeTab === 'results' && resultsRef.current) {
      resultsRef.current.scrollLeft += 560;
    }
  };

  return (
    <div className='match-fixture-section container-fluid padding-lr' id="fixtures">
      <div className="match-heading d-flex justify-content-between">
        <div className="fixtures-head d-flex align-items-center">
          <h1>Matches</h1>
          <ul className="nav nav-pills tabs" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-fixtures-tab" data-bs-toggle="pill" data-bs-target="#pills-fixtures" type="button" role="tab" onClick={() => setactiveTab('fixtures')}>Fixtures</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-results-tab" data-bs-toggle="pill" data-bs-target="#pills-results" type="button" role="tab" onClick={() => setactiveTab('results')}>Results</button>
            </li>
          </ul>

        </div>
        <div className="seeall-arrow d-flex align-items-center">
          <FontAwesomeIcon icon={faAngleLeft} className='angle-icon' onClick={scrollLeft} />
          <FontAwesomeIcon icon={faAngleRight} className='angle-icon' onClick={scrollRight} />
          <div className="d-flex align-items-center gap-2 ps-4">
            <p>SEE ALL</p>
            <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
          </div>
        </div>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-fixtures" role="tabpanel" aria-labelledby="pills-fixtures-tab" tabIndex={0}>
          <div className="my-fixtures row flex-nowrap" ref={fixturesRef}>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip t20i">
                    2nd Twenty20
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25">
                      <h4>India A Women Tour Of Australia T20 Series 2025</h4>
                      <p>1 day to go</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/CqCDnjhh7Y1729662126Australia.png" alt="australia" />
                          <b>AUSTRALIA A<br /> (WOMEN)</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50 pe-1">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA A <br /> (WOMEN)</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        Sat,9 Aug 2025 | 13:30 IST
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>Great Barrier Reef Arena, Mackay</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip t20i">
                    3rd Twenty20
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25 text-uppercase">
                      <h4>India A Women Tour Of Australia T20 Series 2025</h4>
                      <p>1 day to go</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/CqCDnjhh7Y1729662126Australia.png" alt="australia" />
                          <b>AUSTRALIA A<br /> (WOMEN)</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50 pe-1">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA A <br /> (WOMEN)</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        Sun,10 Aug 2025 | 13:30 IST
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>Great Barrier Reef Arena, Mackey</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip odi">
                    1st One-Day
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25 text-uppercase">
                      <h4>India A Women Tour Of Australia One Day <br /> Series 2025</h4>
                      <p>5 days to go</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/CqCDnjhh7Y1729662126Australia.png" alt="australia" />
                          <b>AUSTRALIA A <br />(WOMEN)</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50 pe-1">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA A <br /> (WOMEN)</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        Wed, 13 Aug 2025 | 05:00 IST
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>Ian Healy Oval, Brisbane</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip odi">
                    2nd One-Day
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25">
                      <h4>India A Women Tour Of Australia One Day <br /> Series 2025</h4>
                      <p>1 week to go</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/CqCDnjhh7Y1729662126Australia.png" alt="austalia" />
                          <b>AUSTRALIA A <br />(WOMEN)</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50 pe-1">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA A <br /> (WOMEN)</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        Fri, 15 Aug 2025 | 05:00 IST
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>Ian Healy Oval, Brisbane</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip odi">
                    3rd One-Day
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25">
                      <h4>India A Women Tour Of Australia One Day <br /> Series 2025</h4>
                      <p>2 weeks to go</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/CqCDnjhh7Y1729662126Australia.png" alt="austalia" />
                          <b>AUSTRALIA A <br />(WOMEN)</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50 pe-1">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA A <br /> (WOMEN)</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        Fri, 17 Aug 2025 | 05:00 IST
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>Ian Healy Oval, Brisbane</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="pills-results" role="tabpanel" aria-labelledby="pills-results-tab" tabIndex={0}>
          <div className="my-fixtures row flex-nowrap" ref={resultsRef}>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip t20i">
                    1st Twenty20
                  </div>
                  <div className="card-details">
                    <div className="card-top text-uppercase align-content-center h-25">
                      <h4>India A Women Tour Of Australia T20 Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex justify-content-start align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/CqCDnjhh7Y1729662126Australia.png" alt="Australia" />
                          <div className="score">
                            <span>Australia A (Women)</span>
                            <p><b>137 - 6</b><span> (20.0 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex align-items-center justify-content-end w-50">
                          <div className="score text-end">
                            <span>India A (Women)</span>
                            <p><b>124 - 5</b><span> (20.0 Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="India U19" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        Australia A (Women) Won by 13 Runs 
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3">
                      <div className="ground-time d-flex align-items-center pt-3 justify-content-between">
                        <p>Great Barrier Reef Arena, Mackay</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>Thu,7 Aug 2025 | 13:30 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip women">
                    5th Test
                  </div>
                  <div className="card-details">
                    <div className="card-top align-content-center h-25">
                      <h4>India Tour of England Test Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <div className="score">
                            <span>England</span>
                            <p><b>247</b><span> (51.2 Ov)</span></p>
                            <p><b>367</b><span> (85.1 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50">
                          <div className="score text-end">
                            <span>India</span>
                            <p><b>224</b><span> (69.4 Ov)</span></p>
                            <p><b>396</b><span> (88.0 Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        India Won by 6 runs
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3">
                      <div className="ground-time d-flex align-items-center pt-3 justify-content-between">
                        <p>Kennington Oval, London</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>31 Jul  - 4 Aug 2025 | 15:30 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip women">
                    4th Test
                  </div>
                  <div className="card-details">
                    <div className="card-top align-content-center h-25">
                      <h4>India Tour of England Test Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <div className="score">
                            <span>England</span>
                            <p><b>669</b><span> (157.1 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50">
                          <div className="score text-end">
                            <span>India</span>
                            <p><b>358</b><span> (114.1 Ov)</span></p>
                            <p><b>425 - 4</b><span> (143.0 <br />Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        Match Drawn
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3">
                      <div className="ground-time d-flex align-items-center pt-3 justify-content-between">
                        <p>Old Trafford, Menchester</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>23 Jul  - 27 Jul 2025 | 15:30 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip odi">
                    3rd ODI
                  </div>
                  <div className="card-details">
                    <div className="card-top align-content-center h-25">
                      <h4>India Women In England Odi Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <div className="score">
                            <span>England (Women)</span>
                            <p><b>305</b><span> (49.5 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50">
                          <div className="score text-end">
                            <span>INDIA (Women)</span>
                            <p><b>318 - 5</b><span> (50.0 Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        India (Women) Won by 13  Runs
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3 d-flex flex-column justify-content-center">
                      <div className="ground-time d-flex justify-content-between">
                        <p>Riverside Ground, Chester-le-Street</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>Tue,22 Jul 2025 | 17:30 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip">
                    Youth Test
                  </div>
                  <div className="card-details">
                    <div className="card-top align-content-center h-25">
                      <h4>India Mens u19 in england multiday Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <div className="score">
                            <span>England U19</span>
                            <p><b>309</b><span> (81.3 Ov)</span></p>
                            <p><b>324 - 5 d</b><span> (62.0 <br /> Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50">
                          <div className="score text-end">
                            <span>INDIA U19</span>
                            <p><b>279</b><span> (58.1 Ov)</span></p>
                            <p><b>290 - 6</b><span> (43.0 Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        Match drawn
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3 d-flex flex-column justify-content-center">
                      <div className="ground-time d-flex justify-content-between">
                        <p>County Ground, Chelmsford</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>20 Jul - 23 Jul 2025 | 15:30 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Match;