import { useContext, useState } from "react";
import { Auth } from "../contexts/Auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(Auth);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        body: JSON.stringify({ email, password }),
      });

      let json;

      try {
        json = await response.json();
      } catch (error) {
        console.log("catch", error);
      }

      console.log("json", json);

      if (json.name === "Error") {
        setError(json.message);
        setIsLoading(false);
      }

      if (!response.ok) {
        setIsLoading(false);
        setError(json);
      }

      if (response.ok) {
        // Save the user and token in the localstorage
        localStorage.setItem("user", JSON.stringify(json));

        // Updating the global Auth context
        dispatch({ type: "LOGIN", payload: json });

        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { error, isLoading, login };
};
