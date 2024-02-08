import React from 'react';
import style from './MainPage.module.scss';

import Sphere from '../Nova/Sphere';
import { TweenMax } from 'gsap/gsap-core';
import gsap from 'gsap';
import Button from '../Button/Button';

export default function MainPage() {
  return (
    <div className={style.mainPage}>
      <div className="w-[60%] z-10">
        {' '}
        <h1 className={style.title}>
          {' '}
          <span>UZ</span> IT <br /> <p>GROUP</p>{' '}
        </h1>
        <p className={style.subtitle}>
          Международная маркетинговая и IT- <br /> компания, которая имеет основную <br /> цель
          развитие IT-сферы в Узбекистане <br /> и создание возможностей для <br /> молодежи на
          мировой арене.
        </p>
        <div className="mt-[50px]">
          {/* <Button width={280} height={71} font={25}>
            Подробнее
          </Button> */}
          <Button width={291} height={71} font={25}>
            Подробнее
          </Button>
        </div>
      </div>
      <Sphere />
    </div>
  );
}
