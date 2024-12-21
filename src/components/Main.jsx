import React from 'react'
import styled from 'styled-components'
import { ArtCard } from './LeftSide'
import { TbArticle } from "react-icons/tb";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import user from "/src/assets/images/user.svg";
import { BsThreeDots } from "react-icons/bs";
// reactions
import { BiLike } from "react-icons/bi";
import { BsFillChatHeartFill } from "react-icons/bs";
import { IoIosBulb } from "react-icons/io";

const Main = () => {
    return (
        <Container>
            <ShareBox>
                <InputWrapper>
                    <a href="">
                        <img src={"https://media.licdn.com/dms/image/v2/D4D03AQHQs9-n1xvmFg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697659463076?e=1740009600&v=beta&t=v5_P1RCgsPPv2qoE1SVtt6rAvfbEMdPLh_CiAUPcDh0"} alt="" />
                    </a>
                    <input type="text" placeholder='Start a Post' />
                </InputWrapper>
                <PostingList role='list'>
                    <li>
                        <MdOutlineInsertPhoto size={21} color='var(--clr-primary-color)' />
                        <span>Photo</span>
                    </li>
                    <li>
                        <FaVideo size={21} color='green' />
                        <span>Video</span>
                    </li>
                    <li>
                        <RiGalleryFill size={21} color='orange' />
                        <span>Event</span>
                    </li>
                    <li>
                        <TbArticle size={21} color='pink' />
                        <span>Write Article</span>
                    </li>

                </PostingList>
            </ShareBox>

            <Article>
                <SharedActor>
                    <a>
                        <img src="https://media.licdn.com/dms/image/v2/D4D03AQHQs9-n1xvmFg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697659463076?e=1740009600&v=beta&t=v5_P1RCgsPPv2qoE1SVtt6rAvfbEMdPLh_CiAUPcDh0" alt="" />
                        <div>
                            <span>title</span>
                            <span>Info</span>
                            <span>Date</span>
                        </div>
                    </a>
                    <button>
                        <BsThreeDots size={25} />
                    </button>
                </SharedActor>

                <Description>
                    Description
                </Description>

                <SharedImage>
                    <a>
                        <img src={"https://media.licdn.com/dms/image/v2/D4D22AQFVVnyVxWhnHA/feedshare-shrink_2048_1536/B4DZPobUnNGgAo-/0/1734771297288?e=1737590400&v=beta&t=y-_PPVi4k7tAjiMRoDZN6gmLatXCZ_bCaMwp7sTB13o"} alt="" />
                    </a>
                </SharedImage>

                <Impressions>
                    <Icons role='list'>
                        <li>
                            <BiLike size={18} color='var(--clr-primary-color)' />
                        </li>
                        <li>
                            <BsFillChatHeartFill size={18} color='red' />
                        </li>
                        <li>
                            <IoIosBulb size={18} color='green' />
                        </li>
                        <li data-hover="true">75</li>
                    </Icons>

                    <Comments>
                        <span data-hover="true">22</span>
                        <p data-hover="true">comments</p>
                    </Comments>
                </Impressions>


            </Article>
        </Container>
    )
}

const Container = styled.div`
height: fit-content;
font-size: 14px;
font-weight: 600;
color: var(--clr-primary-color);


@media (max-width: 70em) {
    margin-top: 1rem;
}`


const Article = styled(ArtCard)`
 padding: 0;
 margin: 0 0 8px;
 overflow: visible;
 color: var(--f-clr-black);
 
`
const Impressions = styled.div`
 /* border: 2px solid black; */
 padding: 8px;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 color: var(--f-clr-grey);

 [data-hover="true"]:hover {
    text-decoration: underline;
    color: var(--clr-primary-color);
 }
 
`

const Icons = styled.ul`
    text-align: left;
    display: flex;
    color: var(--f-clr-grey); 
`

const Comments = styled.div`
display: flex;
gap: 7px;
`


const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`

const SharedImage = styled.div`
margin-top: 12px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;

& img {
    width: 100%;
    height: auto;
}
`



const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;

    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-align: center;
    
        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;

            span {
                text-align: left;

                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n + 1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

   button {
    /* position: absolute; */
    /* right: 12px; */
    /* top: 0; */
    background: transparent;
    outline: none;
    border: none;
    padding-inline: 4px;
    border-radius: 4px;
    cursor: pointer;
   } 

`
const ShareBox = styled(ArtCard)`
height: fit-content;
padding-inline: 1rem;
padding-top: 1rem;
`
const InputWrapper = styled.div`
display: flex;
gap: 1rem;

& > a{
    width: 50px;
    height: 50px;
}

& > a img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
}

& input {
    border: 1px solid var(--bg-clr-greyish);
    width: 100%;
    border-radius: 20px;
    padding-inline: 1rem;
}

& input:focus,input:active {
    outline: none;
}

`

const PostingList = styled.ul`
 display: grid;
 grid-template-columns: 1fr 1fr ;
 row-gap: 1rem;
padding-block: 1rem;

@media (min-width: 40em) {
    grid-template-columns: 1fr 1fr 1fr 1fr; 
}

& li {
    display:  flex;
    margin-inline: auto;
    width: fit-content;
justify-content: space-around;
align-items: center;
gap: 7px;

@media (min-width: 40em) {
    margin-inline: auto;
}
}
`

export default Main
