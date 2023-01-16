import React, { useState } from "react";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import video from "../assest/video.mp4";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  // eslint-disable-next-line no-unused-vars
  const [saved, setSaved] = useState(false);
  const [like, setLike] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const movieID = doc(db, "users", `${user?.email}`);

  const savedShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Unable to save movie");
    }
  };

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt="card"
        onClick={() => navigate("/player")}
      />

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt="card"
            />
            <video
              src={video}
              autoPlay={true}
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info-container flex column">
            <h3 className="name">{item?.title}</h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="Play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />
                <p onClick={savedShow}>
                  {like ? (
                    <BsCheck title="Remove from List" />
                  ) : (
                    <AiOutlinePlus title="Add to my list" />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Movie;

const Container = styled.div`
  display: inline-block;
  padding: 0.5rem;
  cursor: pointer;
  width: 160px;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: block;
    height: auto;
  }
  .hover {
    height: max-content;
    width: 20rem;
    position: relative;
    top: -15vh;
    left: -46px;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #ffffff;
    transition: 0.3s ease-in-out;
    z-index: 99;
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
      video {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
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
`;
