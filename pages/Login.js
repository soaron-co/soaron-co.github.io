/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Loginstyle.module.css';
import Forgot from './Forgot-password.js';
import Link from 'next/link';
import lsvg from '../public/login.svg';
import logo from '../public/logo.png';

function Login() {
  return (
    <div className={styles.box}>
      <div className={styles.image_container}>
        <div className={styles.logo_box}>
          <Image src={logo} layout="responsive" alt="" />
        </div>

        <div className={styles.svg}>
          <Image src={lsvg} layout="responsive" alt="" />
        </div>
      </div>

      <form className={styles.content}>
        <div className={styles.usercontent}>
          <div className={styles.pat}>PAT </div>
          <div> - work with empathy</div>
        </div>
        <div className={styles.user_input}>
          <input type="text" placeholder="Emp ID" />
          <input type="text" placeholder="Password" />
        </div>
        <div className={styles.submit}>
          <Link href="./Dashboard">
            <button>LOGIN</button>
          </Link>
          <div className={styles.forgotlink}>
            <Link href="/Forgot-password">
              <p>Forgot Password</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
