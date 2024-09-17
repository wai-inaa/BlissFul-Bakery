import React, { createContext, useReducer, useContext } from 'react';
const AppContext = createContext();
const initialState = {
  isLoggedIn: false,
  userName: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, userName: action.payload };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, userName: '' };
    default:
      return state;
  }
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
