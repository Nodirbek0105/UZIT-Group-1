import React from 'react';
import styles from './Questions.module.scss';
import Button from '../Button/Button';

export default function Form() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="ваше имя" />
      <input type="number" placeholder="номер" />
      <textarea type="text" placeholder="ваши вопросы" />

      <Button type="submit" height={52} font={24}>
        Записаться
      </Button>
    </form>
  );
}
