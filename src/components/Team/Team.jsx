import React from 'react';
import style from './Team.module.scss';
import Button from '../Button/Button';
export default function Team() {
  return (
    <div className={style.team}>
      <h2>Наша Команда</h2>
      <div className={style.teamWrapper}>
        <div className={style.teamWrapperLeft}>
          <p>
            Наша команда - талантливые <br /> и преданные профессионалы, <br /> стремящиеся к инновациям и <br />
            развитию IT-сектора в <br /> Узбекистане. Вместе мы <br /> создаем будущее, <br /> основанное на знаниях,
            опыте <br /> и коллективной энергии. <br /> Узнайте больше о людях, <br /> делающих UZIT Group <br /> особенным
          </p>
          <Button>О Команде</Button>
        </div> 
        <div className={style.teamWrapperRight}> 
     
           <img src="./team.jpg" alt="" />
     
       

        </div>
      </div>
    </div>
  );
}
