import React, { createRef } from "react";
import { IoIosLogIn } from "react-icons/io";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const { login, isLoading, error } = useLogin();
  console.log("Rendering: Login");
  const email = createRef(null);
  const password = createRef(null);

  const handleLogin = async (e) => {
    await login(email.current.value, password.current.value);
  };
  return (
    <>
      <div className="shadow-md md:m-6 p-4 rounded-md flex flex-col gap-6">
        <IoIosLogIn className="block mx-auto text-gray-300" size="6em" />
        <h1 className="text-center text-2xl text-gray-300">
          Sign-in to your account
        </h1>

        <div className="form-control flex flex-col gap-4">
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
        </div>
        {error && <span className="text-red-500 p-2">{error.message}</span>}
        <div>
<button
  onClick={handleLogin}
  disabled={isLoading}
  className="btn btn-square w-full bg-gray-100 text-gray-600 hover:bg-gray-300 border-none"
>
  {isLoading && 'A moment please!'}
  {!isLoading && 'Login'}
</button>
        </div>
      </div>
    </>
  );
}
