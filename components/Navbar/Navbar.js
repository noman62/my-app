import { useState } from 'react';
import styles from '../../styles/navbar.module.scss';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice/userSlice';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async (e) => {
        e.preventDefault();
        const { data } = await axios.get('https://backend-ds6n.onrender.com/api/logout');
        dispatch(logout());
        toast.info('Logout successfully!')
        router.push("/");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">My App</Link>
            </div>
            <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
                <ul>
                    <li>
                        <a href="/info">User Info</a>
                    </li>
                    {user === null && (
                        <>
                            <li>
                                <a href="/signUp">Sign Up</a>
                            </li>
                            <li>
                                <a href="/login">Sign In</a>
                            </li>

                        </>
                    )}
                    {user !== null && user.user && (
                        <>
                            <li>
                                <a href='/'>{user?.user?.name}</a>
                            </li>
                            <li>
                                <a href=""><button onClick={e => handleLogout(e)}>Logout</button></a>
                            </li>

                        </>
                    )}
                </ul>
            </div>
            <div className={styles.toggle} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;
