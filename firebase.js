import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCcDhIOsmBD2t1Oe7cGFesnKWhMijQET3Q',
  authDomain: 'beacon-tutors-pakistan.firebaseapp.com',
  projectId: 'beacon-tutors-pakistan',
  storageBucket: 'beacon-tutors-pakistan.appspot.com',
  messagingSenderId: '436324862327',
  appId: '1:436324862327:web:b9fddeb4bf9f864dc3f972',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
