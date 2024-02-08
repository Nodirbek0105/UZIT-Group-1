import React from 'react';
import styles from './Development.module.scss';
import Button from '../Button/Button';

export default function Development() {
  return (
    <section className={styles.development}>
      <h2 className="text-[25px] font-bold text-center lg:text-[80px] md:text-[60px] sm:text-[30px]">
        Развитие
      </h2>
      <div className={styles.developmentWrapper}>
        <div className="w-fit">
          <h3 className="text-[18px] font-bold">
            UZIT Group предлагает многочисленные <br /> сертификационные программы и IT- <br />
            экзамены, такие как GRE, GMAT, ACCA, <br /> CFA, сертификаты от Microsoft, Google,{' '}
            <br /> Facebook, Amazon и другие, создавая <br /> возможности для развития навыков в{' '}
            <br /> области информационных технологий.
          </h3>
          <img className="mt-[25px]" src="./development.png" alt="development" />
          <div className="ml-[50%] translate-x-[-50%] mt-[25px]">
            <Button width={219} height={52} font={25}>
              Записаться
            </Button>
          </div>
        </div>
        <div className="w-fit">
          <img src="./development2.png " alt="development" />
          <h3 className="text-[18px] font-bold mt-[25px]">
            UZIT Group предлагает многочисленные <br /> сертификационные программы и IT- <br />
            экзамены, такие как GRE, GMAT, ACCA, <br /> CFA, сертификаты от Microsoft, Google,{' '}
            <br /> Facebook, Amazon и другие, создавая <br /> возможности для развития навыков в{' '}
            <br /> области информационных технологий.
          </h3>
          <div className="ml-[50%] translate-x-[-50%] mt-[25px]">
            <Button width={219} height={52} font={25}>
              Об Экзаменах
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
