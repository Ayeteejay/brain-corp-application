import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Module from "../components/module";

const OuterContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryColors.lightGrey};
  padding: 4rem;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 80%;
`;
const HeroRow = styled.div`
  color: ${(props) => props.theme.secondaryColors.white};
  padding: 5rem;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColors.blue},
    ${(props) => props.theme.secondaryColors.blue}
  );
`;
const ModuleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const Index = () => {
  return (
    <Layout>
      <HeroRow>
        <h1>Virtual Sales Demo</h1>
      </HeroRow>
      <OuterContainer>
        <InnerContainer>
          <ModuleRow>
            <Module
              moduleTitle="Floor Care"
              ctaTitle="View module"
              internalPage={true}
              pageLink="/floor-care"
            ></Module>
            <Module
              moduleTitle="Delivery"
              ctaTitle="View module"
              internalPage={true}
              pageLink="/delivery"
            ></Module>
            <Module
              moduleTitle="Fleet Management"
              ctaTitle="View module"
              internalPage={false}
              pageLink="https://braincorporation.invisionapp.com/console/share/4R2EQ73TG2"
            ></Module>
            <Module
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
