import React, { createRef, useRef, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { IoIosLogIn } from "react-icons/io";

export default function Login() {
  const email = createRef(null);
  const password = createRef(null);
  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email.current.value, password.current.value);
  };
  return (
    <>
      <div className="my-6">
        <IoIosLogIn className="block mx-auto text-gray-300" size="6em" />
        <h1 className="text-center text-2xl text-gray-300">Sign in and start adding resources / Quote</h1>
      </div>
      <form className="form-control flex flex-col gap-4">
        <div>
          <label className="input-group">
            <span className="bg-gray-100 text-gray-600">Email</span>
            <input
              type="text"
              ref={email}
              placeholder="info@site.com"
              autoComplete="username"
              className="input input-bordered w-full border-gray-100"
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span className="bg-gray-100 text-gray-600">Password</span>
            <input
              type="password"
              ref={password}
              placeholder="..."
              autoComplete="current-password"
              className="input input-bordered w-full border-gray-100"
            />
          </label>
          <label className="label">
            {error && (
              <span className="label-text text-error">{error.message}</span>
            )}
          </label>
        </div>
        <div>
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="btn btn-square w-full bg-gray-100 text-gray-600 hover:bg-gray-300 border-none"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
