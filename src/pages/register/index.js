import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function Register() {
  return (
    <div className='register-container'>
      <div className="content">
        <section>
          <img src={logoImg} alt='be the hero' />

          {/* <h1>Cadastro</h1> */}
          <p>Faça seu cadastro, entre na plataforma e faça suas anotações.</p>

          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color="#F2C94C" />
            Já tenho cadastro
          </Link>
        </section>

        <form>
          <input
            placeholder='Nome'
            type='text'
          />
          <input
            placeholder='Email'
            type='text'
          />
          <input
            placeholder='Senha'
            type='password'
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
