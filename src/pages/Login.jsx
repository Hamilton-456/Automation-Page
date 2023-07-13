import React from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <section className="login">
      <div className="login_form">
        <h3>Automate</h3>
        <h2>Let's login to your account account first</h2>
        <form action="">
          <div className="inputs">
            <span>Email</span>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="inputs">
            <span>Password</span>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button onClick={() => navigate("/Automation-Page/test")}>
            Login
          </button>

          {/*<NavLink disabled={true} to="/test" className="in">
            Login
          </NavLink>*/}

          {/*<a href={<Test />}>Login</a>*/}
        </form>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
