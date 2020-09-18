import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi";
import Loader from "react-loader-spinner"

import logoImg from "../../assets/logo.svg"
import "./styles.css"

import { useUserLogin } from "../../context/User"
import api from "../../http/api"

export default function Register() {
  const { formLogin, setFormLogin } = useUserLogin();
  const [loading, setLoading] = useState(false)

  const history = useHistory();

  async function registerUser(e) {
    e.preventDefault();
    const data = {
      name: formLogin.name,
      email: formLogin.email,
      password: formLogin.password
    }

    if (formLogin.password === "") {
      setLoginErrorMessage()
    } else {
      try {
        await api.post("users", data)

        cleanFields()
        setLoading(true);
        history.push("/")
      } catch (error) {
        setLoading(false);
        setLoginErrorMessage();
      }

    }

  }
  const inputChange = event => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value
    })
  }

  const setLoginErrorMessage = message => {
    const defaultMessage = "Preencha todos os campos corretamente"
    setFormLogin({
      ...formLogin,
      loginError: message ? message : defaultMessage
    })
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
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />

          <p>Faça seu cadastro, entre na plataforma e faça suas anotações.</p>

          <Link className="back-link" onClick={cleanFields} to="/">
            <FiArrowLeft size={16} color="#F2C94C" />
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={registerUser}>
          <input
            placeholder="Nome"
            name="name"
            value={formLogin.name}
            type="text"
            onChange={inputChange}
          />
          <input
            placeholder="Email"
            name="email"
            value={formLogin.email}
            type="text"
            onChange={inputChange}
          />
          <input
            placeholder="Senha"
            type="password"
            name="password"
            value={formLogin.password}
            onChange={inputChange}
          />
          {formLogin.loginError && (<p className="errorMessage">{formLogin.loginError}</p>)}
          <button className="button" type="submit" disabled={loading}>
            {loading ?
              (<div style={{ marginTop: "8px" }}>
                <Loader
                  type="TailSpin"
                  color="#41414D"
                  height={30}
                  width={30}
                />
              </div>) :
              (<span>Cadastrar</span>)
            }
          </button>
        </form>
      </div>
    </div>
  )
}
