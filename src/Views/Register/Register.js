import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "Name is required";
    }

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

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const dataToSend = {
          username: formData.username,
          email: formData.email,
          password: formData.password
        };

        const response = await axios.post('http://localhost:8000/users/register', dataToSend);
        // Handle the response data as needed (e.g., store user data in local storage)
        localStorage.setItem('userData', JSON.stringify(response.data));
        navigate('/'); // Replace with the desired route after successful registration
      } catch (err) {
        console.error(err)
        setError(err.response?.data?.detail || 'An unknown error occurred');
      }
    }
  };

  return (
    <div className='register-container'>
      <div className='form-container'>
        <h2>Register</h2>
        {error && <div className='error-message'>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Name</label>
            <input
              type='text'
              name='username'
              placeholder='Enter your username'
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className='error'>{errors.username}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className='error'>{errors.email}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className='error'>{errors.password}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm your password'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
          </div>
          <button type='submit'>Register</button>
          <a href='#'>Login</a>
        </form>
      </div>
    </div>
  );
};

export default Register;