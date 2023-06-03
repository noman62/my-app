import axios from 'axios';
import styles from '../../../styles/signup.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SyncOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { loggin } from '../../../features/userSlice/userSlice';
import { toast } from 'react-toastify';

export default function SignIn() {

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch()
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  //Handle form state
  const handleChange = e => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
  }

  //Handle Form Submit
  const handleSubmit = e => {
    e.preventDefault()
    const { email, password } = user;

    if (!email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    setLoading(true)
    axios
      .post('https://backend-ds6n.onrender.com/api/login', {
        ...user
      })
      .then(response => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)

        dispatch(
          loggin({
            user: response.data,
          })
        )
        toast.info('Welcome to my app!')
        router.push('/homepage')
      })
      .catch(error => {
        toast.error(error.response.data)
        setLoading(false)
      })
  }
  
  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleChange} />

        <button type="submit" className={styles['submit-button']}>
          {loading ? <SyncOutlined spin /> : 'SUBMIT'}
        </button>

      </form>
    </div>
  );
}
