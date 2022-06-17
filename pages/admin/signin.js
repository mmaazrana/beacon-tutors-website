import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/Head';
import { Eye } from 'lucide-react';
import styles from '../../styles/SignIn.module.css';
import AdminLayout from '../../components/Layouts/AdminLayout';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');
  const router = useRouter();

  const showPassword = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  const signinHandler = async (e) => {
    e.preventDefault();
    router.push('/admin/manageannouncements');
  };

  return (
    <>
      <Head>
        <title>Admin Sign In - Beacon Tutors Pakistan</title>
        <meta
          name="description"
          content="Meta description for the Admin Sign In page"
        />
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
              required
            />
            <div className={styles.password}>
              <input
                className="adminInput"
                type={inputType}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className={styles.eye} onClick={showPassword}>
                <Eye color="#a1bedb" />
              </div>
            </div>
            <button type="submit" className="adminButton">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

SignIn.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
