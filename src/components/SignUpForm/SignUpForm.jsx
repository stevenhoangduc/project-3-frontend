import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../contexts/UserContext';
import { signUp } from '../../services/authService';
import './SignUpForm.css';

const SignUpForm = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConf: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const { username, password, passwordConf } = formData;

    const handleChange = (evt) => {
        setMessage('');
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const newUser = await signUp(formData);
            setUser(newUser);
            console.log(newUser, " <- new User (decoded jwt token)");
        } catch (err) {
            console.log(err);
            setMessage(err.message);
        }

        console.log(formData);
    };

    const isFormInvalid = () => {
        return !(username && password && password === passwordConf);
    };

    return (
        <main>
            <h1>Sign Up</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="passwordConf">Confirm Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="passwordConf"
                        value={passwordConf}
                        name="passwordConf"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>

                <div>
                    <button disabled={isFormInvalid()}>Sign Up</button>
                    <button type="button" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </main>
    );
};

export default SignUpForm;
