import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-seletors";
import CustomButtom from "../button/button";
import FeaturedItem from "../featured-item/featured-item";
import "./featured-collection.scss";

const FeaturedCollection = ({ sections }) => {
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
            {sections.map(({ id, ...otherSectionProps }) => (
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
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(FeaturedCollection);
