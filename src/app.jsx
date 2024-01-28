import React from 'react'
import './app.scss'
import Preloader from './components/Preloader/Preloader';

export function App() {
  React.useEffect(()=>{

    window.addEventListener('load', ()=>{
      let body = document.querySelector('body') 
      body.style.overflow = 'hidden'
    })
  },[])
  





  return (
    <>
    <Preloader/>
    <h1>Hello world</h1>
    <div className='w-full h-[2500px]'></div>
      
 
 git
      
    </>
  )
}
