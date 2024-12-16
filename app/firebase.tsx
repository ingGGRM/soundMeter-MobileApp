import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDRHzuNQIQwrtncbHTIo47liBey68ywlQs",
	authDomain: "soundmeter-c365c.firebaseapp.com",
	projectId: "soundmeter-c365c",
	storageBucket: "soundmeter-c365c.firebasestorage.app",
	messagingSenderId: "478352761701",
	appId: "1:478352761701:web:f105990540c4218987378c",
	measurementId: "G-PPK3GQG0XS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
