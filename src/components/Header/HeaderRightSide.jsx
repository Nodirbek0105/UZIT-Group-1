import React from 'react';
import style from './Header.module.scss';
import ToggleTheme from './ToggleTheme';

export default function HeaderRightSide() {
  const [isPopup, setIsPopup] = React.useState(false);
  const languageSelect = [
    {
      id: 1,
      language: 'RU',
      img: './russian.png',
    },
    {
      id: 2,
      language: 'UZ',
      img: './uzbekistan.png',
    },
    {
      id: 3,
      language: 'EN',
      img: './usa.png',
    },
  ];
  const [languageId, setLangageId] = React.useState(0);
  function isSelectLanguage(number) {
    console.log(number);
  }
  function handlePopup() {
    setIsPopup(!isPopup);
  }
  return (
    <>
      {' '}
      <div className="flex items-center">
        <div className="relative mr-[60px]">
          <div onClick={handlePopup} className="flex items-center">
            <span className="text-[18px] font-normal cursor-pointer">RU</span>
            <img src="./handle-button.png" alt="" />
          </div>

          {isPopup && (
            <div className={style.popup}>
              {languageSelect.map((item, idx) => (
                <div className="w-fit h-fit pr-[20px] pt-[5px]">
                  <ul className="flex items-start">
                    <li onClick={() => isSelectLanguage(idx)}>{item.language}</li>
                    <img className="ml-[5px]" src={item.img} alt="" />
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <ToggleTheme />
        </div>
        <div className={style.share}>
          <img src="./share.png" alt="" />
          <div className={style.shareContent}>
            <a href="#facebook">
              <img src="./facebook.png" alt="socials-icons" />
            </a>
            <a href="#instagram">
              {' '}
              <img src="./instagram.png" alt="socials-icons" />
            </a>
            <a href="#linkedIn">
              {' '}
              <img src="./linkedIn.png" alt="socials-icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
