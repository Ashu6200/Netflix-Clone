import React from "react";
import styled from "styled-components";
import PlayStore from "../assest/play-store.png";
import AppStore from "../assest/app-store.png";

const Footer = () => {
  return (
    <Wrapper className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-row-left">
            <h3>Download Our App</h3>
            <p>Download our app For Android and ios mobile phones</p>
            <div className="appLogo">
              <img src={PlayStore} alt="" className="appLogoimg" />
              <img src={AppStore} alt="" className="appLogoimg" />
            </div>
          </div>
          <div className="footerContainer2">
            <p>
              Our purpose is to provide a pleasure and benefit of Entertainment
              accessible to many people around the world.
            </p>
          </div>
          <div className="footerContainer3">
            <h3>Follow Us </h3>
            <div className="followLists">
              <span>Facebook</span>
              <span>Youtube</span>
              <span>Twitter</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2022- ASHUTOSH KEWAT</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background: #000;
  color: #fff;
  font-size: 14px;
  padding: 60px 0 20px;
  .footer-container {
    max-width: 1300px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
    .footer-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;
      .footer-row-left {
        flex-basis: 30%;
        min-width: 310px;
        margin-bottom: 20px;
        p {
          align-items: flex-start;
        }
        .appLogo {
          margin-top: 20px;
          .appLogoimg {
            width: 140px;
          }
        }
      }
      .footerContainer2 {
        flex: 1;
        text-align: center;
        min-width: 310px;
        margin-bottom: 20px;
        .footerContainer2 > img {
          width: 180px;
          margin-bottom: 20px;
          border-radius: 10px;
        }
        p {
          align-items: center;
        }
      }
      .footerContainer3 {
        flex-basis: 12%;
        text-align: center;
        min-width: 310px;
        margin-bottom: 20px;
        .footerContainer3 > h3 {
          color: #ffd6d6;
          margin: 20px;
        }
        .followLists {
          display: flex;
          flex-direction: column;
          gap: 20px;
          span {
            color: #fff;
          }
        }
      }
    }
    .copyright {
      text-align: center;
    }
  }
`;
