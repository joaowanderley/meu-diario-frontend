import React from 'react'
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import "./styles.css"
import logo from '../../assets/logo.svg'
import MainImage from '../../assets/anotation.svg'

export default function Login() {
  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logo} alt='study' />

        <form>
          <h1>Faça seu logon</h1>
          <input
            className='inputMargin'
            placeholder='Email'
            type='text'
          />
          <input
            className='inputMargin'
            placeholder='Senha'
            type='password'
          />
          <button className='button' type='submit'>Entrar</button>

          <Link className="back-link" to='/register'>
            <FiLogIn size={16} color="#F2C94C" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={MainImage} alt='study' />
    </div>
  )
}
