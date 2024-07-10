import React, { createContext, useState, useContext } from 'react';

const LoginContext = createContext(null);

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});

  const login = (user) => {
    setIsLoggedIn(true);
    setUsername(user.username);
    setUser(user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setUser({});
  };

  const value = { isLoggedIn, user, username, login, logout };

  return (
    <LoginContext.Provider value={value}>  
      {children}
    </LoginContext.Provider>  
  );
};

export { LoginContext, LoginProvider };

