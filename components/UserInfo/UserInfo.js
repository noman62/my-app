import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice/userSlice';
import styles from '../../styles/signup.module.scss';
import Modal from '../Modal/Modal';

const UserInfo = () => {
    const user = useSelector(selectUser);

    return (
        <div>
            <Navbar />
            <div className={styles['user-info']}>
                <div class="row">
                    <div class="col">
                        <h2 className={styles.name}>Name: {user?.user?.name}</h2>
                        <p className={styles.name}>Email: {user?.user?.email}</p>
                        <p className={styles.name}>Mobile Number: {user?.user?.mobile}</p>
                        <button className={styles.button}>
                            <Modal />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;