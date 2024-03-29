import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Eye, EyeOff } from 'lucide-react';
import styles from '../../styles/SignIn.module.css';
import AdminLayout from '../../components/Layouts/AdminLayout';
import toast from 'react-hot-toast';
import { auth } from '../../firebase';
import {
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user_) => {
      setUser(user_);
      user_ && router.push('/adminpanel/announcements');
    });
  }, [user]);

  const showPassword = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  const signinHandler = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') toast.error('Missing credentials');
    else {
      try {
        setIsDisabled(true);
        await setPersistence(auth, browserSessionPersistence);
        try {
          await toast.promise(
            signInWithEmailAndPassword(auth, email, password).then(
              (userCredential) => {
                const user = userCredential.user;
                router.push('/adminpanel/announcements');
              }
            ),
            {
              loading: 'Verifying credentials...',
              success: 'Signed in successfully',
              error: 'Invalid credentials',
            }
          );
        } catch (error) {
          console.log(error.code, error.message);
        }
      } catch (error) {
        console.log(error.code, error.message);
      }
      setIsDisabled(false);
    }
  };

  return (
    !user && (
      <>
        <Head>
          <title>Admin Sign In - Beacon Tutors Pakistan</title>
          <meta name="description" content="Admin Sign In page" />
        </Head>
        <div className={styles.container}>
          <div className={styles.signIn}>
            <h2>Sign In</h2>
            <form onSubmit={signinHandler}>
              <input
                className="adminInput"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.password}>
                <input
                  className="adminInput"
                  type={inputType}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.eye} onClick={showPassword}>
                  {inputType === 'password' ? (
                    <EyeOff color="#a1bedb" />
                  ) : (
                    <Eye color="#a1bedb" />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="adminButton"
                disabled={isDisabled}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </>
    )
  );
}

SignIn.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
