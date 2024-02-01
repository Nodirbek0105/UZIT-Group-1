import React from 'react';
import style from './About.module.scss';
export default function About() {
  return (
    <div className={style.about}>
      <div className={style.aboutLeft}>
        <div className='w-[50%]'>
          <img src="./about-left.png" alt="about-left" />
          </div>
      
        <div>
          <h2>О нас</h2>
          <p>
            Международное сотрудничество охватывает <br /> более 100 IT-компаний, а также партнерства с <br />
            международными ноториальными IT- <br /> организациями, фондами и университетами, <br /> такими как
            T-Hub (основанный Microsoft и <br /> правительством Индии), IT (Институт <br /> технологий Индии),
            Гарвардский <br /> университет, Стэнфордский университет, <br /> MIT, Фонд Билла и Мелинды Гейтса.
          </p>
        </div>
      </div>

      <div className={style.aboutRight}>
        
      <div>
          <h2>О нас</h2>
          <p>
            Международное сотрудничество охватывает <br /> более 100 IT-компаний, а также партнерства с <br />
            международными ноториальными IT- <br /> организациями, фондами и университетами, <br /> такими как
            T-Hub (основанный Microsoft и <br /> правительством Индии), IT (Институт <br /> технологий Индии),
            Гарвардский <br /> университет, Стэнфордский университет, <br /> MIT, Фонд Билла и Мелинды Гейтса.
          </p>
        </div>
        <img src="./about-right.png" alt="" />
      </div>
    </div>
  );
}
