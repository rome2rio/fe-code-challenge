import styled from "styled-components";

export function PopunderCheckbox() {
  return (
    <Container>
      <input id="search_hotels" type="checkbox" data-provider="BookingCom" />
      <Label id="label_search_hotels" htmlFor="search_hotels">
        Search accommodation with Booking.com
      </Label>
    </Container>
  );
}

const Container = styled.div`
  color: white;
`;

const Label = styled.label`
  padding-left: 10px;
`;
