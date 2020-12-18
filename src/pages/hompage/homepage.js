import React from "react";
import Directory from "../../components/directory/directory";
import SlideShow from "../../components/slideshow/slideshow";
import './hompage.scss'

const HomePage = () => (
  <div className="homepage">
    <SlideShow/>
    <Directory/>
  </div>
);

export default HomePage;