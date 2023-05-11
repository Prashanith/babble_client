import { IChildren } from "../utils/IChildren";
import AuthProvider from "./authentication/authProvider";
import SecureStoreProvider from "./securestore/secureBoxProvider";

function ContextProvider({ children }: IChildren) {
  return (
    <AuthProvider>
      <SecureStoreProvider>{children}</SecureStoreProvider>
    </AuthProvider>
  );
}

export default ContextProvider;
