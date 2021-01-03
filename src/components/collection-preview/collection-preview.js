import React from "react";
import CollectionItem from "../collection-item/collection-item";

import { CollectionPreviewContainer, CollectionPreviewItem, CollectionPreviewTitle } from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle className="Heading">{title}</CollectionPreviewTitle>
    <CollectionPreviewItem>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}/>
        ))}
    </CollectionPreviewItem>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
