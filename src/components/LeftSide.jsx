import React from 'react'
import styled from 'styled-components';
import bg from '../assets/images/card-bg.svg';
import camera from '../assets/images/photo.svg';
import widgetIcon from '../assets/images/widget-icon.svg';
import Itemicon from '../assets/images/item-icon.svg';
import plus from '../assets/images/plus-icon.svg';

const LeftSide = () => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground src={bg} />
                    <Photo src={camera} />
                    <div style={{ marginBlock: "14px" }}>
                        <Link>Welcome, there!</Link>
                        <span>Add a photo</span>
                    </div>
                </UserInfo>
                <Network>
                    <div style={{ textAlign: "left" }}>
                        <span>Connections</span>
                        <SubHeading>Grow Your Network</SubHeading>
                    </div>

                    <img src={widgetIcon} alt="" width={22} />
                </Network>


                <Items>
                    <img src={Itemicon} alt="" width={22} />
                    <SubHeading>My Items</SubHeading>
                </Items>
            </ArtCard>

            <ExploreCard role='list'>
                <li>
                    <SubHeading>Groups</SubHeading>
                </li>
                <li>
                    <SubHeading>Events</SubHeading>
                    <img src={plus} alt="" width="22" />
                </li>
                <li>
                    <SubHeading>Follow Hashtags</SubHeading>
                </li>
                <li>
                    <SubHeading>Discover More</SubHeading>
                </li>
            </ExploreCard>
        </Container >
    )
}


const Container = styled.div`
    grid-area: leftside;
`
const ExploreCard = styled.ul`
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

 & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
}
& > :nth-child(4) {
    border-top: 2px solid var(--bg-clr-greyish);
    padding-block: 10px;
    color: var(--f-clr-grey);
}

& > *:hover {
    color: var(--clr-primary-color);
}


`

const SubHeading = styled.h4`
     font-size: 16px;
     font-weight: bold;

     @media (max-width: 50em) {
        font-size: 14px;
     }
`
const Items = styled.div`
padding: 15px 15px;
display: flex;
align-items: center;
gap: 5px;
border-top: 2px solid var(--bg-clr-greyish);
cursor: pointer;

&:hover {
  background-color: var(--bg-clr-greyish);
}

`
const Network = styled.div`
    padding: 15px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid var(--bg-clr-greyish);

    & span {
        font-size: 15px;
        font-weight: 500;
        color: var(--f-clr-grey);

        @media (max-width: 50em) {
        font-size: 12px;
        }
    }
 

`
const UserInfo = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;

 & span {
    font-size: 18px;
    letter-spacing: normal;
    word-spacing: 0.6px;
    font-weight: 500;
    color: var(--clr-primary-color);

    @media (max-width: 50em) {
        font-size: 12px;
}
}
`

const CardBackground = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: auto; /* Set a height if needed */

  @media (max-width: 50em) {
    height: 100px;
}
  
`;




const Photo = styled.img`
 /* position: absolute; 
 transform: translate(-50%, -50%);
 top: 50%;  
 z-index: 1; 
 left: 50%;   */
  border-radius: 50%;
  padding: 0.8rem;
  background: var( --bg-clr-white);
  border: 2px solid var(--bg-clr-greyish);
  background-size: contain;
  margin-inline: auto;
margin-top: -2.5rem;
z-index: 1;
@media (max-width: 50em) {
    width: 75px;
}

`
const Link = styled.h2`
font-weight: bolder;
font-size: 21px;
 padding-bottom: 2px;

 @media (max-width: 50em) {
    font-size: 18px;
}

`
const ArtCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 1rem;
background: #fff;   
border-radius: 5px;
transition: box-shadow 83ms;
border: none;
box-shadow: 0 0 0 2px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
cursor: pointer;
  
`


export default LeftSide
