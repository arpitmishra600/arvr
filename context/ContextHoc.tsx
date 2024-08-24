import React, { createContext, useState, ReactNode, FC } from 'react';

// Define the shape of the context data
interface AppContextProps {
  state: null;
  setState: React.Dispatch<React.SetStateAction<null>>;
}

// Create the context with default values
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create a provider component
const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState(null);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
