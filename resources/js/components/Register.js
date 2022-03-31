import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "/css/register.css";

const Register = ({ getUserInfo }) => {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_num: "",
        password: "",
        password_confirmation: "",
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/register", values);

            await getUserInfo();

            // console.log(response);
        } catch (error) {
            if (error.response.status == 422) {
                setErrors(error.response.data.errors);
                console.log("Validation failed");
            }
        }

        navigate("/");
    };

    return (
        <main className="register__page">
            <fieldset>
                <legend>Sign up</legend>
                <form action="" method="post" onSubmit={handleSubmit}>
                    {Object.values(errors).map((field_errors, i) =>
                        field_errors.map((error, j) => (
                            <div key={`${i}- ${j}`} className="error">
                                {error}
                            </div>
                        ))
                    )} 
                    <div className="type">
                        <label>First name</label>
                        <input
                            type="name"
                            name="first_name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="type">
                        <label>Last name</label>
                        <input
                            type="name"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="type">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="type">
                        <label>Phone number</label>
                        <input
                            type="text"
                            name="phone_num"
                            value={values.phone_num}
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

                    <div className="type">
                        <label>Verify password</label>

                        <input
                            type="password"
                            name="password_confirmation"
                            value={values.password_confirmation}
                            onChange={handleChange}
                        />
                    </div>

                    <p className="privacy">By signing up, you agree to <a>Privacy Policy</a></p>

                        <button>Sign up</button>
                    
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </form>
            </fieldset>
        </main>
    );
};

export default Register;
