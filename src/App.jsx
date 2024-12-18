// import React from "react";
// import { useTranslation } from "react-i18next"
import { Route, Routes } from "react-router-dom";
import NavbarCom from "./componens/Layout/NavbarCom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sessions from "./pages/Sessions";
import "./App.scss"
import Footer from "./componens/Layout/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import ScrollTopPages from "./componens/common/ScrollTopPage";
import ScrollTop from "./componens/common/ScrollTop";
function App() {
  let [Loading, setLoading] =useState(true); 
  setTimeout(() => {
    setLoading(false);
  }, 2000);
   useEffect(() => {
     AOS.init({
       duration: 1000,
       easing: "ease-in-out", // Easing for the animation
       once: false, // Whether animation should happen only once
       mirror: false, // Whether elements should animate out while scrolling past them
     });
   }, []);
  return (
    <div>
      <ScrollTopPages />
      {Loading ? (
        <span className="loader"></span>
      ) : (
        <>
          {" "}
          <NavbarCom />
          <div className="row m-0 p-0">
            <div className="col-lg-12 m-0 p-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sessions" element={<Sessions />} />
              </Routes>
            </div>
          </div>
          <Footer />
          <ScrollTop />
        </>
      )}
    </div>
  );
}

export default App;




















































