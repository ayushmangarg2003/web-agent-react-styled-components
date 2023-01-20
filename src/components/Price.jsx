import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:10px;
  flex-wrap:wrap;
  @media only screen and (max-width: 880px) {
    gap: 30px;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    gap:20px
  }
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="1000" type="Basic" />
      <PriceCard price="2000" type="Premium" />
      <PriceCard price="3000" type="Advanced" />
    </Container>
  );
};

export default Price;
