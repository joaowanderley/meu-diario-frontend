import React, { createContext, useState, useContext } from "react"

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [formLogin, setFormLogin] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    loginError: ""
  })
  
  return (
    <UserContext.Provider
      value={{
        formLogin,
        setFormLogin
      }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserLogin() {
  const context = useContext(UserContext)
  const { formLogin, setFormLogin } = context
  return { formLogin, setFormLogin }
}