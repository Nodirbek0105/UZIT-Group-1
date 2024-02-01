import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderCenter() {
  return (
    <div> 
    {/* Header center */}
  <ul className='flex items-center'>
  
    <a href="#menu-link"><li>О нас</li></a>
    <a href="#menu-link"><li>Команда</li></a>
    <a href="#menu-link"><li>Услуги</li></a>
    <a href="#menu-link"><li>Отзывы</li></a>
    <a href="#menu-link"><li>Контакты</li></a>
    <a href="#menu-link"><li>Команда</li></a>
  </ul>

  </div>
  )
}
