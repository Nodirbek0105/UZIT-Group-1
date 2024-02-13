import React from 'react';
import styles from './Contacts.module.scss';
import Button from '../Button/Button.jsx';
import { useLocation } from 'react-router';

export default function Contacts() {
  const {t} = useLocation()
  return (
    <section className={styles.contacts}>
      <h1 className="text-[90px] font-bold">Наши контакты</h1>
      <div className={styles.contactsWrapper}>
        <div className={styles.contactsLeft}>
          <iframe
            className="mt-[70px] ml-[25px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.424438348312!2d66.98303877650403!3d39.68515989983944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19c517fa93c9%3A0xa8444b0a543319ca!2z0JjQsdC9INCh0LjQvdGLIDc!5e0!3m2!1sru!2s!4v1707369184930!5m2!1sru!2s"
            width="700"
            height="475"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={styles.contactsRight}>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="#F2F2F2 text-[30px] font-bold">Наши номера</h3>
              <a
                className="text-[18px] opacity-[50%] hover:opacity-[100%] font-bold"
                href="tel:+998905044665">
                +998(90)504-46-65
              </a>
              <a
                className="text-[18px] opacity-[50%] hover:opacity-[100%] font-bold"
                href="tel:+998905044665">
                +998(90)504-46-65
              </a>
              <h3 className="#F2F2F2 text-[30px] font-bold">Наша почта</h3>
              <a
                className="text-[18px] opacity-[50%] hover:opacity-[100%] font-bold"
                href="https://mail.google.com/mail/u/0/#inbox">
                uzitgroup@gmail.com
              </a>
              <h3 className="#F2F2F2 text-[30px] font-bold">Адресс</h3>
              <a className="text-[18px] opacity-[50%] hover:opacity-[100%] font-bold" href="dsa">
                Ibn Sino, 7, Samarkand, UZ
              </a>
            </div>
            <div className="ml-[120px] pr-[50px]">
              <h3 className="#F2F2F2 text-[30px] font-bold">Добраться</h3>
              <span className="opacity-[50%]">до нас можно через</span>
              <div className="mt-[25px]">
                {' '}
                <Button font={24} width={184} height={52}>
                  Yandex
                </Button>
              </div>
              <div className="mt-[70px]">
                {' '}
                <Button font={24} width={184} height={52}>
                  Google maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
