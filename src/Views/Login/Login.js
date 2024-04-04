import { useState } from 'react'
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        setErrors(errors);
        if(Object.keys(errors).length ===0){
            alert("Done");
        } 

        }
    }

    const validate = () => {
        const error = {};

        if (!email) {
            error.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)){
            error.email = "Email not matched";
        } else {
            error.email = "";
        }

        if (!password) {
            error.password = "Password is required";
        } else if (password.length <8){
            error.password = "Password not matched";
        } else {
            error.password = "";
        }

        return error;
        
    }
    return(
        <div className='login-container'>
            <div className='form-container'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' onChange={(e) => setEmail(e.target.value)}/>
                        {errors.email && <div className='error'>{errors.email}</div>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)}/>
                        {errors.password && <div className='error'>{errors.password}</div>}
                    </div>
                    <button>Login</button>
                    <a href='#'>Sign up</a>
                </form>
    
            </div>           
        </div>

    )
}

export default Login