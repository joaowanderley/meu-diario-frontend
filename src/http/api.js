import server from "./server"

const api = {
  signIn: (values) => server.post("/auth", values)
};

export default api;