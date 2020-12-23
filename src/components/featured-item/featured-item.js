import React from "react";
import { withRouter } from "react-router-dom";
import "./featured-item.scss";

const FeaturedItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className="product-cell"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="product-item">
      <div className="product-item-wrapper">
        <div className="item-image-wrapper">
          <img className="item-image" alt="fist" src={imageUrl} />
        </div>

        <div className="product-info">
          <h1 className="product-title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(FeaturedItem);
