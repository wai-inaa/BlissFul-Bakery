import React, { createContext, useReducer, useContext } from 'react';

// Create a context
const AppContext = createContext();

// Initial state
const initialState = {
  isLoggedIn: false,
  userName: '',
};

// Reducer function
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

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use context
export const useAppContext = () => useContext(AppContext);
