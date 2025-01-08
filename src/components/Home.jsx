import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// import { listenAuthState } from '../../firebase'
import Header from './Header'
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const savedUser = localStorage.getItem('user');

    useEffect(() => {
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, [savedUser]);

    // useEffect(() => {
    //     listenAuthState(navigate)
    // }, []);

    return (
        <>
            {/* {context} */}

            <Header userDetails={user} />

            <section className='container section-padding-top' style={{ "--spacer-big": "2rem" }}>
                <Heading>
                    <h5><a href="">Hiring in a hurry? - </a></h5>
                    <p>Find talented pros in record time with Upwork and keep bussiness moving.</p>
                </Heading>

            </section>

            <Layout className='container section-padding-top' style={{ "--spacer-big": "2rem", "--spacer-small": "1rem" }}>
                <LeftSide userDetails={user} />
                <Main userDetails={user} />
                <RightSide userDetails={user} />
            </Layout>

        </>
    )
}

const Heading = styled.div`
    display:  flex;
    justify-content: center;
    flex-wrap: wrap;

    & h5,p {
        margin: 0;
        font-weight: bold;
        color: var(--f-clr-grey);
        text-decoration: underline var(--f-clr-grey) 2px;

        @media (max-width: 40em) {
            font-size: 12px;
            text-align: center;
        }
    }
    
    & h5 a {
        color: var(--clr-primary-color);
        text-decoration-color: var(--clr-primary-color);

    }

    &  h5  a {
        font-weight: bold;
    }
  `
const Layout = styled.section`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    

    @media (max-width: 70em) {
        display: flex;
        flex-direction: column;
    }

`


export default Home
