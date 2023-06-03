import React from 'react';
import SignUp from '../components/AuthNew/SignUp/SignUp';
import Navbar from '../components/Navbar/Navbar';

const signUp = () => {
    return (
        <div>
            <Navbar/>
           <SignUp/> 
        </div>
    );
};

export default signUp;