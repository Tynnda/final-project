import React, { useState, useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "/css/login.css";

export default function Login({ getUserInfo }) {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const response = await fetch("/login", {
        //     method: "POST",
        //     body: JSON.stringify(values),
        //     headers: {
        //         Accept: "application/json",
        //         "Content-type": "application/json",
        //         "X-CSRF-TOKEN": document
        //             .querySelector('meta[name="csrf-token"]')
        //             .getAttribute("content"),
        //     },
        // });

        const response = await axios.post("/login", values);
        getUserInfo();
        const response_data = response.data;

        navigate("/");
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <main className="login__page">
            <fieldset>
                <legend>Log in</legend>
                    <form action="/" method="post" onSubmit={handleSubmit}>
                        
                        <div className="type">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="type">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>
                        

                        <button>Log in</button>
                        <p>Don't have an account? <a href="/register">Sign up</a></p>
                        
                    </form>
            </fieldset>
        </main>
    );
}
