import { useState } from 'react';
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem("user");

  try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Erro ao ler usuário do localStorage:", error);
      return null;
    }
  });

  const updateUser = (userData) => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};