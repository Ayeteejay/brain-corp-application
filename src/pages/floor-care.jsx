import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import {Link} from 'gatsby'

const Container = styled.div`
background-color: ${(props) => props.theme.secondaryColors.lightGrey};
padding:5rem 0;
@media (min-width:${props=>props.theme.breakPoints.sm}){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    h1{
        font-size:3rem;
        color:${props=>props.theme.primaryColors.blue};
    }
}
`;

const ContentColumn = styled.div`
display:flex;
flex-flow:column;
justify-content:space-between;
`
const DescriptionContainer = styled.div`

`
const DescriptionContent = styled.div`
background: ${props=>props.theme.secondaryColors.white};
padding:3rem;
p{
    font-size:2rem;
    line-height:1.4;
    color:${props=>props.theme.primaryColors.darkBlue};
}
h4{
    color:${props=>props.theme.primaryColors.blue};
    text-transform:uppercase;
    font-size:0.75rem;
    font-weight:bold;
}
-webkit-box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.3); 
box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.3);
`
const DescriptionButtonRow = styled.div`

`
const RestartRow = styled.div`
border-top:1px solid ${props=>props.theme.primaryColors.darkBlue};
`

const DashboardColumn = styled.div`

`
const FloorCare = () => {
    return (
        <Layout>
            <Container>
                <ContentColumn>
                <h1>FloorCare</h1>
                <DescriptionContainer>
                    <DescriptionContent>
                    <h4>Title of step goes here</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, molestias. Dolorum maxime earum obcaecati accusamus autem, voluptate assumenda quo consequuntur labore vero, amet repellat eos.</p>
                    </DescriptionContent>
        <DescriptionButtonRow>
            <p>Buttons here</p>
        </DescriptionButtonRow>
                </DescriptionContainer>
                <RestartRow>
                  <Link>Restart module</Link>
                </RestartRow>
                </ContentColumn>
                <DashboardColumn>
                    <h2>dashboard image here</h2>
                </DashboardColumn>
            </Container>
        </Layout>
    )
};
export default FloorCare