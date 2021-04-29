import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Card = styled.div`
background:${props=>props.theme.secondaryColors.white};
display:flex;
transition:500ms;
flex-flow:column;
-webkit-box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.3); 
box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.3);
&:hover{
    -webkit-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.5); 
    box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.5);
    transform:translate(-10px, -10px)
}
img{
    max-width:100%;
}
`

const ContentRow = styled.div`
display:flex;
padding:1rem;
flex-flow:column;
align-items:center;
h3{
    color:${props=>props.theme.primaryColors.blue};
    font-size:1.25rem;
    padding:0 0 1rem 0;
}
@media (min-width:${props=>props.theme.breakPoints.sm}){
    justify-content:space-between;
    flex-flow:row;    
    padding:1.5rem;
    h3{
        padding:0;
    }
}
`

const ExternalLink = styled.a`
background: ${props=>props.theme.primaryColors.orange};
padding:1rem 2rem;
text-decoration:none;
color:${props=>props.theme.secondaryColors.white};
transition:300ms;
&:hover{
    background:${props=>props.theme.secondaryColors.green};
}
`

const InternalLink = styled(Link)`
background: ${props=>props.theme.primaryColors.orange};
padding:1rem 2rem;
text-decoration:none;
color:${props=>props.theme.secondaryColors.white};
transition:300ms;
&:hover{
    background:${props=>props.theme.secondaryColors.green};
}
`
const Module = (props) => {
    return (
        
        <Card>
            <img src={props.bannerImg} alt={props.imgAlt}/>
            <ContentRow>
            <h3>{props.moduleTitle}</h3>
            <InternalLink to={props.pageLink} style={{display: props.internalPage ? "block" : "none"}}>{props.ctaTitle}</InternalLink>
            <ExternalLink href={props.pageLink} style={{display:!props.internalPage ? "block" : "none"}} rel="noreferrer noopener" target="_blank">{props.ctaTitle}</ExternalLink>
            </ContentRow>
        </Card>
    )
};
export default Module