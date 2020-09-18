import axios from "axios"

const server = axios.create({
  baseURL: "https://meudiario.herokuapp.com"
})

export default server;