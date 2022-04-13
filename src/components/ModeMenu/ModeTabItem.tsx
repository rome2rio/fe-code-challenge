import styled, { css } from "styled-components";

type ModeTabItemProps = {
  mode: string;
  isActive: boolean;
  onClick: (mode: string) => void;
};

export function ModeTabItem({ mode, isActive, onClick }: ModeTabItemProps) {
  return (
    <Container>
      <ModeTabItemAncor
        id={`button-${mode}`}
        href={`#${mode}`}
        data-tr-id="tab"
        data-tr-label={mode}
        isActive={isActive}
        onClick={() => onClick(mode)}
      >
        {mode}
      </ModeTabItemAncor>
    </Container>
  );
}

const Container = styled.li`
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  margin: 0 8px 0 0;
  position: relative;
`;

const ModeTabItemAncor = styled.a<{ isActive?: boolean }>`
  display: block;
  color: white;
  text-decoration: none;
  padding: 0 16px;
  line-height: 32px;
  position: relative;
  z-index: 2;

  &:after {
    content: "";
    background: #de007b;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    border-radius: 32px;
    opacity: 0;
    transition: all 0.1s ease-out;
    transform: scale(0.5);
  }

  &:hover:after {
    opacity: 1;
    transform: scale(1);
  }

  ${(props) =>
    props.isActive &&
    css`
      &:after {
        opacity: 1;
        transform: scale(1);
      }
    `}
`;
