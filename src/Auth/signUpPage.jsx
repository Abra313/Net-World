import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import netWorld from '../asset/images/net world logo.png';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const SignUp = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        // Simple form validation
        if (!fullName || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        // Validate password
        const passwordValid = validatePassword(password);
        if (!passwordValid) {
            setPasswordError('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a punctuation mark.');
            return;
        }

        setPasswordError('');
        setError('');

        // Set loading state to true
        setLoading(true);

        try {
            // Make the API request to your backend to register the user
            const response = await fetch('http://localhost:5000/api/V1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: fullName,  // Send the fullName as userName in the body
                    email: email,
                    password: password,
                    age: 25,  // You can hardcode age or add another input for the user to specify their age
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // If registration is successful, navigate to the user page
                setTimeout(() => {
                    navigate('/user');
                }, 1000); // Simulate delay for 1 second
            } else {
                // If the response is not ok, show the error message from the API
                setError(data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            // Handle network or other errors
            setError(error.message || 'Signup failed. Please try again.');
        } finally {
            // Reset loading state
            setLoading(false);
        }
    };

    const handleLoginClick = () => {
        // Navigate to login page when "Login" text is clicked
        navigate('/login');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validatePassword = (password) => {
        // Regex to check for the password criteria
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasPunctuation = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;

        return hasUpperCase && hasLowerCase && hasPunctuation && isLongEnough;
    };

    return (
        <div className="flex mt-[10%] flex-col md:flex-row items-center justify-center md:justify-evenly m-auto mt-16 md:mt-0">
            <div className="md:w-1/3">
                <img src={netWorld} alt="net-world" className="w-full " />
            </div>

            <div className="wrapper mt-8 md:mt-0">
                <div className="flex flex-col items-center gap-4 md:w-full mt-4">
                    <h1 className="text-primary text-5xl font-bold">Sign Up</h1>
                    <div className="w-16 h-2 bg-primary rounded-full "></div>
                </div>

                <form onSubmit={handleSignup} className="mt-8 md:mt-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center bg-gray-200 rounded-lg p-2">
                            <FaUser className="w-6 h-6 ml-2" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="flex-1 bg-transparent border-none outline-none ml-2 text-lg"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center bg-gray-200 rounded-lg p-2">
                            <MdEmail className="w-6 h-6 ml-2" />
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="flex-1 bg-transparent border-none outline-none ml-2 text-lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center bg-ashLight rounded-lg">
                            <RiLockPasswordFill className="w-6 h-6 ml-3" />
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggle input type between text and password
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
                        
                        {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
                    </div>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <div className="mt-4 text-lg">
                        Already Have An Account?{' '}
                        <span className="text-primary cursor-pointer" onClick={handleLoginClick}>
                            Login
                        </span>
                    </div>

                    <div className="flex justify-center items-center mt-8">
                        <Button
                            type="submit"
                            onClick={handleSignup}
                            loading={loading}
                            className="rounded-lg w-36 h-12"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
