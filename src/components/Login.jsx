import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import GoolgeLogo from "../assets/images/google.svg";
import LoginHero from "../assets/images/login-hero.svg";
import LinkedinLogo from "../assets/images/login-logo.svg";
import { signInWithPopup, provider, auth, listenAuthState } from "../../firebase"
import { BioContext } from '../ContextAPI';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { state, dispatch } = useContext(BioContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        signInWithPopup(auth, provider).then((res) => {
            console.log(res, "response")
            const { email, displayName, photoURL } = res?.user;
            // dispatch({ type: "SET_USERDETAILS", payload: res?.user });

            // Save data to localStorage
            localStorage.setItem('user', JSON.stringify({ email, displayName, photoURL }));

            navigate("/home");
        }).catch(err => {
            alert("Something Went Wrong")
        })
    }

    useEffect(() => {
        listenAuthState(navigate)
    }, []);


    return (
        <Container>
            <Header>
                <div className='container'>
                    <Nav>
                        {/* logo */}
                        <a href="">
                            <img src={LinkedinLogo} alt="" />
                        </a>

                        {/* button */}
                        <div>
                            <JoinNow>Join now</JoinNow>
                            <SignIn>Sign in</SignIn>
                        </div>

                    </Nav>
                </div>
            </Header>
            <div className='hero_section padding-block-500'>
                <div className='container'>
                    <HeroSection>
                        <Content>
                            <h1>Welcome to your professional community</h1>
                            <button onClick={handleLogin}>
                                <a href='#'>
                                    <img src={GoolgeLogo} alt="" />
                                </a>
                                Sign in with Google
                            </button>
                        </Content>
                        <Image>
                            <img src={LoginHero} alt="" />

                            <button onClick={handleLogin} >
                                <a href='#'>
                                    <img src={GoolgeLogo} alt="" />
                                </a>
                                Sign in with Google
                            </button>
                        </Image>
                    </HeroSection>
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
   @media (min-width: 50em) {
    height: 100vh;
    overflow-y:hidden ;
   }
`

const Header = styled.header`
    margin-top: 1rem;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & img {
        width: 10em;
        height: auto;

        @media (max-width: 30em) {
            width: 7em;
        }
    }
`

const JoinNow = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: transparent;
    font-weight: 500;
    font-size: clamp(0.9rem, 0.8351rem + 0.3243vw, 1.2rem);
    cursor: pointer;
    transition-duration: 0.5s;
    &:hover{
        color: var(--clr-primary-color);
    }

     
        @media (max-width: 30em) {
            padding: 5px 10px;
        }
        

`

const SignIn = styled.a`
    border: none;
    padding: 10px 20px;
    color: var(--clr-primary-color);
    font-size: clamp(0.9rem, 0.8351rem + 0.3243vw, 1.2rem);
    font-weight: 500;
    border-radius: var(--border-radius);
    cursor: pointer;
    box-shadow: inset 0 0 0 1px var(--clr-primary-color);
    transition-duration: 0.5s;
   
    @media (max-width: 30em) {
            padding: 5px 10px;
        }

    &:hover{
        background-color: var(--clr-primary-color);
        color: var(--clr-neutral-color);
    }
`

const Content = styled.div`

 & h1 {
    font-size: 56px;
    color: var(--clr-primary-color);
    font-weight: 200;
    line-height: 1.2;

    @media (max-width: 50em) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      font-weight: 350;
    }
 
    @media (min-width: 50em) {
        padding-top: 5rem;
    }
}

 & > button {
    display: flex;
    justify-content: center;
     width: 60%;
    gap: 0.5rem;
    cursor: pointer;
    padding-block: 12px;
    border-radius: var(--border-radius);
    transition-duration: 0.5s;
    margin-top: 3rem;

    &:hover{
        border: 2.5px solid black;
        font-weight: 600;
    }

    
    
    @media (max-width: 50em) {
        display: none;
    }
}
`

const HeroSection = styled.header`
    display: grid;
    gap: 1rem;
    /* padding-top: 6rem; */

    @media (min-width: 50em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    /* padding-top: 6rem; */
  }
`

const Image = styled.header`
    & > img {
        width: 70rem;
        height: 100%;
        object-fit: contain;
    }

    & > button {
    display: flex;
    justify-content: center;
     width: 100%;
    gap: 0.5rem;
    cursor: pointer;
    padding-block: 12px;
    border-radius: var(--border-radius);
    transition-duration: 0.5s;
    margin-bottom: 1rem;

    &:hover{
        border: 2.5px solid black;
        font-weight: 600;
    }

    
    @media (min-width: 50em) {
        display: none;
    }

}

  
`

export default Login
