// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { browser } from '$app/environment';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDjTf8Vm2SIwN3aLImm4Ak3YKsRJHIP4Ig',
	authDomain: 'bespoke-wizardry.firebaseapp.com',
	projectId: 'bespoke-wizardry',
	storageBucket: 'bespoke-wizardry.firebasestorage.app',
	messagingSenderId: '271657546201',
	appId: '1:271657546201:web:40a4be5a07c1acec8829c8',
	measurementId: 'G-KP35PW5BMD'
};

// Initialize Firebase
const app = browser ? initializeApp(firebaseConfig) : null;
const analytics = app ? getAnalytics(app) : null;
const auth = app ? getAuth(app) : null ;
const db = app ? getFirestore(app) : null;

export { app, analytics, auth, db };
