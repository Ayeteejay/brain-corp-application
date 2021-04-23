import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import "../styles/global.css"
import Header from './header';

const theme = {
    primaryColors:{        
        orange: "#ff7c00",
        blue: "#0038b5",
        darkBlue: "#2f3e60"
    },
    secondaryColors: {
        white:"#fff",
        orange: "#ffaa01",
        blue: "#1faeff",
        lightGrey: "#EFEFEF"
    },
    breakPoints:{
        xs: "0",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px"
    },
}

const LayoutWrapper = styled.div`

`

const Layout = ({children})=>{
    return (
        <ThemeProvider theme={theme}>
            <Header></Header>
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </ThemeProvider>
    )
};
export default Layout