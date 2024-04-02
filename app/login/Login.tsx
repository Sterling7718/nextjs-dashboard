import React from 'react';
import './Login.css';
import Image from 'next/image';

interface LoginProps {
  className?: string;
}

export const Login: React.FC<LoginProps> = ({ className }) => {
  return (
    <div className={'login ' + (className || '')}>
      <div className="div-login"></div>
      <div className="frame-1">
        <div className="button-msoa">
          <Image
            className="image-3"
            src="/image-30.png"
            alt="Office 365 Login"
          />
          <div className="office-365-login">Office 365 Login</div>
        </div>
        <div className="or">or</div>
        <div className="rectangle-3"></div>
        <div className="login2">LOGIN</div>
        <div className="remember-me-check-box">
          <svg
            className="checkbox"
            width="44"
            height="41"
            viewBox="0 0 44 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_56)">
              <rect width="44" height="41" rx="5" fill="#156082" />
              <path
                d="M11 19.4304L21.5926 28.7L33 12.3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_56"
                x="-5"
                y="-2"
                width="54"
                height="51"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.18 0 0 0 0 0.18 0 0 0 0 0.26 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_56"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_56"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className="remember-me">Remember me</div>
        </div>
        <div className="password-input">
          <div className="password">Password</div>
          <div className="text-field">
            <div className="enter-6-characters-or-more">
              Enter 6 characters or more
            </div>
          </div>
        </div>
        <div className="email-input">
          <div className="email">Email</div>
          <div className="text-field">
            <div className="you-sjdelmonte-sti-edu-ph">
              you@sjdelmonte.sti.edu.ph
            </div>
          </div>
        </div>
      </div>
      <div className="login-with-office-365">
        <span>
          <span className="login-with-office-365-span">
            Login
            <br />
          </span>
          <span className="login-with-office-365-span2">with</span>
          <span className="login-with-office-365-span3">Office 365</span>
        </span>
      </div>
      <div className="student-clearance">
        Student
        <br />
        Clearance
      </div>
      <Image className="image-4" src="/image-40.png" alt="Student Clearance" />
      <Image className="image-5" src="/image-50.png" alt="Student Image" />
    </div>
  );
};
