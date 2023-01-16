import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../firebase";
import { AiOutlineClose } from "react-icons/ai";
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SavedShow = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>y
      {movies && movies.map((item, id) => (
        <div className="row-container" key={id}>
          <div id="slider" className="row-movies ">
            <div className="boxmovie">
              <div className="hover">
                <div className="image-video-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                    alt="card"
                  />
                </div>
                <div className="info-container">
                  <h3 className="name">{item?.title}</h3>
                  <div className="icons">
                    <div className="controls">
                      <IoPlayCircleSharp
                        title="Play"
                        onClick={() => navigate("/player")}
                      />
                      <RiThumbUpFill title="Like" />
                      <RiThumbDownFill title="Dislike" />
                      <p onClick={() => deleteShow(item.id)} className="p2">
                        <AiOutlineClose />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default SavedShow;

const Wrapper = styled.div`
  width: 100%;
  gap: 40px;
  display: flex;
  padding-top: 100px;
  overflow-x: scroll;
  .row-container {
    display: flex;
    .row-movies {
      height: auto;
      .boxmovie {
        display: flex;
        .hover {
          z-index: 99;
          height: max-content;
          justify-content: center;
          width: 20rem;
          position: relative;
          left: 0;
          border-radius: 0.3rem;
          box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
          background-color: #ffffff;
          transition: 0.3s ease-in-out;
          .image-video-container {
            position: relative;
            height: 140px;
            img {
              width: 100%;
              height: 160px;
              object-fit: cover;
              border-radius: 0.3rem;
              top: 0;
              z-index: 4;
              position: absolute;
            }
          }
          .info-container {
            display: flex;
            flex-direction: column;
            padding: 1rem;
          }
          .icons {
            display: flex;
            justify-content: space-between;
            .controls {
              display: flex;
              gap: 1rem;
              align-items: center;
            }
            svg {
              font-size: 2rem;
              cursor: pointer;
              transition: 0.3s ease-in-out;
              &:hover {
                color: #b8b8b8;
              }
            }
          }
        }
      }
    }
  }
`;
