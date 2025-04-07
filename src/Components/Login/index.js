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
                        <form onSubmit={handleLogin}>
                         <h1 class={styles["h1"]}>Login Page</h1>                                            
                        <br></br>                   
                        <button class={styles["primary-button"]} type="submit">Login</button>
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