import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserAuth } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <Wrapper>
      <img
        className="singupImg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="signupScreen"></div>
      <div className="signupContainer">
        <div className="signupBox">
          <div className="signupformBox">
            <h1>Log In To TYPM</h1>
            {error ? (
              <p
                style={{
                  padding: "0.75rem",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  backgroundColor: "#f87171",
                }}
              >
                {error}
              </p>
            ) : null}
            <form className="signupform" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button>Log In</button>
              <div>
                <p>
                  <input type="checkbox" />
                  Remember me
                </p>
                <p>Need help ?</p>
              </div>
              <p style={{ gap: "5px" }}>
                <span>New to TYPM {"  "}</span>
                <Link to="/signup" style={{ color: "white", fontSize: "18px" }}>
                  {" "}
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  .singupImg {
    display: block;
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .signupScreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
  .signupContainer {
    position: fixed;
    z-index: 50;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
    width: 100%;
    .signupBox {
      background: rgba(0, 0, 0, 0.7);
      color: #ffffff;
      height: 600px;
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
      .signupformBox {
        padding-top: 4rem;
        padding-bottom: 4rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 320px;
        h1 {
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
        }
        .signupform {
          display: flex;
          padding-top: 1rem;
          padding-bottom: 1rem;
          flex-direction: column;
          width: 100%;
          input {
            padding: 0.75rem;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            background-color: white;
            border-radius: 0.25rem;
            outline: none;
            border: none;
          }
          button {
            color: white;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            background-color: #dc2626;
            font-weight: 700;
            border-radius: 0.25rem;
            outline: none;
            border: none;
          }
          div {
            display: flex;
            color: white;
            font-size: 0.875rem;
            line-height: 1.25rem;
            justify-content: space-between;
            align-items: center;
            input {
              margin-right: 0.5rem;
            }
          }
          p {
            span {
              color: white;
            }
          }
        }
      }
    }
  }
`;
