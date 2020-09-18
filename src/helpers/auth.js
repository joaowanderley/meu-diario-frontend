export const isAuthenticated = () => {
  const storage = localStorage.getItem("_auth")
  if (storage) {
    return true;
  } else {
    return false;
  }
}