import React, { useEffect } from "react";

import { useEmployee } from "../hooks/useEmployee";
import { useLocation } from "react-router-dom";

const CreateEmployee = ({ editForm }) => {
    const location = useLocation();

    const [employee, setEmployee, handleChange, handleSubmit, handleEdit] =
        useEmployee();

    useEffect(() => {
        if (editForm) {
            setEmployee(location.state);
        }
    }, []);

    return (
        <section className="create">
            <h3>{editForm === true ? "Edit Employee" : "Create Employee"}</h3>
            <form
                className="create__employee-form"
                onSubmit={(event) =>
                    editForm === true
                        ? handleEdit(event, employee._id)
                        : handleSubmit(event)
                }
            >
                <label>
                    First Name{" "}
                    <input
                        type="text"
                        name="firstname"
                        value={employee.firstname}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name{" "}
                    <input
                        type="text"
                        name="lastname"
                        value={employee.lastname}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email{" "}
                    <input
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Mobile{" "}
                    <input
                        type="number"
                        name="mobile"
                        value={employee.mobile}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    DOB{" "}
                    <input
                        type="date"
                        name="dob"
                        value={employee.dob}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Gender
                    <select
                        name="gender"
                        value={employee.gender}
                        onChange={handleChange}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>

                <label className="create__address">
                    Address{" "}
                    <textarea
                        rows="4"
                        cols=""
                        name="address"
                        value={employee.address}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Country{" "}
                    <input
                        type="text"
                        name="country"
                        value={employee.country}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    City{" "}
                    <input
                        type="text"
                        name="city"
                        value={employee.city}
                        onChange={handleChange}
                    />
                </label>

                <label className="create__skills">
                    Skills
                    <div className="create__checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="React"
                                onChange={handleChange}
                            />{" "}
                            React
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="CSS"
                                onChange={handleChange}
                            />{" "}
                            CSS
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="Node"
                                onChange={handleChange}
                            />{" "}
                            Node
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="AWS"
                                onChange={handleChange}
                            />{" "}
                            AWS
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="Flutter"
                                onChange={handleChange}
                            />{" "}
                            Flutter
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="Angular"
                                onChange={handleChange}
                            />{" "}
                            Angular
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="skills"
                                value="MySQL"
                                onChange={handleChange}
                            />{" "}
                            MySQL
                        </label>
                    </div>
                </label>
                <label>
                    <input className="create__btn btn" type="submit"></input>
                </label>
            </form>
        </section>
    );
};

export default CreateEmployee;
