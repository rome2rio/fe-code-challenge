import React from "react";
import styled from "styled-components";
import SearchButton from "../SearchButton/SearchButton";
import SearchTransportPairs from "../SearchTransportPairs/SearchTransportPairs";

const Container = styled.div`
  display: flex;
  padding: 24px 0;
`;

const SearchTransport = () => {
  return (
    <Container>
      <SearchTransportPairs />
      <SearchButton />
    </Container>
  );
};

export default SearchTransport;
