import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-seletors";
import CustomButtom from "../button/button";
import FeaturedItem from "../featured-item/featured-item";
import {
  FCTitle,
  FCSubTitle,
  FeaturedCollectionFooter,
  FeaturedItemList,
  FeaturedCollectionHeader,
  FeaturedCollectionContainer,
} from "./featured-collection.styles";

const FeaturedCollection = ({ sections }) => {
  return (
    <FeaturedCollectionContainer>
      <FeaturedCollectionHeader>
        <FCTitle className="Heading">Featuring</FCTitle>
        <FCSubTitle className="Heading">Featured Collection</FCSubTitle>
      </FeaturedCollectionHeader>
      <FeaturedItemList>
        {sections.map(({ id, ...otherSectionProps }) => (
          <FeaturedItem key={id} {...otherSectionProps} />
        ))}
      </FeaturedItemList>
      <FeaturedCollectionFooter>
        <CustomButtom>View All Products</CustomButtom>
      </FeaturedCollectionFooter>
    </FeaturedCollectionContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(FeaturedCollection);
