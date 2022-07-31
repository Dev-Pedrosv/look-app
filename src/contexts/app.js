import React, { createContext, useState } from "react";

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
