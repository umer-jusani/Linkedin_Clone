import React from 'react';
import styled from 'styled-components';
import LinkedinLogo from "../assets/images/login-logo.svg"

const Login = () => {
    return (
        <Container className='container'>
            <Nav>
                {/* logo */}
               <a href="">
                <img src={LinkedinLogo} alt="" />
               </a>

                {/* button */}
                <div>
                    <button>Join now</button>
                    <button>Sign in</button>
                </div>

            </Nav>
        </Container>
    )
}


const Container = styled.header`
    border: 2px solid red;
`

const Nav = styled.nav`
    /* border: 2px solid red; */
`

export default Login
