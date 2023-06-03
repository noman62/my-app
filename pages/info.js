import React from 'react';
import UserInfo from '../components/UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice/userSlice';
import AlertPage from '../components/AlertPage/AlertPage';

const info = () => {
    const user = useSelector(selectUser);
    return (
        <div>
            {user ? <UserInfo /> : <AlertPage />}
        </div>
    );
};

export default info;