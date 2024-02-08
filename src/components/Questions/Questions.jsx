import React from 'react';
import styles from './Questions.module.scss';
import Form from './Form';

export default function Questions() {
  return (
    <section className={styles.questions}>
      <div className="w-[90%] m-auto">
        <h1 className="text-[90px] font-bold">Остались Вопросы ?</h1>
        <div className="flex m-auto justify-between pr-[50px]">
          <Form />
          <img src="./qr-code.png" alt="" />
        </div>
      </div>
      <p className="text-center mt-[70px] font-bold text-[18px]">
        Мы обязательно свяжемся с вами в течение определенного времени. Так же вы можете задать
        вопросы в нашем телеграмм боте
      </p>
    </section>
  );
}
