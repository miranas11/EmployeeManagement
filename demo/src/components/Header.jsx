import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Header = () => {
    const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <section className="header">
            <div className="header__logo">
                <h1>MAGNUS</h1>
            </div>
            <div>
                <button
                    className="header__logout-btn btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </section>
    );
};

export default Header;
