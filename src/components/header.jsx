import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from '../images/brain-logo.svg';
import {Link} from 'gatsby';

const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:0.75rem;
img{
width:100px;
}
a{
    color:${props=>props.theme.primaryColors.darkBlue};
    text-decoration:none;
    font-weight:bold;
    transition:300ms;
}
a:hover{
    color:${props=>props.theme.primaryColors.orange}
}
@media (min-width: ${props=>props.theme.breakPoints.sm}){
    padding:1.25rem 2rem;
}
`

const LinksColumn = styled.div`
ul{
    list-style:none;
    display:flex
}li{
    padding:0 1rem;
}
display:none;
@media (min-width:${props=>props.theme.breakPoints.sm}){
    display:block;
}
`
const Toggle = styled.div`
cursor:pointer;
.top-bar{
  height:3px;
  width:20px;
  margin:0 0 4px 0;   
  display:block;
  background-color: ${props=>props.theme.primaryColors.darkBlue};
  transition:200ms;
}
.top-active{
    transform:rotate(45deg);
    // transform-origin: 10% 50%;
}
.middle-bar{
    height:3px;
    width:20px;
    margin:0 0 4px 0;
    display:block;
    transition:200ms;
    background-color: ${props=>props.theme.primaryColors.darkBlue};
}
.middle-active{
    opacity:0;
}
.bottom-bar{
    height:3px;
    width:20px;
    margin:0 0 4px 0;
    display:block;
    transition:200ms;
    background-color: ${props=>props.theme.primaryColors.darkBlue};
}
.bottom-active{
    transform: rotate(-45deg);
}
@media (min-width:${props=>props.theme.breakPoints.sm}){
    display:none;
}
`

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Container>
            <Link to="/">
            <img src={Logo} alt="Brain Corp logo"/></Link>
            <LinksColumn>
            <ul>
                <li><Link to="/floor-care">Floor Care</Link></li>
                <li><Link to="/delivery">Delivery</Link></li>
                <li><a href="https://braincorporation.invisionapp.com/console/share/4R2EQ73TG2" rel="noreferrer noopener" target="_blank">Fleet Management</a></li>
                <li><a href="https://www.braincorp.com/" rel="noreferrer noopener" target="_blank">Coming Soon</a></li>
            </ul>
            </LinksColumn>
            <Toggle onClick={()=>setToggle(!toggle)}>
                <span className={`top-bar ${toggle ? "top-active" : ""}`}></span>
                <span className={`middle-bar ${toggle ? "middle-active" : ""}`}></span>
                <span className={`bottom-bar ${toggle ? "bottom-active" : ""}`}></span>
            </Toggle>
        </Container>
    )
};
export default Header