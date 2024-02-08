import React from 'react';
import styles from './Stages.module.scss';
export default function Stages() {
  const [startAnimation, setStartAnimation] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 4610) {
        setStartAnimation(true);
      }
    });
  }, []);

  return (
    <section className={styles.stages}>
      <h2 className={styles.stagesTitle}>Этапы разработки</h2>
      <div className={styles.stagesLineWrapper}>
        {/* 1 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute top-[-35px] left-[-50px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircle : ''
            }`}>
            Проектирование
          </h2>
          <div className="flex items-center w-full">
            <div className={`${styles.stagesCircle} ${startAnimation ? styles.activeCircle : ''}`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeFirstLine : ''
              }`}></div>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[-15px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleSecond : ''
            }`}>
            Дизайн
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${
                startAnimation ? styles.activeCircleSecond : ''
              }`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeSecondLine : ''
              }`}></div>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[-20px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleThird : ''
            }`}>
            Верстка
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${
                startAnimation ? styles.activeCircleThird : ''
              }`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeThirdLine : ''
              }`}></div>
          </div>
        </div>
        {/* 4 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[-70px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleFour : ''
            }`}>
            Программирование
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${startAnimation ? styles.activeCircleFour : ''}`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeFourLine : ''
              }`}></div>
          </div>
        </div>
        {/* 5 */}
        <div className="w-[20%] relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[-50px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleFive : ''
            }`}>
            Тестирование
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${startAnimation ? styles.activeCircleFive : ''}`}>
              <div className={styles.miniCircle}></div>
            </div>
            <div
              className={`${styles.stagesLine} ${
                startAnimation ? styles.activeFiveLine : ''
              }`}></div>
          </div>
        </div>
        {/* 6 */}

        {/* 7 */}
        <div className="relative">
          {' '}
          <h2
            className={`absolute opacity-0 top-[-35px] left-[-40px] text-[#5DC792] font-bold text-[18px] ${
              startAnimation ? styles.activeCircleSix : ''
            }`}>
            Поддержка
          </h2>
          <div className="flex items-center w-full">
            <div
              className={`${styles.stagesCircle} ${startAnimation ? styles.activeCircleSix : ''}`}>
              <div className={styles.miniCircle}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-[80%]">
        <p className="text-start text-[19px] font-bold mt-[50px]">
          Разработка программного продукта - это сложный и многотапный процесс, начинающийся с
          постановки задачи. На этапе анализа определяются требования пользователей, а
          проектирование включает в себя разработку структуры и архитектуры продукта. Затем команда
          разработчиков реализует код и проводит тщательное тестирование для выявления и исправления
          ошибок. После успешного завершения тестирования происходит внедрение продукта в рабочую
          среду. Важным этапом является сопровождение, включающее в себя обучение пользователей и
          предоставление технической поддержки. Весь процесс направлен на создание эффективного и
          качественного программного продукта, который соответствует задачам и потребностям
          клиентов.
        </p>
      </div>
    </section>
  );
}
