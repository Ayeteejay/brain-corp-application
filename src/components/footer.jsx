import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
background:${props=>props.theme.secondaryColors.white};
color:${props=>props.theme.primaryColors.darkBlue};
padding:2rem;
display:flex;
flex-flow:column;
align-items:center;
a{
    text-decoration:none;
    color: ${props=>props.theme.primaryColors.darkBlue};
    transition:300ms;
}
a:hover{
    color:${props=>props.theme.primaryColors.orange}
}
p{
    text-align:center;
    font-weight:bold;
}
@media (min-width:${props=>props.theme.breakPoints.md}){
    flex-flow:row;
    justify-content:space-between;
    p{
        text-align:left;
    }
}
`;

const Links = styled.div`
li{
    padding:1.25rem 0 0 0;
    text-align:center;
}
ul{
    list-style:none;
    display:flex;
    flex-flow:column;
}
@media(min-width:${props=>props.theme.breakPoints.md}){
    li{
        text-align:left;
        padding:0 1.25rem;
    }
    ul{
        flex-flow:row;
    }
}
`
const Social = styled.div`
ul{
    list-style:none;
    display:flex;
}
li{
    padding:1.25rem 1.25rem;
}
@media(min-width:${props=>props.theme.breakPoints.md}){
    li{
        padding: 0 1rem;
    }
}
`
const Footer = () => { 
    const getCurDate = () =>{
        const date = new Date();
        const year = date.getFullYear();
        return year;
    };
    return(
        <Container>
            <p>Copyright &#169; {getCurDate()} Brain Corporation. All rights reserved.</p>
            <Links>
            <ul>
                <li><a href="https://www.braincorp.com/data-privacy/" rel="noreferrer noopener" target="_blank">Privacy Policy</a></li>
                <li><a href="https://www.braincorp.com/wp-content/uploads/2020/09/Brain-Corp-Corporate-Giving-Policy.pdf" rel="noreferrer noopener" target="_blank">Corporate Giving</a></li>
                <li><a href="https://www.braincorp.com/terms-of-use/" rel="noreferrer noopener" target="_blank">Terms of Use</a></li>
                {/* <li><a href="https://info.braincorp.com/hubfs/Business%20Partner%20Code%20of%20Conduct/Business%20Partner%20Code%20of%20Conduct.pdf" rel="noreferrer noopener" target="_blank">Business Partner Code of Conduct</a></li> */}
            </ul>
            </Links>
            <Social>
                <ul>
                    <li><a href="https://www.linkedin.com/company/brain-corporation" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>&nbsp;</a></li>
                    <li><a href="https://twitter.com/braincorp" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>&nbsp;</a></li>
                    <li><a href="https://www.youtube.com/user/thebraincor/" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>&nbsp;</a></li>
                    <li><a href="https://www.facebook.com/WeAreBrainCorp/" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>&nbsp;</a></li>
                    <li><a href="https://www.instagram.com/wearebraincorp/" rel="noreferrer noopener" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>&nbsp;</a></li>
                </ul>
            </Social>
        </Container>
    )
};
export default Footer;