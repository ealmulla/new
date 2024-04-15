import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const dataToSend = {
          email: formData.email,
          password: formData.password
        };

        const response = await axios.post(
          "http://localhost:8000/users/login",
          dataToSend
        );

        // Handle the response data as needed (e.g., store user data in local storage)
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/"); // Replace with the desired route after successful login
      } catch (err) {
        console.error(err);
        let errorMessage;
        if (err.response && err.response.status === 422) {
          // Handle specific error messages from the backend
          errorMessage =
            err.response.data.detail &&
            typeof err.response.data.detail === "object"
              ? JSON.stringify(err.response.data.detail)
              : err.response.data.detail || "An error occurred during login";
        } else {
          errorMessage = "An unknown error occurred";
        }
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit">Login</button>
          <a href="#">Sign up</a>
        </form>
      </div>
    </div>
  );
};

export default Login;