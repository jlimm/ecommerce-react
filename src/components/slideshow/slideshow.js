import React, { useState, useEffect } from "react";
import "./slideshow.scss";

const SlideShow = () => {
  const [currentUrl, setCurrentUrl] = useState(
    "https://i.ibb.co/dMFdzH3/20181008-172202.jpg"
  );

  useEffect(() => {
    const dotPositions = document.querySelectorAll(".dot");
    dotPositions.forEach((dotPosition) => {
      dotPosition.addEventListener("click", () => {
        removeActiveClasses();
        dotPosition.classList.add("active");
        setSlideShow(dotPosition.id);
      });
    });
  }, []);
 
  
  const handleScrollButtonClick = () => {
    var location = document.querySelector(".section-featured-collection").offsetTop;
    var menuHeight = document.querySelector(".header-wrapper").offsetHeight;
    window.scrollTo({ top: location - menuHeight, behavior: "smooth" });
  };

  const setSlideShow = (dotId) => {
    if (dotId === "dot1") {
      setCurrentUrl("https://i.ibb.co/dMFdzH3/20181008-172202.jpg");
    } else if (dotId === "dot2") {
      setCurrentUrl("https://i.ibb.co/fpbv3LZ/20181012-143153.jpg");
    } else if (dotId === "dot3") {
      setCurrentUrl("https://i.ibb.co/7SVh8fW/20180902-121649.jpg");
    } else if (dotId === "dot4") {
      setCurrentUrl("https://i.ibb.co/60t0VL0/20180904-101618.jpg");
    } else if (dotId === "dot5") {
      setCurrentUrl("https://i.ibb.co/PYnV8zG/20190105-110409.jpg");
    }
  };
  const removeActiveClasses = () => {
    const dotPosition = document.querySelector(".dot.active");

    dotPosition.classList.remove("active");
  };

  return (
    <div
      className="slideshow-wrapper"
      style={{ backgroundImage: `url(${currentUrl})` }}
    >
      <ol className="slideshow-pagedots">
        <li id="dot1" className="dot active"></li>
        <li id="dot2" className="dot"></li>
        <li id="dot3" className="dot"></li>
        <li id="dot4" className="dot"></li>
        <li id="dot5" className="dot"></li>
      </ol>
      <div onClick={handleScrollButtonClick} className="slideshow-scrollbutton">
        <svg className="scrollbtn-arrow" viewBox="0 0 50 50">
          

          <polyline fill="none" stroke="currentColor" points="0 3 25 27 49 2" strokeWidth="3">
          </polyline>
          <polyline fill="none" stroke="#747070" points="0 1 25 25 49 0" strokeWidth="3">
          </polyline>
        </svg>
      {/*<i className="fas fa-chevron-down"></i>{" "}*/}
      </div>
    </div>
  );
};

export default SlideShow;
