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

    const handleSignup = async (e) => {
        alert("Sign Up successfull")
        e.preventDefault();

        // Simple form validation
        if (!fullName || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        // Set loading state to true
        setLoading(true);

        try {
            // Simulate API call (replace with actual signup logic)
            // Example: const response = await signupUser({ fullName, email, password });
            
            // For demo purposes, navigate to "/user" after success
            setTimeout(() => {
                navigate('/user');
            }, 1000); // Simulate delay for 1 second
        } catch (error) {
            // Handle errors from API (e.g., duplicate email, weak password)
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

    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly m-auto mt-16 md:mt-0">
            <div className="md:w-1/2">
                <img src={netWorld} alt="net-world" className="w-full" />
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
                        </div>                    </div>

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
                            children="Sign Up"
                            className="rounded-lg w-36 h-12"
                        />
                            
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
