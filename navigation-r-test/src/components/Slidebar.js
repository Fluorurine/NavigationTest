import React from "react";
import { FaBars, FaTh, FaThList, FaUserAlt } from "react-icons/fa";

export default function Slidebar() {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/todo",
      name: "Todo",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div className="slidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
}
