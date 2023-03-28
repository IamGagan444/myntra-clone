import React from "react";
import Nav from "./Navbar/Nav";
import Home1 from "./home/Home1";
import Mens from "./mens/Mens";
import Signup from "../src/Navbar/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Scroll from "./Scroll";
import Womens from "../src/womens/Womens"

import Beauty from "../src/beauty.js/Beauty";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home1 />} />
            <Route path="mens" element={<Mens />} />
            <Route path="womens" element={<Womens />} />
            <Route path="signup" element={<Signup />} />
            <Route path="beauty" element={<Beauty />} />
          
            <Route path="*" />

          </Route>
          
        </Routes>
        <Scroll/>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
