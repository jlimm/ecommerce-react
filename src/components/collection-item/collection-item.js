import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
import {
  AddCartButton,
  CollectionItemContainer,
  CollectionItemFooter,
  CollectionItemImage,
  CollectionItemName,
  CollectionItemPrice,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionItemFooter>
        <CollectionItemName> {name} </CollectionItemName>
        <CollectionItemPrice> {price} </CollectionItemPrice>
      </CollectionItemFooter>
      <AddCartButton onClick={() => addItem(item)} inverted >
        Add to Cart
      </AddCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
