import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Layout() {


  return (
    <>
     
      {/* <Preloader /> */}

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
