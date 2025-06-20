// src/utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://wedlink-backend.onrender.com/api",
  withCredentials: true,
});

export default instance;
