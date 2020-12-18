import React from "react";
import "./slideshow.scss";

class SlideShow extends React.Component {
  state = {
    dotId: 1,
    currentUrl: "https://i.ibb.co/dMFdzH3/20181008-172202.jpg",
  };

  componentDidMount() {
    const dotPositions = document.querySelectorAll(".dot");
    dotPositions.forEach((dotPosition) => {
      dotPosition.addEventListener("click", () => {
        this.removeActiveClasses();
        dotPosition.classList.add("active");
        this.setSlideShow(dotPosition.id);
        this.setState({ dotId: dotPosition.id });
      });
    });
  }
  setSlideShow(dotId) {
    if (dotId === "dot1") {
      this.setState({
        currentUrl: "https://i.ibb.co/dMFdzH3/20181008-172202.jpg",
      });
    } else if (dotId === "dot2") {
      this.setState({
        currentUrl: "https://i.ibb.co/fpbv3LZ/20181012-143153.jpg",
      });
    } else if (dotId === "dot3") {
      this.setState({
        currentUrl: "https://i.ibb.co/7SVh8fW/20180902-121649.jpg",
      });
    } else if (dotId === "dot4") {
      this.setState({
        currentUrl: "https://i.ibb.co/60t0VL0/20180904-101618.jpg",
      });
    } else if (dotId === "dot5") {
      this.setState({
        currentUrl: "https://i.ibb.co/PYnV8zG/20190105-110409.jpg",
      });
    }
  }
  removeActiveClasses() {
    const dotPosition = document.querySelector(".dot.active");

    dotPosition.classList.remove("active");
  }

  render() {
    const { currentUrl } = this.state;
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
      </div>
    );
  }
}

export default SlideShow;
