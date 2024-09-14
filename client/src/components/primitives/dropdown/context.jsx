import { createContext, useContext, useState } from "react";

// Create the context
const DropdownContext = createContext();

// Create a custom hook to use the DropdownContext
export const useDropdown = () => useContext(DropdownContext);

// Create the provider component
export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};
