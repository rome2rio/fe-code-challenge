import bg from "./bg.jpeg";
import logo from "./r2r-logo.svg";
import styled from "styled-components";
import { HomeSearchBox } from "../HomeSearchBox/HomeSearchBox";
import { LogoSection } from "../LogoSection/LogoSection";

export function App() {
  return (
    <>
      <BackgroundContainer>
        <BackgroundCover />
        <Banner>
          <CompanyLogo />
          <Headline>
            Discover how to get anywhere by plane, train, bus, ferry & car
          </Headline>
          <HomeSearchBox />
        </Banner>
      </BackgroundContainer>
      <LogoSection />
    </>
  );
}

const BackgroundContainer = styled.section`
  height: 87vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: 50%;
  position: relative;
  padding-top: 70px;
  min-height: 500px;
`;

const BackgroundCover = styled.div`
  background: rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const CompanyLogo = styled.div`
  margin: 0 auto 24px;
  background-image: url(${logo});
  width: 420px;
  height: 120px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.3));
`;

const Headline = styled.h1`
  letter-spacing: 0.035em;
  line-height: 1.2;
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 0 8px;
  color: white;
  text-align: center;
  padding-bottom: 20px;
`;

const Banner = styled.div`
  position: relative;
  z-index: 2;
`;
