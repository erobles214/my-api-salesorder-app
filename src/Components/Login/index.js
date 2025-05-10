import { React } from 'react';
import styles from '../Login/Login.module.scss'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        navigate('/home');
    };

    return (
        <body>
                <div class={styles["wrapper"]}>
                    <div class={styles["custom-container"]}>                     
                        <div>
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
                        </div>
                    </div>                    
                </div>
                </body>         
        // <div className={styles["custom-container"]}>
        //     <h1>Login</h1>
        // </div>
    )
}

export default Login;