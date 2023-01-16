import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import requests from "../Request.js";

const Main = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movies);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <Wrapper>
      <div className="main-banner">
        <div className="main-banner-radiant"></div>
        <img
          className="main-banner-img"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="main-banner-text-conatiner">
          <h1 className="main-banner-text-title">{movie?.title}</h1>
          <div className="main-banner-text-buttons">
            <button
              className="main-banner-button-1"
              onClick={() => navigate("/player")}
            >
              Play
            </button>
            <button className="main-banner-button-2">Watch Later</button>
          </div>
          <p className="main-banner-text-release-date">
            Released: {movie?.release_date}
          </p>
          <p className="main-banner-text-description">
            {truncateString(movie?.overview, 500)}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  color: #ffffff;
  width: 100%;
  height: 600px;
  .main-banner {
    width: 100%;
    height: 100%;
    .main-banner-radiant {
      width: 100%;
      height: 600px;
      position: absolute;
      background-image: linear-gradient(to right, var(--tw-gradient-stops));
    }
    .main-banner-img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .main-banner-text-conatiner {
      position: absolute;
      padding: 1rem;
      width: 100%;
      top: 20%;
      .main-banner-text-title {
        font-size: 2.2rem;
        line-height: 2.25rem;
        font-weight: 700;
      }
      .main-banner-text-buttons {
        margin-top: 1rem;
        margin-bottom: 1rem;
        .main-banner-button-1 {
          font-weight: 600;
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          background-color: #d1d5db;
          border-width: 1px;
          border-color: #d1d5db;
          outline: none;
          border-radius: 20px;
          border: none;
          cursor: pointer;
        }
        .main-banner-button-2 {
          cursor: pointer;
          font-weight: 600;
          padding-top: 1rem;
          padding-bottom: 1rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          margin-left: 1rem;
          color: #ffffff;
          border-width: 1px;
          background-color: #dc2626;
          outline: none;
          border: none;
          border-radius: 20px;
        }
      }
      .main-banner-text-release-date {
        color: #9ca3af;
        /* color: black; */
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .main-banner-text-description {
        font-size: 18px;
        color: #e5e7eb;
        width: 100%;
        max-width: 50%;
      }
    }
  }
`;
