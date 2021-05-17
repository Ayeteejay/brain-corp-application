import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Dashboard from '../images/floor-care/scrubber-dashboard.png';
import Restart from '../images/restart-icon.svg';
import Data from '../modules/floorCareModule.js';
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
padding:2rem;
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
display:flex;
justify-content:space-between;
padding:1rem 0 0 0;
button{
    color:${props=>props.theme.secondaryColors.white};
    border:none;
    padding:1rem 1.5rem;
    cursor:pointer;
    transition:500ms;
}
.previous-button{
    background: ${props=>props.theme.secondaryColors.darkGrey}; 
    &:hover{
        background: ${props=>props.theme.secondaryColors.green};
    }
}
.next-button{
    background: ${props=>props.theme.secondaryColors.green};
    &:hover{
        background: ${props=>props.theme.secondaryColors.darkGrey}; 
    }
}
`
const RestartRow = styled.div`
display:flex;
padding:1rem 0 0 0;
align-items:middle;
border-top:1px solid ${props=>props.theme.primaryColors.darkBlue};
a{
    text-decoration:none;
    color:${props=>props.theme.primaryColors.darkBlue};
    font-weight:bold;
    transition:500ms;
    &:hover{
        color:${props=>props.theme.primaryColors.orange};
    }
}
img{
    padding: 0 0.5rem 0 0;
}
`

const DashboardColumn = styled.div`
background-image:url(${Dashboard});
background-size: cover;
background-repeat: no-repeat;
background-position: bottom right;
height: 1000px;
width:1000px;
position: relative;
justify-self: end;
`
const ScreenContainer = styled.div`
  position: absolute;
  top:280px;
  left: 240px;
  img {
    cursor: pointer;
  }
`;
const FloorCare = () => {
    const [screenCounter, setScreenCounter] = useState(0);
    const [currentScreen, setCurrentScreen] = useState(null);
    const [descriptionCopy, setDescriptionCopy] = useState(null);
    const [descriptionTitle, setDescriptionTitle] = useState(null);
    const [screenAlt, setScreenAlt] = useState(null);
    const [showVideo, setShowVideo] = useState(false);
    const [firstScreen, setFirstScreen] = useState(true);

     // Save progress of user in local storage
    useEffect(() => {
    const progressSave = Number(localStorage.getItem("screenCounter") || 0);
    if (progressSave > 0) {
      setScreenCounter(progressSave);
    }
  }, [setScreenCounter]);

  useEffect(() => {
    if (screenCounter === 0) {
      setCurrentScreen(Data[0].img);
      setScreenAlt(Data[0].alt);
      setDescriptionCopy(Data[0].description);
      setDescriptionTitle(Data[0].title);
      if (!firstScreen) {
        setFirstScreen(true);
      }
    } else if (screenCounter === 1) {
      localStorage.setItem("screenCounter", screenCounter);
      setCurrentScreen(Data[1].img);
      setScreenAlt(Data[1].alt);
      setDescriptionTitle(Data[1].title);
      setDescriptionCopy(Data[1].description);
      setFirstScreen(false);
    } else if (screenCounter === 2) {
      localStorage.setItem("screenCounter", screenCounter);
      setShowVideo(false);
      setCurrentScreen(Data[2].img);
      setDescriptionTitle(Data[2].title);
      setDescriptionCopy(Data[2].description);
      setScreenAlt(Data[2].alt);
    } else if (screenCounter === 3) {
      localStorage.setItem("screenCounter", screenCounter);
      setShowVideo(true);
      setDescriptionCopy("Copy about the video playing");
    }
  }, [screenCounter, firstScreen]);

  const prevScreen = () => {
    if (screenCounter === 0) {
      console.log("Freezing this at screen 1.");
    } else {
      setScreenCounter(screenCounter - 1);
    }
  };
    return (
        <Layout>
            <Container>
                <ContentColumn>
                <h1>FloorCare</h1>
                <DescriptionContainer>
                    <DescriptionContent>
                    <h4>{descriptionTitle}</h4>
                    <p>{descriptionCopy}</p>
                    </DescriptionContent>
                        <DescriptionButtonRow>
                        <button className="previous-button"
                        style={{ display: firstScreen ? "none" : "block" }}
                        onClick={prevScreen}
                        >
                        Previous
                        </button>
                        <button className="next-button"
                        style={{display:screenCounter === Data.length ? "none" : "block"}}
                        onClick={()=>setScreenCounter(screenCounter+1)}>Next</button>
                        </DescriptionButtonRow>
                </DescriptionContainer>
                <RestartRow>
                    <img src={Restart} alt="Restart icon"/>
                   <Link to="/" onClick={()=>localStorage.setItem("screenCounter", 0)}>Back to home</Link>
                </RestartRow>
                </ContentColumn>
                <DashboardColumn>
                    <ScreenContainer>
                        <img
                            style={{ display: showVideo === false ? "block" : "none" }}
                            src={currentScreen}
                            alt={screenAlt}
                            onClick={() => setScreenCounter(screenCounter + 1)}
                        />
                        <div style={{ display: showVideo ? "block" : "none" }}>
                            <iframe
                            width="240"
                            height="380"
                            src="https://www.youtube.com/embed/KwPpRwBHhNs"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>
                     </ScreenContainer>
                </DashboardColumn>
            </Container>
        </Layout>
    )
};
export default FloorCare