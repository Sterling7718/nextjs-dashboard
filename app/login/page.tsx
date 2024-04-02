import React from 'react';
import Image from 'next/image';
import styles from './login.module.css'; // Import CSS module

export default async function Page() {
  return (
    <div className={styles.login}>
      {' '}
      {/* Use the className from CSS module */}
      <div className={styles['div-login']}></div>
      <div className={styles['frame-1']}>
        <div className={styles['button-msoa']}>
          <Image
            className={styles['image-3']}
            src="/image-30.png"
            alt="Office 365 Login"
            width={45}
            height={52}
          />
          <div className={styles['office-365-login']}>Office 365 Login</div>
        </div>
        <div className={styles.or}>or</div>
        <div className={styles['rectangle-3']}></div>
        <div className={styles.login2}>LOGIN</div>
        <div className={styles['remember-me-check-box']}>
          <svg
            className={styles.checkbox}
            width="44"
            height="41"
            viewBox="0 0 44 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content */}
          </svg>
          <div className={styles['remember-me']}>Remember me</div>
        </div>
        <div className={styles['password-input']}>
          <div className={styles.password}>Password</div>
          <div className={styles['text-field']}>
            <div className={styles['enter-6-characters-or-more']}>
              Enter 6 characters or more
            </div>
          </div>
        </div>
        <div className={styles['email-input']}>
          <div className={styles.email}>Email</div>
          <div className={styles['text-field']}>
            <div className={styles['you-sjdelmonte-sti-edu-ph']}>
              you@sjdelmonte.sti.edu.ph
            </div>
          </div>
        </div>
      </div>
      <div className={styles['login-with-office-365']}>
        <span>
          <span className={styles['login-with-office-365-span']}>
            Login
            <br />
          </span>
          <span className={styles['login-with-office-365-span2']}>with</span>
          <span className={styles['login-with-office-365-span3']}>
            Office 365
          </span>
        </span>
      </div>
      <div className={styles['student-clearance']}>
        Student
        <br />
        Clearance
      </div>
      <Image
        className={styles['image-4']}
        src="/image-40.png"
        alt="Student Clearance"
        width={230}
        height={181}
      />
      <Image
        className={styles['image-5']}
        src="/image-50.png"
        alt="Student Image"
        width={150}
        height={150}
      />
    </div>
  );
}
