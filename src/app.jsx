import React from 'react'
import './app.scss'
import Preloader from './components/Preloader/Preloader';
import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';


export function App() {
  React.useEffect(()=>{

    window.addEventListener('load', ()=>{
      let body = document.querySelector('body') 
      body.style.overflow = 'hidden'
    })
  },[])
  





  return (

    <>
    <Routes>

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
    
        


      </Route>
       
   
    </Routes>

      
 
 
      
    </>
  )
}
