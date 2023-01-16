import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import SavedShow from "../Components/SavedShow";

const Account = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="accountContainer">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="/"
          />
          <div className="effectSection"></div>
          <div className="acountSavedContainer">
            <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          </div>
        </div>
        <SavedShow />
      </Wrapper>
    </>
  );
};

export default Account;

const Wrapper = styled.div`
  .accountContainer {
    color: #ffffff;
    width: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 400px;
    }
    .effectSection {
      background: rgb(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 550px;
    }
    .acountSavedContainer {
      position: absolute;
      padding: 1rem;
      top: 20%;
      h1 {
        font-size: 1.875rem;
        line-height: 2.25rem;
        font-weight: 700;
      }
    }
  }
`;
