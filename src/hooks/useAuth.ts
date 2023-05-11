import { useContext } from "react";
import { AuthContext } from "../providers/authentication/authProvider";

export const useAuth = () => useContext(AuthContext);
