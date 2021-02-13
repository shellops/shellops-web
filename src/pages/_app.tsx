import '../styles/globals.scss';

import { Logo } from '@components';
import * as cookie from 'cookie';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// Configure Firebase.
const firebaseConfig = {
  apiKey: 'AIzaSyBhYSoSLmgSeTF9z7UzjwzhS3Xbqpnxoow',
  authDomain: 'testlab-aa7a3.firebaseapp.com',
  databaseURL:
    'https://testlab-aa7a3-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'testlab-aa7a3',
  storageBucket: 'testlab-aa7a3.appspot.com',
  messagingSenderId: '750181532511',
  appId: '1:750181532511:web:bd0d97d5e2822c5f6decea',
  measurementId: 'G-GEPDLQ3KGX',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const MyApp = ({ Component, pageProps }) => {
  const [user, loading, error] = useAuthState(firebase.auth());

  // if (!loading && !user) window.location.href = "/account";

  return (
    <div className='page'>
      <header>
        <div className='container'>
          <div className='logo'>
            <Logo />
          </div>
          {/* <nav>
            <ul>
              <li>
                <a href=''>Documentation</a>
              </li>
              <li>
                <a href=''>API Reference</a>
              </li>
              <li>
                <a href=''>Pricing</a>
              </li>
            </ul>
          </nav> */}
{/* 
          <a className='start'>Open panel</a>
          <a className='login'>Sign in</a> */}
        </div>
      </header>
      <Component {...pageProps} />
    </div>
  );
};

MyApp.getInitialProps = async ({ ctx }) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  ctx.req.cookie = cookie.parse(ctx.req.headers.cookie || '');

  // if (ctx.req.url !== "/account")
  //   if (!ctx.req.cookie.user)
  //     ctx.res
  //       .writeHead(302, {
  //         Location: "account",
  //       })
  //       .end();

  return {};
};

export default MyApp;
