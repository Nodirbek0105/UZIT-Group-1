import React from 'react';
import style from './MainPage.module.scss';
import Button from '../Button/Button';
import Sphere from '../Nova/Sphere';
import { TweenMax } from 'gsap/gsap-core';
import gsap from 'gsap';


export default function MainPage() {





  return (
    <div className={style.mainPage}>
      <div className='w-[60%] z-10'>
        {' '}
        <h1 className={style.title}>
          {' '}
          <span>UZ</span> IT <br /> <p>GROUP</p>{' '}
        </h1>
        <p  className={style.subtitle}>
          Международная маркетинговая и IT- <br /> компания, которая имеет основную <br /> цель
          развитие IT-сферы в Узбекистане <br /> и создание возможностей для <br /> молодежи на
          мировой арене.
        </p>
        <Button >Подробнее</Button>
      </div>
      <Sphere/>

   
      
    
    </div>
  );
}
