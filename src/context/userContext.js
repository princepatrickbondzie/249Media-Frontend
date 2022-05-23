import { createContext, useState, useReducer } from "react";

export const GeneralContext = createContext();

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  post: [],
  product: [],
  cart: [],
};

const GeneralContextProvider = (props) => {
  const [state, setState] = useState(initialState);

  const setUser = (user, token) => {
    setState({ ...state, user: user, token: token, isLoggedIn: true });
  };

  const logout = () => {
    setState({ ...state, user: null, token: null, isLoggedIn: false });
  };

  return (
    <GeneralContext.Provider value={{ state, setUser, logout }}>
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
