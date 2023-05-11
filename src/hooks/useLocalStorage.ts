import { useContext } from "react";
import { SecureStoreService } from "../providers/securestore/secureBoxProvider";

export const useStore = () => useContext(SecureStoreService);
