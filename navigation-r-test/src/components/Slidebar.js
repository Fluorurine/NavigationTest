import React, { useState } from "react";
import { FaBars, FaTh, FaThList, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Slidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/",
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
      <div style={{ width: isOpen ? "300px" : "50px" }} className="slidebar">
        <div className="top_section">
          {/* Đây là Header Logo nhá*/}
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            Logo
          </h1>
          <div className="bars" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <>
              <NavLink
                className="link"
                to={item.path}
                key={item.index}
                activeClassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  className="link-text"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  {item.name}
                </div>
              </NavLink>
            </>
          );
        })}
      </div>
      <main>{children}</main>
    </div>
  );
}
