import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import styled from "styled-components";
import Module from "../components/module";

const Container = styled.div`
  background-color: ${(props) => props.theme.secondaryColors.lightGrey};
  padding: 4rem;
`;

const Index = () => {
  return (
    <Layout>
      <Container>
        <h1>This is the main page</h1>
        <Module moduleTitle="Floor Care"></Module>
      </Container>
    </Layout>
  );
};
export default Index;
