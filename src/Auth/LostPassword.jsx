import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import netWorld from '../asset/images/net world logo.png';
import { MdEmail } from 'react-icons/md';

const LostPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleRecoverClick = () => {
        // For demonstration purposes, log the email and navigate to '/user'
        console.log('Email:', email);
        navigate('/user');
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly m-auto mt-16 md:mt-0">
            <div className="md:w-1/3">
                <img src={netWorld} alt="net-world" className="w-full" />
            </div>

            <div className="wrapper mt-8">
                <div className="flex flex-col items-center gap-4 w-full">
                    <h1 className="text-primary text-5xl font-bold text-center">Reset <br /> Password</h1>
                    <div className="w-16 h-2 bg-primary rounded"></div>
                </div>

                <div className="mt-8 flex flex-col gap-4 w-full">
                    <div className="flex items-center bg-gray-200 rounded-lg p-2">
                        <MdEmail className="w-6 h-6 ml-2" />
                        <input
                            type="email"
                            placeholder="Enter Email ID To Reset Password"
                            className="flex-1 bg-transparent border-none outline-none ml-2 text-lg"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center mt-8">
                    <Button onClick={handleRecoverClick} children="Recover" className="rounded-lg w-36 h-12" />
                </div>
            </div>
        </div>
    );
};

export default LostPassword;
