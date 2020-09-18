import axios from "axios"

const server = axios.create({
  baseURL: "https://meudiario.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
})

export default server