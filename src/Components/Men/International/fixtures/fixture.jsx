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
                  <div className="text-strip ">
                    Youth Test
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25 text-uppercase">
                      <h4>India Mens U19 In England Multiday Series 2025</h4>
                      <p>1 Hour to go</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <b>ENGLAND U19</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-center align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA U19</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        12 Jul  - 15 Jul 2025 | 15:30 IST
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>Kent County Cricket Ground, Beckenham</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip women">
                    5th T20I
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25">
                      <h4>INDIA WOMEN IN ENGLAND T20 SERIES 2025</h4>
                      <p>8 HOUR TO GO</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <b>ENGLAND <br /> (WOMEN)</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-center align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA (WOMEN)</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        Sat,12 Jul 2025 | 23:05 IST 
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>Edgbaston, Birmingham</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip Wodi-U19">
                    1st ODI
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25 text-uppercase">
                      <h4>India women  In England Odi Series 2025</h4>
                      <p>4 days to go</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <b>ENGLAND <br /> (WOMEN)</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-center align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA (WOMEN)</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        Wed,16 Jul 2025 | 17:30 IST 
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>The Rose Bowl, Southampton</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip Wodi-U19">
                    2nd ODI
                  </div>
                  <div className="card-details">
                    <div className="card-top d-flex align-items-center justify-content-between h-25">
                      <h4>INDIA WOMEN IN ENGLAND ODI SERIES 2025</h4>
                      <p>7 DAYS TO GO</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <b>ENGLAND <br /> (WOMEN)</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-center align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                          <b>INDIA (WOMEN)</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        Wed,19 Jul 2025 | 15:30 IST
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>Lord's Cricket Ground, London</p>
                      <b>Match Info <TiArrowRight className='ti-arrow-icon' /></b>
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
                    <div className="card-top d-flex align-items-center justify-content-between h-25">
                      <h4>India Mens U19 In England Multiday Series 2025</h4>
                      <p>1 WEEK TO GO</p>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england U19" />
                          <b>ENGLAND U19</b>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-center align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india U19" />
                          <b>INDIA U19</b>
                        </div>
                      </div>
                      <div className="date-timing text-center">
                        20 Jul  - 23 Jul 2025 | 15:30 IST
                      </div>
                    </div>
                    <div className="card-bottom h-25 d-flex align-items-center justify-content-between px-3">
                      <p>County Ground, Chelmsford</p>
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
                  <div className="text-strip Wodi-U19">
                    Youth List-A Match
                  </div>
                  <div className="card-details">
                    <div className="card-top text-uppercase align-content-center h-25">
                      <h4>India Mens U19 In England Odi Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex justify-content-start align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/xwbqvMolZz1729662687ECB.png" alt="England u19" />
                          <div className="score ">
                            <span>England U19</span>
                            <p><b>211 - 3</b><span> (31.1 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex align-items-center justify-content-end w-50">
                          <div className="score text-end">
                            <span>India U19</span>
                            <p><b>210 - 9</b><span> (50.0 Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp " alt="India u19" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        England U19 Won by 7 Wickets 
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3">
                      <div className="ground-time d-flex align-items-center pt-3 justify-content-between">
                        <p>The County Ground, New Road, Worcester</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>Mon,7 Jul 2025 | 15:30 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip Wodi-U19">
                    Youth List-A Match
                  </div>
                  <div className="card-details">
                    <div className="card-top text-uppercase align-content-center h-25">
                      <h4>India Mens U19 In England Odi Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex justify-content-start align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/xwbqvMolZz1729662687ECB.png" alt="England U19" />
                          <div className="score">
                            <span>England U19</span>
                            <p><b>308</b><span> (45.3 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex align-items-center justify-content-end w-50">
                          <div className="score text-end">
                            <span>India U19</span>
                            <p><b>363 - 9</b><span> (50.0 Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="India U19" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        India U19 Won by 55 Runs 
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3">
                      <div className="ground-time d-flex align-items-center pt-3 justify-content-between">
                        <p>The County Ground, New Road, Worcester</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>Sat,5 Jul 2025 | 15:30 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip women">
                    3rd T20I
                  </div>
                  <div className="card-details">
                    <div className="card-top align-content-center h-25">
                      <h4>India Women In England T20 Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <div className="score">
                            <span>England (Women)</span>
                            <p><b>171 - 9</b><span> (20.0 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50">
                          <div className="score text-end">
                            <span>India (Women)</span>
                            <p><b>166 - 5</b><span> (20.0 Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        England (Women) Won by 5  Runs 
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3">
                      <div className="ground-time d-flex align-items-center pt-3 justify-content-between">
                        <p>Kennington Oval, London</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>Fri,4 Jul 2025 | 23:05 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip Wodi-U19">
                    Youth List-A Match
                  </div>
                  <div className="card-details">
                    <div className="card-top text-uppercase align-content-center h-25">
                      <h4>India Mens U19 In England Odi Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/xwbqvMolZz1729662687ECB.png" alt="England U19" />
                          <div className="score">
                            <span>England U19</span>
                            <p><b>268 - 6</b><span> (40.0 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50">
                          <div className="score text-end">
                            <span>India U19</span>
                            <p><b>274 - 6</b><span> (34.3 Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india U19" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        India U19 Won by 4 Wickets 
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3">
                      <div className="ground-time d-flex align-items-center pt-3 justify-content-between">
                        <p>County Ground, Northampton</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>Wed,2 Jul 2025 | 15:30 IST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


             <div className="col px-0">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div className="text-strip">
                    2nd Test
                  </div>
                  <div className="card-details">
                    <div className="card-top align-content-center h-25">
                      <h4>India Tour Of England Test Series 2025</h4>
                    </div>
                    <div className="card-center h-50 d-flex flex-column">
                      <div className="teams d-flex align-items-center justify-content-between px-2 ">
                        <div className="flag d-flex align-items-center w-50">
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/6AaRpNleNd1747648886eng.png" alt="england" />
                          <div className="score">
                            <span>England</span>
                            <p><b>407</b><span> (89.3 Ov)</span></p>
                            <p><b>271</b><span> (68.1 Ov)</span></p>
                          </div>
                        </div>
                        <div className="vs">
                          <img src={vs} alt="vs" />
                        </div>
                        <div className="flag d-flex justify-content-end align-items-center w-50">
                          <div className="score text-end">
                            <span>INDIA</span>
                            <p><b>587</b><span> (151.0 Ov)</span></p>
                            <p><b>427 - 6 d</b><span> (83.0 <br />Ov)</span></p>
                          </div>
                          <img src="https://scores.bcci.tv/matchcentre/teamlogos/Kct0pgqupN1726838081india.webp" alt="india" />
                        </div>
                      </div>
                      <div className="date-timing result text-center">
                        India Won by 336  Runs 
                      </div>
                    </div>
                    <div className="card-bottom h-25 px-3 d-flex flex-column justify-content-center">
                      <div className="ground-time d-flex justify-content-between">
                        <p>Edgbaston, Birmingham</p>
                        <b>Match Center <TiArrowRight className='ti-arrow-icon' /></b>
                      </div>
                      <span>2 Jul - 6 Jul 2025 | 15:30 IST</span>
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