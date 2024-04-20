import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ThemeCTX, { ThemeProviderCTX } from "../../context/ThemeCTX";
import { useEffect } from "preact/hooks";

export default function Layout({ openBurger, setOpenBurger }) {
  const { theme, setTheme } = React.useContext(ThemeProviderCTX);
  const location = useLocation();
  useEffect(() => {
    let body = document.querySelector("body");
    if (location.pathname == "/tarrifs") {
      body.style.background = "#000";
    } else {
      body.style.background = "#262626";
    }
  }, [location]);

  return (
    <div id={theme}>
      {/* <Preloader /> */}

      <Header openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <Outlet />
      <Footer />
    </div>
  );
}
