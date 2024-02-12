import React from 'react';
import style from './Team.module.scss';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
export default function Team() {
  const { t } = useTranslation();
  return (
    <section className={style.team}>
      <h2>{t('team.title')}</h2>
      <div className={style.teamWrapper}>
        <div className={style.teamWrapperLeft}>
          <p style={{ whiteSpace: 'pre-line' }}>{t('team.subtitle')}</p>
          <Button width={219} height={52} font={24}>
            {t('team.button')}
          </Button>
        </div>
        <div className={style.teamWrapperRight}>
          <img src="./team.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
