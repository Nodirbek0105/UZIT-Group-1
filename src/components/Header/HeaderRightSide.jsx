import React from 'react';
import style from './Header.module.scss';
import ToggleTheme from './ToggleTheme';

export default function HeaderRightSide() {
  const [isPopup, setIsPopup] = React.useState(false);
  const languageSelect = ['RU', 'ENG', 'UZ'];
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
      <div className='flex items-center'>
             <div className="relative mr-[60px]">
        <div onClick={handlePopup} className="flex items-center">
          <span className='text-[18px] font-normal'>RU</span>
          <img src="./handle-button.png" alt="" />
        </div>

        {isPopup && (
          <div className={style.popup}>
            {languageSelect.map((item, idx) => (
              <div>
                <ul>
                  <li onClick={() => isSelectLanguage(idx)}>{item}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <ToggleTheme/>


      </div>
      <div className={style.share}>
              <img src="./share.png" alt="" />
      </div>
      </div>
 

    </>
  );
}
