import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <section className="body">
            <Sidebar />
            <Outlet />
        </section>
    );
};

export default Body;
