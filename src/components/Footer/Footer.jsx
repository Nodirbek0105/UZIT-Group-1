import React from 'react';
import styles from './Footer.module.scss';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="./UZIT logo.png" alt="logo" />
      <h3 className="text-[18px] font-bold opacity-[50%]">
        © 2024 liberty UZIT GROUP <br /> Все права защищены
      </h3>
    </footer>
  );
}
