import { useState } from "react";
import styled from "styled-components";
import { SearchButton } from "../SearchButton/SearchButton";
import { SearchTransportPairs } from "../SearchTransportPairs/SearchTransportPairs";

export function SearchTransport() {
  const [origin, setOrigin] = useState<string>("Melbourne");
  const [destination, setDestination] = useState<string>("Sydney");

  const swapDirections = () => {
    const o = origin;
    const d = destination;
    setOrigin(d);
    setDestination(o);
  };

  const openExplore = () => {
    const url = `http://www.rome2rio.com/map/${origin}/${destination}`;
    var win = window.open(url, "_blank")!;
    win.focus();
  };

  return (
    <Container>
      <SearchTransportPairs
        origin={origin}
        destination={destination}
        onNewOrigin={(newOrigin) => setOrigin(newOrigin)}
        onNewDestination={(newDestination) => setDestination(newDestination)}
        onSwapDirections={() => swapDirections()}
      />
      <SearchButton onClick={() => openExplore()}>Search</SearchButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 24px 0;
`;
