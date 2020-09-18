import React, { useState, useEffect } from "react"
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import { useUserLogin } from "../../context/User"

import logoImg from "../../assets/logo.svg"
import "./styles.css"

import api from "../../http/api"

export default function Anotation() {
  const { formLogin, setFormLogin } = useUserLogin();
  const [anotations, setAnotations] = useState([]);
  
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("_auth"))
  
  useEffect(() => {
    try {
      api.get("anotations", {
        headers: {
          Authorization: `Bearer ${token}`,
          user_id: formLogin.id
        }
      }).then(response => {
        setAnotations(response.data)
        
      }).catch(response => {
        console.log(response)
      })
    } catch (error) {
      console.log("aind nao tem anotção")
    }
  }, [formLogin.id])

  async function deleteAnotation(uid) {
    try {
      await api.delete(`anotations/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          user_id: formLogin.id
        }
      })
      setAnotations(anotations.filter(anotation => anotation.uid !== uid));
      console.log()
    } catch (err) {
      alert("Desculpa, algo deu errado :/")
    }
  }
  const handleLogout = () => {
    localStorage.clear()
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
        
        { anotations.map(anotation => (
          <li key={anotation.uid}>
            <p>{anotation.text}</p>
            <button onClick={() => deleteAnotation(anotation.uid)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

        )) }
      </ul>
    </div>
  )
}
