import styled from "styled-components";

export const FeaturedCollectionContainer = styled.section`
  padding: 50px 0;
  margin: 50px 0;
  @media screen and (min-width: 1000px) {
    padding: 80px 0;
    margin: 80px 0;
  }
`;

export const FeaturedCollectionHeader = styled.header`
  margin-bottom: 40px;
  text-align: center;
  @media screen and (min-width: 1000px) {
    margin-bottom: 70px;
  }
`;

export const FCTitle = styled.h3`
  font-size: 14px;
`;

export const FCSubTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.5em;
`;

export const FeaturedItemList = styled.div`
  padding: 0 30px;
`;

export const FeaturedCollectionFooter = styled.div`
  text-align: center;
  margin-top: 80px !important;
  max-width: 300px;
  margin: 0 auto;
`;
