import React from "react";
import Directory from "../../components/directory/directory";
import FeaturedCollection from "../../components/featured-collection/featured-collection";
import SlideShow from "../../components/slideshow/slideshow";
import './hompage.scss'

const HomePage = () => (
  <div className="homepage">
    <SlideShow/>
    <FeaturedCollection/>
  </div>
);

export default HomePage;