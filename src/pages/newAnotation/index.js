import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import logoImg from "../../assets/logo.svg"
import "./styles.css"

import { useUserLogin } from "../../context/User"
import api from '../../http/api'

export default function NewAnotation() {
  const [text, setText] = useState("");
  const { formLogin, } = useUserLogin();
  const history = useHistory();

  async function newAnotation(event) {
    event.preventDefault();

    const data = {
      text
    }

    const token = JSON.parse(localStorage.getItem("_auth"))

    try {
      await api.post("anotation", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          user_id: formLogin.id
        }
      })
      setText("")
      history.push("/anotations")
    } catch (error) {
      alert("Desculpa, algo deu errado :/")
    }
  }
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

        <form onSubmit={newAnotation}>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Querido diário..."
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
