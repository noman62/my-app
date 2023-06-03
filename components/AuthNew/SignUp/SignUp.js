import axios from 'axios';
import styles from '../../../styles/signup.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SyncOutlined } from '@ant-design/icons'
import { toast } from 'react-toastify';

export default function SignUp() {

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
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
    const { name, email, mobile, password } = user;

    if (!name || !email || !mobile || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    setLoading(true)
    axios
      .post('https://backend-ds6n.onrender.com/api/register', {
        ...user
      })
      .then(response => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        toast.info('Login Successfully')
        router.push('/login')
      })
      .catch(error => {
        toast.error(error.response.data)
        setLoading(false)
      })
  }

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} />

        <label htmlFor="mobile">Mobile No:</label>
        <input type="text" id="mobile" name="mobile" onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleChange} />

        <button type="submit" className={styles['submit-button']}>
          {loading ? <SyncOutlined spin /> : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
}
