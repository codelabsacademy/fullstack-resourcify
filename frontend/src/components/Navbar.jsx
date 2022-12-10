import React from "react";
import Logo from "../assets/cla.svg";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import { useContext } from "react";
import { Auth } from "../contexts/Auth";

export default function Navbar() {
  console.log("Rendering: Navbar");

  return (
    <>
      <div className="navbar bg-base-100 drop-shadow-sm lg:px-20 md:mx-5">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-md md:text-xl px-2 gap-1"
          >
            <img src={Logo} className="h-6" alt="" />
            Resources
          </Link>
        </div>

        <UserDropdown />
      </div>
    </>
  );
}
