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

            console.log(response);
        } catch (error) {
            if (error.response.status == 422) {
                setErrors(error.response.data.errors);
                console.log("Validation failed");
            }
        }

        navigate("/");
    };

    return (
        <main className="register-main">
            <fieldset>
                <legend>Register</legend>
                <form action="" method="post" onSubmit={handleSubmit}>
                    {Object.values(errors).map((field_errors, i) =>
                        field_errors.map((error, j) => (
                            <div key={`${i}- ${j}`} className="error">
                                {error}
                            </div>
                        ))
                    )}
                    <div>
                        <label>First name</label>
                        <br />
                        <input
                            type="name"
                            name="first_name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Last name</label>
                        <br />
                        <input
                            type="name"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Phone number</label>
                        <br />
                        <input
                            type="number"
                            name="phone_num"
                            value={values.phone_num}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Verify password</label>
                        <br />
                        <input
                            type="password"
                            name="password_confirmation"
                            value={values.password_confirmation}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>I agree with privacy policy</label>
                        <input type="checkbox" name="checkbox" />
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </form>
            </fieldset>
        </main>
    );
};

export default Register;
