import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <img className='star' src="./src/assets/img/star.svg" alt="" />
        <p>Fotógrafa e Social Media</p>
      </div>
      <h1>GABRIELLE OREZKO</h1>
      <button><img src="./src/assets/img/WhatsApp.svg" alt="" />Contato</button>

    </header>
  )
}

export default Header