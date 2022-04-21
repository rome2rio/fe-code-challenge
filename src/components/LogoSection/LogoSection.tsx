import styled from "styled-components";

const LOGOS = [
  "//static.r2r.io/images/logos/amtrak.png",
  "//static.r2r.io/images/logos/nationalexpress-bus.png",
  "//static.r2r.io/images/logos/trenitalia.png",
  "//static.r2r.io/images/logos/skyscanner.png",
  "//static.r2r.io/images/logos/bookingcom.png",
  "//static.r2r.io/images/logos/rentalcars.png",
];

export function LogoSection() {
  return (
    <Container>
      <Centered>
        <LogoContainer>
          <Title>Our partners include:</Title>
        </LogoContainer>
        {LOGOS.map((it) => (
          <LogoContainer>
            <Logo src={it} />
          </LogoContainer>
        ))}
      </Centered>
    </Container>
  );
}

const LogoContainer = styled.div`
  display: inline-block;
  width: 14%;
`;

const Logo = styled.img`
  display: inline-block;
  height: 36px;
  width: auto;
`;

const Container = styled.section`
  padding: 16px 24px;
`;

const Centered = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  position: relative;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 13px;
  line-height: 26px;
  background-color: #ebeef3;
  color: #5d6981;
  text-decoration: none;
  font-weight: 400;
  padding: 0 8px;
  border-radius: 6px;

  // center
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
