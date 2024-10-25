// eslint-disable-next-line no-unused-vars
import React from "react";
import Intro from "./Intro";
import Navbar from "./navbar";

const Home = () => {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <Intro />
    </div>
  );
};

export default Home;
