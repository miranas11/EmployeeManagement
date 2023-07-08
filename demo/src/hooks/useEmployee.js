import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export const useEmployee = () => {
    const token = useSelector((store) => store.auth.jwtToken);
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        dob: "",
        gender: "male",
        address: "",
        country: "",
        city: "",
        skills: [],
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/home/employee/create", employee, {
                headers: { Authorization: `Bearer ${token}` },
            });

            navigate("/home/employee/search");
        } catch (e) {
            if (e.response.status == 422) {
                alert("Please Fill All Details");
            } else {
                alert("Error Occured.Please Try Again");
            }
        }
    };

    const handleEdit = async (event, id) => {
        event.preventDefault();
        try {
            const response = await axios.patch(
                `/home/employee/${id}`,
                employee,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            navigate("/home/employee/search");
        } catch (e) {
            if (e.response.status === 404) {
                alert("Employee NOt FOund");
            }
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "skills") {
            if (e.target.checked) {
                setEmployee((prevEmp) => ({
                    ...prevEmp,
                    skills: [...prevEmp.skills, e.target.value],
                }));
            } else {
                setEmployee((prevEmp) => ({
                    ...prevEmp,
                    skills: [
                        prevEmp.skills.filter((s) => s !== e.target.value),
                    ],
                }));
            }
        } else {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
        }
    };

    return [employee, setEmployee, handleChange, handleSubmit, handleEdit];
};
