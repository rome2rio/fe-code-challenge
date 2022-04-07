import React from "react";
import styled from "styled-components";
import Autocomplete from "../Autocomplete/Autocomplete";
import SwapDirections from "../SwapDirections/SwapDirections";

const Container = styled.div`
  position: relative;
  width: 100%;
  background: white;
  border-radius: 3px;
  display: flex;
  flex: 1;
  margin-right: 16px;
`;

const SearchTransportPairs = () => {
  return (
    <Container>
      <Autocomplete startValue="Melbourne, VIC, Australia" />
      <SwapDirections />
      <Autocomplete startValue="Sydney, NSW, Australia" />
    </Container>
  );
};

export default SearchTransportPairs;
