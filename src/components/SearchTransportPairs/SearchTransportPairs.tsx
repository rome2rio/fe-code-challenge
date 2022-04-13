import styled from "styled-components";
import { Autocomplete } from "../Autocomplete/Autocomplete";
import { SwapDirections } from "../SwapDirections/SwapDirections";

type SearchTransportPairsProps = {
  origin: string;
  destination: string;
  onNewOrigin: (st: string) => void;
  onNewDestination: (st: string) => void;
  onSwapDirections: () => void;
};

export function SearchTransportPairs(props: SearchTransportPairsProps) {
  return (
    <Container>
      <Autocomplete
        startCanonical={props.origin}
        onNewCanonical={props.onNewOrigin}
      />
      <SwapDirections onClick={props.onSwapDirections} />
      <Autocomplete
        startCanonical={props.destination}
        onNewCanonical={props.onNewDestination}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  background: white;
  border-radius: 3px;
  display: flex;
  flex: 1;
  margin-right: 16px;
`;
