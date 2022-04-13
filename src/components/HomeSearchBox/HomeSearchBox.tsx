import { useState } from "react";
import styled from "styled-components";
import { ModeMenu } from "../ModeMenu/ModeMenu";
import { PopunderCheckbox } from "../PopunderCheckbox/PopunderCheckbox";
import { SearchTransport } from "../SearchTransport/SearchTransport";

export const Modes: string[] = ["Transport", "Tickets"];

export function HomeSearchBox() {
  const [currentMode, setCurrentMode] = useState<string>("Transport");

  return (
    <Container>
      <SearchBox>
        <ModeMenu mode={currentMode} onClick={(mode) => setCurrentMode(mode)} />
        {currentMode === "Transport" && <SearchTransport />}
        {currentMode === "Tickets" && <>Tickets</>}
      </SearchBox>
      <PopunderCheckbox />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SearchBox = styled.div`
  border-radius: 4px;
  box-shadow: 2px 2px 20px rgb(0 0 0 / 35%);
  background-color: rgba(35, 40, 45, 0.96);
  padding: 20px 24px 0;
  margin-bottom: 20px;
`;
