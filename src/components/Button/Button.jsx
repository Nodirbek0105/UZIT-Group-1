import React from 'react';
import style from './Button.module.scss';

export default function Button({ children, width, height, font, ...props }) {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    border: '1px solid #6B8C49',
    fontWeight: '700',
    fontSize: font,
    textAlign: 'center',
  };

  return <button {...props} style={buttonStyle}>{children}</button>;
}
