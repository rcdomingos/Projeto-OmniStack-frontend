import axios from "axios";


const api = axios.create({
  baseURL: "https://rcd-omnistack-backend.herokuapp.com"
});

export default api;