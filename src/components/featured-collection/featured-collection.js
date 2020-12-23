import React from "react";
import CustomButtom from "../button/button";
import FeaturedItem from "../featured-item/featured-item";
import "./featured-collection.scss";

class FeaturedCollection extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
       
      ],
    };
  }

  render() {
    return (
      <div className="section-featured-collection">
        <section className="Section section-spacingNormal">
          <header className="SectionHeader center">
            <div className="Container">
              <h3 className="SectionHeading Heading SubHeading">Featuring</h3>
              <h2 className="SectionHeading Heading">Featured Collection</h2>
            </div>
          </header>
          <div className="ProductPanel">
            <div className="ProductListWrapper">
              {this.state.sections.map(({ id, ...otherSectionProps }) => (
                <FeaturedItem key={id} {...otherSectionProps} />
              ))}
            </div>
            <div className="Container">
              <div className="SectionFooter">
                <CustomButtom>View All Products</CustomButtom>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FeaturedCollection;
