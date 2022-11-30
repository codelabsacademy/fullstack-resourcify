import React, { useContext } from "react";
import { useEffect } from "react";
import { Auth } from "../context/Auth";

export default function useAuth() {
  const { user } = useContext(Auth);

  useEffect(() => {
    if (!user) {
      return console.log("No User");
    }else {
      return console.log(`Welcome back ${user.email}`)
    }
  }, [user]);

  return user;
}
