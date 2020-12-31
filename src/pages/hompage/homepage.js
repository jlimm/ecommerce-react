import React from "react";
import FeaturedCollection from "../../components/featured-collection/featured-collection";
import SlideShow from "../../components/slideshow/slideshow";
import {HomePageContainer} from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <SlideShow/>
    <FeaturedCollection/>
  </HomePageContainer>
);

export default HomePage;