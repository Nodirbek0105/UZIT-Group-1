import React from 'react';
import style from './About.module.scss';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const imgRef = React.useRef(null);
  // React.useEffect(() => {
  //   const element = imgRef.current;
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(element, {
  //     x: 700,
  //     duration: 2,
  //     scrollTrigger: element,
  //   });
  // }, []);

  return (
    <section className={style.about}>
      <div className={style.aboutLeft}>
        <div className="w-[50%]">
          <img data-aos="fade-right" src="./about-left.png" alt="about-left" />
        </div>

        <div>
          <h2>О нас</h2>
          <p>
            Международное сотрудничество охватывает <br /> более 100 IT-компаний, а также
            партнерства с <br />
            международными ноториальными IT- <br /> организациями, фондами и университетами, <br />{' '}
            такими как T-Hub (основанный Microsoft и <br /> правительством Индии), IT (Институт{' '}
            <br /> технологий Индии), Гарвардский <br /> университет, Стэнфордский университет,{' '}
            <br /> MIT, Фонд Билла и Мелинды Гейтса.
          </p>
        </div>
      </div>

      <div className={style.aboutRight}>
        <div>
          <h2>О нас</h2>
          <p>
            Международное сотрудничество охватывает <br /> более 100 IT-компаний, а также
            партнерства с <br />
            международными ноториальными IT- <br /> организациями, фондами и университетами, <br />{' '}
            такими как T-Hub (основанный Microsoft и <br /> правительством Индии), IT (Институт{' '}
            <br /> технологий Индии), Гарвардский <br /> университет, Стэнфордский университет,{' '}
            <br /> MIT, Фонд Билла и Мелинды Гейтса.
          </p>
        </div>
        <img data-aos="fade-left" src="./about-right.png" alt="" />
      </div>
    </section>
  );
}
