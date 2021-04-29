import * as React from "react";
import Layout from "../components/layout";
import styled, { keyframes } from "styled-components";
import Module from "../components/module";

import BrainOs from "../images/brainos-logo.svg";
import Scrubber from "../images/scrubber-front-view.svg";
import Pathways from "../images/pathways.svg";
import FloorCare from "../images/floor-care.png";
import Delivery from "../images/delivery.png";
import FleetManagement from "../images/fleet-management.jpg";
import ComingSoon from "../images/coming-soon.png";

const HeroSection = styled.div`
  color: ${(props) => props.theme.secondaryColors.white};
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColors.blue},
    ${(props) => props.theme.secondaryColors.blue}
  );
  background: url(${Pathways}) no-repeat;
  background-size: cover;
`;
const HeroContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    width: 75%;
  }
`;
const HeroRow = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    justify-content: space-around;
    flex-flow: row;
  }
`;

const LogoColumn = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 0 0;
  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    h1 {
      font-size: 3rem;
    }
    padding: 0;
    align-items: flex-start;
  }
`;

const ScrubberAnimate = keyframes`
from{
  opacity:0;
  transform: translate(0,25px)
}to{
  opacity:1;
  transform: translate(0,0);
}
`;
const ScrubberColumn = styled.div`
  padding: 5rem 0 0 0;
  display: flex;
  justify-content: flex-start;
  img {
    width: 300px;
    animation: ${ScrubberAnimate} 1s ease-in-out;
  }
  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    img {
      width: 500px;
    }
  }
`;

const BrainOSLogo = styled.img`
  width: 150px;
  padding: 0 0 0.5rem 0;
`;

const ModuleSection = styled.div`
  background-color: ${(props) => props.theme.secondaryColors.lightGrey};
  padding: 4rem;
  display: flex;
  justify-content: center;
`;
const ModuleContainer = styled.div`
  padding: 5rem 0;
  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    width: 80%;
  }
`;
const ModuleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Index = () => {
  return (
    <Layout>
      <HeroSection>
        <HeroContainer>
          <HeroRow>
            <LogoColumn>
              <BrainOSLogo src={BrainOs} alt="BrainOS" />
              <h1>Virtual Sales Demo</h1>
            </LogoColumn>
            <ScrubberColumn>
              <img
                className="scrubber"
                src={Scrubber}
                alt="Scrubber front view"
              />
            </ScrubberColumn>
          </HeroRow>
        </HeroContainer>
      </HeroSection>
      <ModuleSection>
        <ModuleContainer>
          <ModuleRow>
            <Module
              bannerImg={FloorCare}
              imgAlt="Image of Scrubber robot operating in store."
              moduleTitle="Floor Care"
              ctaTitle="View module"
              internalPage={true}
              pageLink="/floor-care"
            ></Module>
            <Module
              bannerImg={Delivery}
              imgAlt="Image of Tug robot delivery product to store shelf."
              moduleTitle="Delivery"
              ctaTitle="View module"
              internalPage={true}
              pageLink="/delivery"
            ></Module>
            <Module
              bannerImg={FleetManagement}
              imgAlt="Image of robots working in store environment."
              moduleTitle="Fleet Management"
              ctaTitle="View module"
              internalPage={false}
              pageLink="https://braincorporation.invisionapp.com/console/share/4R2EQ73TG2"
            ></Module>
            <Module
              bannerImg={ComingSoon}
              imgAlt="Image of innovation happening."
              moduleTitle="Coming soon"
              ctaTitle="Learn more"
              internalPage={false}
              pageLink="https://www.braincorp.com/"
            ></Module>
          </ModuleRow>
        </ModuleContainer>
      </ModuleSection>
    </Layout>
  );
};
export default Index;
