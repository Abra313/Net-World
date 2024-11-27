import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Import useAuth hook
import netWorld from '../asset/images/net world logo.png';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import Button from '../Component/Button';
import ModelMessage from '../Component/ModelMessage'; // Import ModelMessage component

const Login = () => {
    const navigate = useNavigate();
    const { login, loading } = useAuth(); // Access login method and loading state from AuthContext
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showModelMessage, setShowModelMessage] = useState(false); // State to control ModelMessage visibility

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please enter email and password.');
            return;
        }

        try {
            setError('');
            await login(email, password); // Call login method from AuthContext

            // Show ModelMessage on successful login
            setShowModelMessage(true);

            // Redirect after delay to allow the user to see the message
            setTimeout(() => {
                setShowModelMessage(false);
                navigate('/user'); // Redirect to '/user' after 2 seconds
            }, 2000); // 2 seconds delay before navigation
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLostClick = () => {
        navigate('/lost');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly m-auto mt-16 md:mt-0">
            <div className="md:w-1/3">
                <img src={netWorld} alt="net-world" className="w-full" />
            </div>

            <div className="wrapper mt-8 md:mt-0">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-primary text-5xl font-bold">
                        <h1>Login</h1>
                    </div>
                    <div className="w-16 h-2 bg-primary rounded"></div>
                </div>

                <form onSubmit={handleLogin} className="mt-8 md:mt-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center bg-ashLight rounded-lg">
                            <MdEmail className="w-6 h-6 ml-3" />
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="h-12 flex-1 bg-transparent border-none outline-none text-lg ml-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center bg-ashLight rounded-lg">
                            <RiLockPasswordFill className="w-6 h-6 ml-3" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="Password"
                                className="h-12 flex-1 bg-transparent border-none outline-none text-lg ml-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="text-gray-500 focus:outline-none mr-[10px]"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <div className="mt-4 text-lg">
                        Lost Password?{' '}
                        <span className="text-primary cursor-pointer" onClick={handleLostClick}>
                            Click Here!
                        </span>
                    </div>

                    <div className="flex justify-center mt-6">
                        <Button
                            className="w-36 h-12 rounded-lg"
                            type="submit"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Loading...' : 'Login'}
                        </Button>
                    </div>
                </form>
            </div>

            {/* Show ModelMessage if login is successful */}
            {showModelMessage && (
                <ModelMessage
                    message="Login Successful!"
                    onClose={() => setShowModelMessage(false)} // Close the model
                />
            )}
        </div>
    );
};

export default Login;
