import axios from "axios";
const baseURL = "http://localhost:5000/api";

export default axios.create({
  baseURL,
  headers: {
    'Acess-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
})

export const publicRequest = axios.create({
  baseURL: baseURL,
});

