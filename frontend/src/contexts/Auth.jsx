import { useEffect } from "react";
import { createContext, useReducer } from "react";

export const Auth = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      localStorage.removeItem("user");
      return { user: null };

    default:
      break;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      return dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("Auth State:", state);

  return (
    <Auth.Provider value={{ ...state, dispatch }}>{children}</Auth.Provider>
  );
};
