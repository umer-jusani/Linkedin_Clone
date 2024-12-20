import React from 'react'
import styled from 'styled-components'
import { ArtCard } from './LeftSide'
import { TbArticle } from "react-icons/tb";
import { RiGalleryFill } from "react-icons/ri";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

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
