import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Men/International/Home/home";
import Match from "./Components/Men/International/fixtures/fixture";
import Video from "./Components/Men/International/Videos/video";
import News from "./Components/Men/International/News/news";
import Rank from "./Components/Men/International/Ranking/rank";
import Download from "./Components/Men/International/DownloadApp/download";
import Honours from "./Components/Men/International/Honours/honours";
import Captain from "./Components/Men/International/CaptainCorner/captain";
import Shop from "./Components/Men/International/shopPassion/shop";
import Photo from "./Components/Men/International/PhotoGallery/photo";
import Footer from "./Components/Men/International/Footer/footer";

import Homed from "./Components/Men/Domestic/Home/home";
import Videod from "./Components/Men/Domestic/Videos/video";
import Newsd from "./Components/Men/Domestic/News/news";
import Honoursd from "./Components/Men/Domestic/Honours/honours";

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
