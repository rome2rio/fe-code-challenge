import React from "react";
import styled from "styled-components";
import { Modes } from "../HomeSearchBox/HomeSearchBox";
import ModeTabItem from "../ModeTabItem/ModeTabItem";

const Container = styled.div`
  display: flex;
`;

const ModeTab = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

type ModeMenuProps = {
  mode: string;
  onClick: (mode: string) => void;
};

const ModeMenu = ({ mode, onClick }: ModeMenuProps) => {
  return (
    <Container>
      <ModeTab>
        {Modes.map((curMode) => (
          <ModeTabItem
            key={curMode}
            mode={curMode}
            isActive={mode === curMode}
            onClick={onClick}
          />
        ))}
      </ModeTab>
    </Container>
  );
};

export default ModeMenu;
