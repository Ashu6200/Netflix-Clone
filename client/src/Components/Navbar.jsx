import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="nav-heading">TYPM</h1>
      </Link>
      {user?.email ? (
        <div className="nav-buttons">
          <Link to="/account">
            <button className="nav-button-1">Account</button>
          </Link>
          <Link to="/signup">
            <button onClick={handleLogout} className="nav-button-2">
              LogOut
            </button>
          </Link>
        </div>
      ) : (
        <div className="nav-buttons">
          <Link to="/login">
            <button className="nav-button-1">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="nav-button-2">Sign Up</button>
          </Link>
        </div>
      )}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  z-index: 100;
  position: absolute;
  .nav-heading {
    color: #dc2626;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    cursor: pointer;
  }
  .nav-buttons {
    padding-right: 30px;
    .nav-button-1 {
      font-weight: 700;
      padding-right: 1rem;
      color: #ffffff;
      background-color: transparent;
      cursor: pointer;
      outline: none;
      border: none;
    }
    .nav-button-2 {
      font-weight: 700;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      background-color: #dc2626;
      color: #ffffff;
      border-radius: 0.25rem;
      cursor: pointer;
      outline: none;
      border: none;
    }
  }
`;
