import React from "react";

const Navbar = () => {
  return (
  <nav className="bg-gray-900 text-white flex justify-between h-10 items-center">
    <div className="logo text-lg font-bold px-2">GetMeAChai</div>
    <ul className="px-2 flex gap-3 justify-around">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign-up</li>
        <li>Login</li>
    </ul>
  </nav>
  )
};

export default Navbar;
