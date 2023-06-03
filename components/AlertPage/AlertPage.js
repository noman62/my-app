import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from '../../styles/signup.module.scss';

const UserInfo = () => {
    return (
        <div>
            <Navbar />
            <div className={styles['user-info']}>
                <h3>Please Login</h3>
            </div>
        </div>
    );
};

export default UserInfo;