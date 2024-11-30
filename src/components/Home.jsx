import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <Header />


            <section className='container section-padding-top' style={{ "--spacer-big": "2rem" }}>
                <Heading>
                    <h5><a href="">Hiring in a hurry? - </a></h5>
                    <p>Find talented pros in record time with Upwork and keep bussiness moving.</p>
                </Heading>

            </section>
            {/* 
            <Layout>
                <div>left side</div>
                <div>Main</div>
                <div>Right Side</div>
            </Layout> */}

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
    
`
const Wrapper = styled.section`
`

export default Home
