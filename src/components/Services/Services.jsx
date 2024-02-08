import React from 'react';
import styles from './Services.module.scss';
import Tarrifs from './Tarrifs';



export default function Services() {
 
  return (
    <section className={styles.services}>
      <div className={styles.servicesWrapper}>
        {' '}
        <h2 className={styles.servicesTitle}>Услуги</h2>{' '}
        <p className={styles.servicesSubtitle}>
          Ознакомьтесь с нашими гибкими тарифами, предлагающими разнообразные варианты
          сотрудничества. Независимо от вашего бюджета или масштаба проекта, мы готовы предоставить
          высококачественные IT-решения и цифровые маркетинговые услуги. Наши тарифы адаптированы
          под различные потребности, обеспечивая эффективное взаимодействие и взаимовыгодное
          сотрудничество. Развивайтесь с UZIT Group - вашим надежным партнером в мире технологий.
        </p>

      </div>
      

     <Tarrifs/> 
    </section>
  );
}
