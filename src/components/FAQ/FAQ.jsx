import React from 'react';
import styles from './FAQ.module.scss';
import Accordion from './Accordions';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <section className={styles.faq}>
      <div className={styles.faqWrapper}>
        <h2 className="text-[90px] font-bold mt-[70px]">{t('FAQ.title')}</h2>
        <Accordion
          title={t('FAQ.mainTitle1')}
          answer={t('FAQ.answer1')}
        />
        <Accordion
          title="Какие документы нужны чтобы сдать эзкамен?"
          answer={`UZIT Group предлагает многочисленные сертификационные 
           программы и IT-экзамены, такие как GRE, GMAT, ACCA, CFA, сертификаты \n от Microsoft, Google, Facebook, Amazon и другие, создавая возможности для \n развития навыков в области информационных технологий.`}
        />
        <Accordion
          title="Какие документы нужны чтобы сдать эзкамен?"
          answer={`UZIT Group предлагает многочисленные сертификационные 
           программы и IT-экзамены, такие как GRE, GMAT, ACCA, CFA, сертификаты \n от Microsoft, Google, Facebook, Amazon и другие, создавая возможности для \n развития навыков в области информационных технологий.`}
        />
        <Accordion
          title="Какие документы нужны чтобы сдать эзкамен?"
          answer={`UZIT Group предлагает многочисленные сертификационные 
           программы и IT-экзамены, такие как GRE, GMAT, ACCA, CFA, сертификаты \n от Microsoft, Google, Facebook, Amazon и другие, создавая возможности для \n развития навыков в области информационных технологий.`}
        />
      </div>
    </section>
  );
}
