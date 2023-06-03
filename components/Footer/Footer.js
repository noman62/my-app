import React from 'react';
import styles from '../../styles/signup.module.scss';

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <p className={styles['footer__text']}>
                    &copy; 2023 My Website. All rights reserved.
                </p>
                <p className={styles['footer__text']}>
                    Created by <a href="#" className={styles['footer__link']}>Noman</a>
                </p>
            </footer>
        </div>
    );
};

export default Footer;