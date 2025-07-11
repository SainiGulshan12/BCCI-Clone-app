import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/International/Home/home";
import Match from "./Components/International/fixtures/fixture";
import Video from "./Components/International/Videos/video";
import News from "./Components/International/News/news";
import Rank from "./Components/International/Ranking/rank";
import Download from "./Components/International/DownloadApp/download";
import Honours from "./Components/International/Honours/honours";
import Captain from "./Components/International/CaptainCorner/captain";
import Shop from "./Components/International/shopPassion/shop";
import Photo from "./Components/International/PhotoGallery/photo";
import Footer from "./Components/International/Footer/footer";

import Homed from "./Components/Domestic/Home/home";
import Videod from "./Components/Domestic/Videos/video";
import Newsd from "./Components/Domestic/News/news";
import Honoursd from "./Components/Domestic/Honours/honours";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      
        <Route path="/" element={
          <> <Home /> <Match /> <Video /> <News /> <Rank /> <Download /> <Honours /> <Captain /> <Shop /> <Photo /> <Footer />
          </>
          }
        />

        {/* International Route */}
        <Route path="/international/men" element={
          <> <Home /> <Match /> <Video /> <News /> <Rank /> <Download /> <Honours /> <Captain /> <Shop /> <Photo /> <Footer />
          </>
          }
        />

        {/* Domestic Route */}
        <Route path="/domestic/men" element={
          <> <Homed /> <Videod /> <Newsd /> <Download /> <Shop /> <Honoursd /> <Photo /> <Footer /> </>} />
      </Routes>

      
    </div>
  );
}

export default App;
