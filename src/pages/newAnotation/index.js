import React from "react"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import logoImg from "../../assets/logo.svg"
import "./styles.css"

export default function index() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Faça uma anotação</h1>
          <p>Escreva algo do seu interesse. conte-me algo interessante do seu dia</p>

          <Link className="back-link" to="/anotations">
            <FiArrowLeft size={16} color="#F2C94C" />
            Voltar
          </Link>
        </section>

        <form>
          <textarea
            placeholder="Querido diário..."
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
