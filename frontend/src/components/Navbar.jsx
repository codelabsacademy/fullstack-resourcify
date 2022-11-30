import React, { useContext, useState } from "react";
import Logo from "../assets/cla.svg";
import useAuth from "../hooks/useAuth";
import { IoMdAdd } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useLogout } from "../hooks/useLogout";

export default function Navbar({ isSearching, setIsSearching }) {
  const user = useAuth();
  const { logout } = useLogout();

  const handleLogout = (e) => {
    logout();
  };

  return (
    <>
      {isSearching && (
        <div
          id="search"
          className="h-screen w-full px-2 fixed z-50 left-0 bg-gray-800 opacity-95 flex justify-center pt-16"
          onClick={(e) => {
            if (e.target.id === "search") {
              setIsSearching(false);
            }
          }}
        >
          <input
            type="text"
            autoFocus
            placeholder="Find..."
            className="input md:input-lg w-9/12 rounded-r-none "
          />
          <button
            onClick={() => {
              console.log("search");
            }}
            title="Search"
            className="btn md:btn-lg relative rounded-l-none bg-gray-100 hover:bg-gray-100 btn-link text-gray-700"
          >
            <BiSearchAlt size="2.2em" />
          </button>
        </div>
      )}

      <div className="navbar bg-base-100 drop-shadow-sm">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-md md:text-xl px-2 gap-1"
          >
            <img src={Logo} className="h-6" alt="" />
            Resources
          </Link>
        </div>
        {!isSearching && (
          <div className="flex-none">
            {user && (
              <button title="Add Resource" className="btn btn-circle btn-ghost">
                <IoMdAdd className="text-[1.6em] md:text-[2em]" />
              </button>
            )}
            <button
              onClick={() => {
                setIsSearching(!isSearching);
              }}
              title="Search"
              className="btn btn-circle btn-ghost"
            >
              <BiSearchAlt className="text-[1.6em] md:text-[2em]" />
            </button>
          </div>
        )}
        {!user && (
          <Link to="/login" title="Profil" className="btn btn-circle btn-ghost">
            <CgProfile className="text-[1.6em] md:text-[2em]" />
          </Link>
        )}
        <div
          className="dropdown dropdown-end"
          onClick={() => setIsSearching(false)}
        >
          <label tabIndex={0} className="ml-2 avatar">
            {user && (
              <span className="btn btn-ghost text-gray-500 bg-gray-100 lowercase text-[14px] md:text-lg font-medium border-none hover:bg-gray-200">
                {user.email}
              </span>
            )}
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 z-50"
          >
            {user && (
              <>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
