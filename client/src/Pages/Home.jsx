import React from "react";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Row from "../Components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Row title="Trending Movie" fetchUrl={requests.requestTrending} />
      <Row title="Popular Movie" fetchUrl={requests.requestPopular} />
      <Row title="Upcoming Movie" fetchUrl={requests.requestUpcoming} />
      <Row title="TopRated Movie" fetchUrl={requests.requestTopRated} />
      <Row title="Horror Movie" fetchUrl={requests.requestHorror} />
      <Footer />
    </>
  );
};

export default Home;
