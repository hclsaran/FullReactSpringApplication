import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8383/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
