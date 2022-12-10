import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("CLA");
  console.log("Rendering: AuthProvider", name)
  return <Auth.Provider value={[name, setName]}>{children}</Auth.Provider>;
};
