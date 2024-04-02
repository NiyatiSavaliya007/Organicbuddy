export const base_url = "http://localhost:5000/api/";
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDYyMmM4ZDAwZDRlMTBlNzg5ZTUwYiIsImlhdCI6MTcxMjA0NDU1MywiZXhwIjoxNzEyMTMwOTUzfQ.pLeuGtjNbEx37vfr7Qz2NbBMf2t1uSsziy8bBapc468"
    }`,
    Accept: "application/json",
  },
};
