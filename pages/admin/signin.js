import React, { useState } from 'react';
import Head from 'next/Head';
import { Eye } from 'lucide-react';
import styles from '../../styles/AdminSignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');

  const showPassword = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  const loginHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Beacon Tutors Pakistan - Admin Sign In</title>
        <meta
          name="description"
          content="Meta description for the Admin Sign In page"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.signIn}>
          <h2>Sign In</h2>
          <form onSubmit={loginHandler}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className={styles.password}>
              <input
                type={inputType}
                name="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className={styles.eye} onClick={showPassword}>
                <Eye color="#a1bedb" />
              </div>
            </div>
            <button type="submit" className={styles.btn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
