import React, { createContext, useReducer, useState } from "react";
import { IChildren } from "../../utils/IChildren";

type SECURE_STORE = {
  key: string;
  value: string;
};

interface ISecureStoreProps {
  state: SECURE_STORE | unknown;
  action: () => void;
}

enum STORE_ACTIONS {
  CREATE_VALUE,
  DELETE_VALUE,
  UPDATE_VALUE,
  READ_VALUE,
}

function secureStoreReducer(
  state: SECURE_STORE,
  action: STORE_ACTIONS,
  payload: SECURE_STORE
): any {
  const store: SECURE_STORE = {
    key: "",
    value: "",
  };
  let tempVal;
  switch (action) {
    case STORE_ACTIONS.CREATE_VALUE:
    case STORE_ACTIONS.UPDATE_VALUE:
      window.localStorage.setItem(payload.key, JSON.stringify(payload.value));
      return payload;
    case STORE_ACTIONS.READ_VALUE:
      tempVal = JSON.parse(window.localStorage.getItem(payload.key) ?? "");
      if (tempVal.toString().length > 0) {
        return { key: payload.key, value: tempVal };
      }
      return store;
    case STORE_ACTIONS.DELETE_VALUE:
      window.localStorage.removeItem(payload.key);
      return { key: "", value: "" };
    default:
      return store;
  }
}

const SecureStoreService = createContext<ISecureStoreProps>({
  state: { key: "", value: "" },
  action: () => {
    //
  },
});

function SecureStoreProvider({ children }: IChildren) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [secureStore, dispatchStoreAction] = useReducer<any, SECURE_STORE>(
    secureStoreReducer,
    { key: "", value: "" },
    (v) => v
  );

  const value: ISecureStoreProps = {
    state: secureStore,
    action: dispatchStoreAction,
  };
  return (
    <SecureStoreService.Provider value={value}>
      {children}
    </SecureStoreService.Provider>
  );
}

export default SecureStoreProvider;

export { SecureStoreProvider, SecureStoreService };

// eslint-disable-next-line react-refresh/only-export-components
export type { SECURE_STORE, STORE_ACTIONS };
