import { React, useState } from 'react';
import styles from '../Login/Login.module.scss'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            navigate('/home');
        }, 2000);     
    };

    return (
        <body>
                <div class={styles["wrapper"]}>
                    <div class={styles["custom-container"]}>          
                
                    {isLoading ? (
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="spinner-border spinner-color" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <form  className="row g-3" onSubmit={handleLogin}>
                         <div class="col-12">
                            <label for="username" class="form-label">User Name</label>
                            <input type="text" 
                            class="form-control" 
                            id="username"/>           
                        </div>
                        <div class="col-12">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" 
                            class="form-control" 
                            id="password"/>           
                        </div>
                         <div class="col-12">
                        <button class={styles["primary-button"]} type="submit">Login</button>
                        </div>
                        </form>
                    )} 
                    </div>                    
                </div>
                </body>         
        // <div className={styles["custom-container"]}>
        //     <h1>Login</h1>
        // </div>
    )
}

export default Login;