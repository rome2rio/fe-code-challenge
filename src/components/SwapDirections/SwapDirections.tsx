import styled from "styled-components";
import { ReactComponent as Logo } from "./switch-arrows.svg";

type SwapDirectionsProps = {
  onClick: () => void;
};

export function SwapDirections(props: SwapDirectionsProps) {
  return (
    <Container>
      <SwitchIconContainer onClick={props.onClick}>
        <Logo />
      </SwitchIconContainer>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #1f1e1e;
  margin-left: -28px;
  margin-top: 0px;
  right: auto;
  left: 50%;
  top: 8px;
  width: 32px;
  height: 32px;
  position: absolute;
  border-radius: 50%;
  background: white;
  z-index: 5;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: textfield;

  &:before {
    content: "";
    position: absolute;
    width: 1px;
    background: #1f1e1e;
    top: -10px;
    left: 15px;
    height: 10px;
  }

  &:after {
    content: "";
    top: auto;
    bottom: -10px;
    position: absolute;
    width: 1px;
    background-color: #1f1e1e;
    left: 15px;
    height: 10px;
  }
`;

const SwitchIconContainer = styled.div`
  padding: 8px;
`;
