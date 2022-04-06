import React, { useState } from "react";
import styled from "styled-components";
import ModeMenu from "../ModeMenu/ModeMenu";
import PopunderCheckbox from "../PopunderCheckbox/PopunderCheckbox";

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SearchBox = styled.div`
  border-radius: 4px;
  box-shadow: 2px 2px 20px rgb(0 0 0 / 35%);
  min-height: 176px;
  background-color: rgba(35, 40, 45, 0.96);
  padding: 20px 24px 0;
  margin-bottom: 20px;
`;

export const Modes: string[] = ["Transport", "Tickets"];

const HomeSearchBox = () => {
  const [currentMode, setCurrentMode] = useState<string>("Transport");

  return (
    <Container>
      <SearchBox>
        <ModeMenu mode={currentMode} onClick={(mode) => setCurrentMode(mode)} />
        {currentMode === "Transport" && <>Transport</>}
        {currentMode === "Tickets" && <>Tickets</>}
      </SearchBox>
      <PopunderCheckbox />
    </Container>
  );
};

export default HomeSearchBox;
