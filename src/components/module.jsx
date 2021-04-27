import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Card = styled.div`
-webkit-box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.3); 
box-shadow: 0px 0px 9px -1px rgba(0,0,0,0.3);
background:${props=>props.theme.secondaryColors.white};
display:flex;
transition:500ms;
&:hover{
    -webkit-box-shadow: 5px 5px 9px -1px rgba(0,0,0,0.5); 
    box-shadow: 5px 5px 9px -1px rgba(0,0,0,0.5);
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
            
            <h3>{props.moduleTitle}</h3>
            <InternalLink to={props.pageLink} style={{display: props.internalPage ? "block" : "none"}}>{props.ctaTitle}</InternalLink>
            <ExternalLink href={props.pageLink} style={{display:!props.internalPage ? "block" : "none"}} rel="noreferrer noopener" target="_blank">{props.ctaTitle}</ExternalLink>
        </Card>
    )
};
export default Module