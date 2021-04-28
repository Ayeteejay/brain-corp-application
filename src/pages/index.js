import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Module from "../components/module";

import BrainOs from "../images/brainos-logo.svg";
import Scrubber from "../images/scrubber-front-view.svg";
import FloorCare from "../images/floor-care.png";
import Delivery from "../images/delivery.png";
import FleetManagement from "../images/fleet-management.jpg";
import ComingSoon from "../images/coming-soon.png";

const OuterContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryColors.lightGrey};
  padding: 4rem;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
    h1 {
      font-size: 3rem;
    }
  }
`;
const LogoRow = styled.div``;
const InnerRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BrainOSLogo = styled.img`
  width: 150px;
  padding: 0 0 0.5rem 0;
`;

const ScrubberImg = styled.img`
  width: 500px;
`;

const HeroRow = styled.div`
  color: ${(props) => props.theme.secondaryColors.white};
  padding: 5rem;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColors.blue},
    ${(props) => props.theme.secondaryColors.blue}
  );
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
      <HeroRow>
        <InnerContainer>
          <InnerRow>
            <LogoRow>
              <BrainOSLogo src={BrainOs} alt="BrainOS" />
              <h1>Virtual Sales Demo</h1>
            </LogoRow>
            <ScrubberImg src={Scrubber} alt="Scrubber front view" />
          </InnerRow>
        </InnerContainer>
      </HeroRow>
      <OuterContainer>
        <InnerContainer>
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
        </InnerContainer>
      </OuterContainer>
    </Layout>
  );
};
export default Index;
