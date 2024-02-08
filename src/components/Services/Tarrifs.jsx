import React from 'react';
import styles from './Services.module.scss';
import { tariffsItem } from './data.js';
import Button from '../Button/Button.jsx';

export default function Tarrifs() {
  return (
    <div className={styles.tarrifsWrapper}>
      {tariffsItem.map((item) => (
        <div className={styles.tarrifsItem}>
          <div className={styles.tarrifsItemTitle}>
            <h2>{item.title}</h2>
          </div>
          <div className={styles.tarrifsBlock}>
            {item.services.map((serv) => (
              <div className="flex items-center mt-[5px] pl-[15px]">
                <img src={serv.img} alt="img" />
                <span className="text-[18px] opacity-[80%] ml-[5px] font-medium">
                  {serv.description}
                </span>
              </div>
            ))}
          
              <button>Подробнее</button>
           
          </div>
        </div>
      ))}
    </div>
  );
}
