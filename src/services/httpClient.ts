import axios from "axios";
import { useAuth } from "../hooks/useAuth";

// function getToken() {
//   return useAuth().state.access_token;
// }

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer `,
  },
});
