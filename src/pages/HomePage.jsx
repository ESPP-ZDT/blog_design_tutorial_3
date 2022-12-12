import React from "react";
import Footer from "../components/Footer";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const HomePage = () => {
  return (
    <div>
      <TopBar />
      <Post />
      <Sidebar />
      <Footer />
    </div>
  );
};



export default HomePage;


