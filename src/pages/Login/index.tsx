import SignIn from './SignIn';
import SignUp from './SignUp';
import './Login.scss';

const Login = () => {
    return (
        <div className="login-container">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Login;
