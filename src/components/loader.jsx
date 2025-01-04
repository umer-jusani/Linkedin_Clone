import React from 'react';
import Spinner from "../assets/images/Spinner@1x-1.0s-200px-200px.gif"
import styled from 'styled-components';

const Loader = () => {
    return (
        <Container>
            <img src={Spinner} width={70} alt="" />
        </Container>
    )
}

export const Container = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
`

export default Loader
