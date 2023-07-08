import React, { useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn]);

    return (
        <section className="main">
            <Header />
            <Body />
        </section>
    );
};

export default Main;
