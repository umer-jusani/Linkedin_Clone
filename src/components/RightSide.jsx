import React from 'react'
import styled from 'styled-components'
import feed from '../assets/images/feed-icon.svg'


const RightSide = () => {
    return (
        <Container>
            <FollowCard>
                <div>
                    <h4>Add To Your Feed</h4>
                    <img src={feed} alt="" />
                </div>

                <CardList role='list'>
                    <li>
                        <h3>#Linkedin</h3>
                        <button>Follow</button>
                    </li>
                    <li>
                        <h3>#Video</h3>
                        <button>Follow</button>
                    </li>
                </CardList>

                <SubHeading>View all recommendations</SubHeading>
            </FollowCard>
        </Container>
    )
}

const SubHeading = styled.h4`
     font-size: 16px;
     color: var(--clr-primary-color);
     font-weight: bold;
     text-align: center;

     @media (max-width: 50em) {
        font-size: 14px;
     }
`

const Container = styled.div`
    grid-area: rightside;
`

const CardList = styled.ul`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
     gap: 0.5rem;
     margin-bottom: .5rem;
 
`

const FollowCard = styled.div`
   overflow: hidden;
background: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
border: none;
box-shadow: 0 0 0 2px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
padding: 15px 15px;
display: flex;
flex-direction: column;
gap: .5rem;
cursor: pointer;

 &  button {
    cursor: pointer;
    border-radius: 12px;
    padding: 4px 12px;
    border: 3px solid var(--f-clr-black);
    color: var(--f-clr-grey);
    
 }

 &  button:hover{
    background-color: var(--bg-clr-greyish);
    color: #000;
 }

 & > :nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: var(--f-clr-grey);
 }

`


export default RightSide
