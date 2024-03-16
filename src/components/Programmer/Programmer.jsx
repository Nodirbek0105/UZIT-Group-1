import React from 'react';
import style from './Programmer.module.scss';
import ProgrammerServices from './ProgrammerServices';
import { useTranslation } from 'react-i18next';

export default function Programmer() {
  const { t } = useTranslation();

  const data = [
    {
      title: 'Лендинги',
      subtitle:
        'Короткие и длинные. Адаптив, скорость загрузки, микроанимации, семантика и SEO разметка.',
    },
    {
      title: 'Интернет магазины и корпоративные сайты',
      subtitle:
        'Страницы с интерактивом, формами, корзинами. Доступные интерфейсы для пользователей.',
    },
    {
      title: 'Переделка сайтов',
      subtitle:
        'Переделка уже существующих сайтов, вносим корректировки,делаем дизайн привлекатильнее и дорабатываем функционал',
    },
    {
      title: 'Разработка телеграм ботов',
      subtitle: 'Создание телеграм ботов разной сложности',
    },
    {
      title: 'Админка и дашборды',
      subtitle: 'Много графиков и полей, где важна максимальная реиспользуемость компонентов.',
    },
    {
      title: 'CRM системы',
      subtitle: 'Создание различных CRM систем для автоматизации бизнеса.',
    },
  ];
  return (
    <section className={style.programmer}>
      <h2 className="text-[44px] font-bold text-center lg:text-[80px] md:text-[60px] sm:text-[44px]">
        {t('programmer.mainTitle')}
      </h2>

      <div className={style.programmerWrapper}>
        <ProgrammerServices
          title={t('programmer.title1')}
          img={'./programmer/landing.png'}
          description={t('programmer.subtitle1')}
        />
        <ProgrammerServices
          title={t('programmer.title2')}
          description={t('programmer.subtitle2')}
          img={'./programmer/e-commerce.png'}
        />
        <ProgrammerServices
          title={t('programmer.title3')}
          description={t('programmer.subtitle3')}
          img={'./programmer/change-website.png'}
        />

        <ProgrammerServices
          title={t('programmer.title4')}
          description={t('programmer.subtitle4')}
          img={'./programmer/telegram-bot.png'}
        />
        <ProgrammerServices
          title={t('programmer.title5')}
          description={t('programmer.subtitle5')}
          img={'./programmer/admin-dashboard.png'}
        />
        <ProgrammerServices
          title={t('programmer.title6')}
          description={t('programmer.subtitle6')}
          img={'./programmer/crm.png'}
        />
      </div>
    </section>
  );
}
