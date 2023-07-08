import React, { useState } from "react";
import userIcon from "../img/user_icon.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isEmployeeOpen, setisEmployeeOpen] = useState(false);
    const [isMoreOpen, setisMoreOpen] = useState(false);
    return (
        <section className="sidebar">
            <div className="sidebar__user">
                <img
                    className="sidebar__user-img"
                    src={userIcon}
                    alt="profile"
                ></img>
                <div className="sidebar__user-info">
                    <h3>Guest User</h3>
                    <p>User</p>
                </div>
            </div>
            <nav className="sidebar__nav-container">
                <ul className="siderbar__nav">
                    <li className="sidebar__nav-items">
                        <Link to={"index"}>Home</Link>
                    </li>
                    <li
                        className="sidebar__nav-items "
                        onClick={() => {
                            setisEmployeeOpen(!isEmployeeOpen);
                            setisMoreOpen(false);
                        }}
                    >
                        Employee
                    </li>
                    {isEmployeeOpen && (
                        <ul className="siderbar__nested-nav ">
                            <li className="sidebar__nested-nav-items">
                                <Link to={"employee/create"}>Create</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link to={"employee/search"}>Search</Link>
                            </li>
                        </ul>
                    )}
                    <li
                        className="sidebar__nav-items "
                        onClick={() => {
                            setisMoreOpen(!isMoreOpen);
                            setisEmployeeOpen(false);
                        }}
                    >
                        More
                    </li>
                    {isMoreOpen && (
                        <ul className="siderbar__nested-nav">
                            <li className="sidebar__nested-nav-items">
                                <Link>Multiple Tabs</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>Menu</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>Autocomplete</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>Collapsible Content</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>Images</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>Slider</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>ToolTips</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>Popups</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>Links</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>Css Properties</Link>
                            </li>
                            <li className="sidebar__nested-nav-items">
                                <Link>iFrames</Link>
                            </li>
                        </ul>
                    )}
                    <li className="sidebar__nav-items">Settings</li>
                </ul>
            </nav>
        </section>
    );
};

export default Sidebar;
