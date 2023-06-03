import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice/userSlice';
import styles from '../../styles/signup.module.scss';
import Footer from '../Footer/Footer';

const HomePage = () => {
    const user = useSelector(selectUser);

    return (
        <div>
            <Navbar />
            <div className={styles['landing-page']}>
                <h1 className={styles['landing-page__title']}>Welcome to My Website</h1>
                <p className={styles['landing-page__description']}>
                    The app is designed to allow users to create accounts, sign in, and access protected resources. It consists of a backend server and a frontend application.
                </p>
                <a href="#" className={styles['landing-page__cta']}>Get Started</a>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;