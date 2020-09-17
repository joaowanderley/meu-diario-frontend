import React from 'react'
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg'
import './styles.css'

export default function Anotation() {
  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='logo img' />
        <span>Olá, Alguem</span>

        <Link className="button" to='/new/anotation' >Nova anotação</Link>
        <button type="button">
          <FiPower size={18} color="#F2C94C" />
        </button>
      </header>

      <h1>Anotações</h1>

      <ul>
        <li>
          <p>Anotação de teste de visualização no frontend. proximo passo integrar a API</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  )
}
