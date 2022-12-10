import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../contexts/Auth";

export default function UserDropdown() {
  const { user } = useContext(Auth);
  console.log("Rendering: UserDropdown");
  return (
    <div className="dropdown dropdown-end">
      {!user && (
        <Link to="/login" tabIndex={0} className="ml-2 avatar">
          <span className="btn btn-ghost text-gray-500 bg-gray-100 lowercase text-[14px] md:text-lg font-medium border-none hover:bg-gray-200">
            Login
          </span>
        </Link>
      )}
      {user && (
        <label tabIndex={0} className="ml-2 avatar">
          <span className="btn btn-ghost text-gray-500 bg-gray-100 lowercase text-[14px] md:text-lg font-medium border-none hover:bg-gray-200">
            {user.email}
          </span>
        </label>
      )}
      {user && (
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 z-50"
        >
          <>
            <li>
              <Link to="/user" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </>
        </ul>
      )}
    </div>
  );
}
