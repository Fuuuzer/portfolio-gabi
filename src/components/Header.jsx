import React from 'react'
import './Header.css'
import star from '../assets/img/star.svg';
import whats from '../assets/img/WhatsApp.svg';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <img className='star' src={star} alt="" />
        <p className='header-desc'>Fotógrafa e Social Media</p>
      </div>
      <h1>GABRIELLE OREZKO</h1>
      <button><img src={whats} alt="" />Contato</button>

    </header>
  )
}

export default Header