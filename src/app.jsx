import React, { Suspense } from 'react';
import './app.scss';
import Preloader from './components/Preloader/Preloader';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function App() {
  React.useEffect(() => {
    AOS.init();
  });

  React.useEffect(() => {
    AOS.refresh();
  }, []);

  // React.useEffect(()=>{

  //   window.addEventListener('load', ()=>{
  //     let body = document.querySelector('body')
  //     body.style.overflow = 'hidden'
  //   })
  // },[])

  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
