import axios from 'axios';

const BASE_URL = "http://backend:8080/api/topics";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
