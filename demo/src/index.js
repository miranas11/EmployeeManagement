import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import "../src/styles/modern-normalize.css";
import "../src/styles/login.css";
import "../src/styles/header.css";
import "../src/styles/body.css";
import "../src/styles/sidebar.css";
import "../src/styles/createEmployee.css";
import "../src/styles/searchEmployee.css";
import "./styles/utils.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Home from "./components/Home";
import CreateEmployee from "./components/CreateEmployee";
import SearchEmployee from "./components/SearchEmployee";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/home",
                element: <Main />,
                children: [
                    {
                        path: "index",
                        element: <Home />,
                    },
                    {
                        path: "employee/create",
                        element: <CreateEmployee editForm={false} />,
                    },
                    {
                        path: "employee/search",
                        element: <SearchEmployee />,
                    },
                    {
                        path: "employee/:id",
                        element: <CreateEmployee editForm={true} />,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
reportWebVitals();
