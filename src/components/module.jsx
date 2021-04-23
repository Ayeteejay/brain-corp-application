import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Container = styled.div`
background-color:red;
`
const Module = (props) => {
    return (
        <Container>
            <Link to={props.pageLink}>{props.moduleTitle}</Link>
        </Container>
    )
};
export default Module