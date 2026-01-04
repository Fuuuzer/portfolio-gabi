import React from 'react'
import './Header.css'
import star from '../assets/img/star.svg';
import whats from '../assets/img/WhatsApp.svg';

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <header className='header'>
      <div className='header-info'>
        <img className='star' src={star} alt="" />
        <p>Fotógrafa e Social Media</p>
      </div>
      <h1 className='title'>GABRIELLE OREZKO</h1>
      <button><img src={whats} alt="" />Contato</button>
      <svg onClick={() => { setMenuActive((prev) => !prev) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="menu">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {menuActive &&
        <div className='contact-container'>
          <p><img className='star' src={star} alt="" />Contato</p>
          <p><img className='star' src={star} alt="" />Me siga</p>
        </div>}


    </header>
  )
}

export default Header