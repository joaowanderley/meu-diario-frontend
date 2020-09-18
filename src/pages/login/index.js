import React, { useEffect, useState } from "react"
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom"
import Loader from "react-loader-spinner"

import MainImage from "../../assets/anotation.svg"
import logo from "../../assets/logo.svg"
import "./styles.css"

import { useUserLogin } from "../../context/User"
import api from "../../http/api";

export default function Login() {
  const { formLogin, setFormLogin } = useUserLogin();
  const [loading, setLoading] = useState(false)
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("_auth")

    if (token) {
      history.push("/anotations")
    }
  })
  async function signIn(event) {
    const { email, password } = formLogin
    event.preventDefault();
    setLoading(true)
    try {
      const request = await api.post("auth", { email, password })
      localStorage.setItem("_auth", JSON.stringify(request.data.access_token))
      setFormLogin({
        ...formLogin,
        id: request.data.userResponse.id,
        name: request.data.userResponse.name
      })
      history.push("/anotations")

    } catch (err) {
      setLoading(false)
      setLoginErrorMessage();
    }
  }
  const inputChange = event => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value
    })
  }

  const setLoginErrorMessage = message => {
    const defaultMessage = "Usuário ou senha incorreto"
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
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="study" />
        <form onSubmit={signIn} >
          <h1>Faça seu login</h1>
          <input
            className="inputMargin"
            placeholder="Email"
            name="email"
            value={formLogin.email}
            type="text"
            onChange={inputChange}
          />
          <input
            className="inputMargin"
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
              (<span>Entrar</span>)
            }
          </button>

          <Link className="back-link" onClick={cleanFields} to="/register">
            <FiLogIn size={16} color="#F2C94C" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={MainImage} alt="study" />
    </div>
  )
}
