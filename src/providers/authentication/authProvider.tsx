/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";
import {
  AuthenticationModel,
  IAuthenticationModel,
} from "../../models/classes/models";
import { IChildren } from "../../utils/IChildren";

interface IAuthContextProps {
  state: IAuthenticationModel;
  getAccessToken: any;
  updateAccessToken: any;
  setAccessToken: any;
}

const AuthContext = createContext<IAuthContextProps>({
  state: new AuthenticationModel("", "", new Date(), new Date()),
  getAccessToken: () => {},
  updateAccessToken: () => {},
  setAccessToken: () => {},
});

function AuthProvider({ children }: IChildren) {
  const [authentication, setAuthentication] = useState(
    new AuthenticationModel("", "", new Date(), new Date())
  );

  function updateAccessToken(auth: AuthenticationModel): void {
    setAuthentication(auth);
  }

  function getAccessToken() {
    return authentication;
  }

  function setAccessToken(auth: AuthenticationModel) {
    setAuthentication(auth);
  }
  return (
    <AuthContext.Provider
      value={{
        state: authentication,
        getAccessToken: getAccessToken,
        updateAccessToken: updateAccessToken,
        setAccessToken: setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export { AuthContext, AuthProvider };
