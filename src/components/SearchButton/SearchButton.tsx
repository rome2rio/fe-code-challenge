import React from "react";
import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  height: 48px;
  border: 0;
  background: #de007b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  min-width: 140px;
  margin: 0 auto;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

type SearchButtonProps = {
  onClick: () => void;
};

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return <Button onClick={onClick}>Search</Button>;
};

export default SearchButton;
