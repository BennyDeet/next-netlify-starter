import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDukW0yT9FcnGcjAKnaSTqZUA6rLiakeDc",
  authDomain: "rolltube-402618.firebaseapp.com",
  projectId: "rolltube-402618",
  storageBucket: "rolltube-402618.appspot.com",
  messagingSenderId: "645296781257",
  appId: "1:645296781257:web:c163d02aaf906509051a18",
  measurementId: "G-YQWP8P7TSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Role Tube</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
        <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
      </Head>

      <main>
        <Header title="Hello Motherffuckaa!!!!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <Auth ></Auth>
      </main>

      <Footer />
    </div>
  )
}
