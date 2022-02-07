import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import "../../assets/css/Navbar.css";
import { IconContext } from "react-icons";
import UserMenu from "./UserMenu";
import { Dropdown, Button } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { alertify } from "alertifyjs";
import { useStore } from "./../../store/index";
import { logout } from "./../../store/user/userActions";
import { isEmployee, isManager } from "./../../utils/auth";
import * as IoIcons from "react-icons/io";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { userState, dispatchUser } = useStore();
  const { user, isUserLogin } = userState;

  return (
    <>
      <div className="navbar">
        {!sidebar ? (
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        ) : (
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </Link>
        )}

        <Link to="/" className="logonavbar">
          <img src="assets/images/logo.png" alt="logo" />
        </Link>
        <UserMenu />
      </div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-text">
              <Link to="/">
                <AiIcons.AiFillHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/about-us">
                <IoIcons.IoMdPeople />
                <span>About-Us</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/services">
                <FaIcons.FaServicestack />
                <span>Services</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/pricing">
                <IoIcons.IoIosPricetags />
                <span>Pricing</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/contact-us">
                <AiIcons.AiOutlineContacts />
                <span>Contact Us</span>
              </Link>
            </li>

            {isUserLogin ? (
              <>
                {" "}
                <div className="divider"></div>
                <li className="nav-text">
                  <Link to="/my-dashboard">
                    <AiIcons.AiFillHome />
                    <span>My-UTDBANK</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/my-account">
                    <FaIcons.FaRegMoneyBillAlt />
                    <span>My-Account</span>
                  </Link>
                </li>
                <li className="nav-text">
                  <Link to="/my-transfers">
                    <GiIcons.GiReceiveMoney />
                    <span>My-Transfers</span>
                  </Link>
                </li>
                {isManager(user.roles) && (
                  <>
                    <div className="divider"></div>
                    <li className="nav-text">
                      <Link to="/usermanagement">
                        <FaIcons.FaUsersCog />
                        <span>Management</span>
                      </Link>
                    </li>
                  </>
                )}
                {isEmployee(user.roles) && (
                  <>
                    <div className="divider"></div>
                    <li className="nav-text">
                      <Link to="/emp-usermanagement">
                        <FaIcons.FaUsersCog />
                        <span>Management</span>
                      </Link>
                    </li>
                  </>
                )}
              </>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
