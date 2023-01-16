import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <Wrapper>
      <div className="row-header">
        <div className="row-header-left">
          <h2 className="row-title">{title}</h2>
        </div>
        <div className="row-header-rigth">
          <MdChevronLeft
            onClick={slideLeft}
            className="row-leftArrow"
            size={30}
          />
          <MdChevronRight
            onClick={slideRight}
            className="row-rightArrow"
            size={30}
          />
        </div>
      </div>
      <div className="row-container">
        <div id="slider" className="row-movies ">
          {movies && movies.map((item, id) => <Movie key={id} item={item} />)}
        </div>
      </div>
    </Wrapper>
  );
};

export default Row;

const Wrapper = styled.div`
  .row-header {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .row-header-left {
      .row-title {
        padding: 1rem;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
    }
    .row-header-rigth {
      padding-right: 50px;
      gap: 50px;
      .row-leftArrow {
        cursor: pointer;
        :hover {
          background-color: white;
          color: black;
          border-radius: 50%;
        }
      }
      .row-rightArrow {
        cursor: pointer;
        :hover {
          border-radius: 50%;
          background-color: white;
          color: black;
        }
      }
    }
  }
  .row-container {
    display: flex;
    position: relative;
    align-items: center;
    .row-movies {
      overflow-x: scroll;
      position: relative;
      white-space: nowrap;
      width: 100%;
      height: auto;
      white-space: nowrap;
      scroll-behavior: smooth;
      ::-webkit-scrollbar {
        width: 0;
        overflow-y: hidden;
        height: 0;
      }
    }
  }
`;
