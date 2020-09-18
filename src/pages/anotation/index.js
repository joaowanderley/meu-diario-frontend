import React from "react"
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import { useUserLogin } from "../../context/User"

import logoImg from "../../assets/logo.svg"
import "./styles.css"

export default function Anotation() {
  const { formLogin, setFormLogin } = useUserLogin();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("_auth")
    history.push("/")
    cleanFields()
  }

  const cleanFields = () => {
    setFormLogin({
      id: "",
      name: "",
      email: "",
      password: "",
      loginError: ""
    })
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="logo img" />
        <span>Olá, {formLogin.name}</span>

        <Link className="button" to="/new/anotation" >Nova anotação</Link>
        <button type="button" onClick={handleLogout}>
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
