import React, { Suspense, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaLastfmSquare, FaVideo } from "react-icons/fa";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { TbArticle } from "react-icons/tb";
import styled from 'styled-components';
import { ArtCard } from './LeftSide';
// reactions
import { BiLike } from "react-icons/bi";
import { BsFillChatHeartFill } from "react-icons/bs";
import { IoIosBulb } from "react-icons/io";
// s
import { LiaCommentSolid } from "react-icons/lia";
import { LuSend } from "react-icons/lu";
import { VscLiveShare } from "react-icons/vsc";
import UserImage from "../assets/images/user.svg";
import PostModel from './PostModel';
import { BioContext } from '../ContextAPI';
import { databases, getAllDocuments } from '../appwrite';
import ReactPlayer from 'react-player';
import Loader from './loader';
import { formatTimeDifference } from '../helperFunctions';

const Main = ({ userDetails }) => {
    const { state, dispatch } = useContext(BioContext);
    const [showModel, setShowModel] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleToggleModel = () => {
        setShowModel(!showModel);
    }

    useLayoutEffect(() => {
        setLoading(true)
        getAllDocuments(userDetails, setData).finally(() => {
            setLoading(false)
        });

    }, [userDetails?.email]); // Depend on userDetails.email to ensure the user is available

    const capitalizeName = (name) => {
        let a = name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        return a;
    };

    return (
        <Container>
            <ShareBox>
                <InputWrapper>
                    <a href="">
                        {userDetails && userDetails?.photoURL ? (
                            <img src={userDetails?.photoURL} style={{ objectFit: "cover" }} onerror="console.error('Image failed to load');" alt="userimage" />
                        ) : (
                            <img src={UserImage} style={{ objectFit: "cover" }} alt="userimage" />
                        )}
                    </a>
                    {/* <div onClick={handleToggleModel}> */}
                    <input type="text" onClick={handleToggleModel} placeholder='Start a Post' value={""} />
                    {/* </div> */}
                </InputWrapper>
                <PostingList role='list'>
                    <li onClick={handleToggleModel}>
                        <MdOutlineInsertPhoto size={21} color='var(--clr-primary-color)' />
                        <span>Photo</span>
                    </li>
                    <li onClick={handleToggleModel}>
                        <FaVideo size={21} color='green' />
                        <span>Video</span>
                    </li>
                    <li onClick={handleToggleModel}>
                        <RiGalleryFill size={21} color='orange' />
                        <span>Event</span>
                    </li>
                    <li onClick={handleToggleModel}>
                        <TbArticle size={21} color='pink' />
                        <span>Write Article</span>
                    </li>

                </PostingList>
            </ShareBox>


            {(!data || data == null) && !loading ? (
                <p>No Post Yet</p>
            ) : (
                data?.map(ele => (
                    <Article key={ele.id}>
                        <SharedActor>
                            <a>
                                <img src={userDetails?.photoURL} alt="" />
                                <div>
                                    <span>{userDetails?.displayName && capitalizeName(userDetails?.displayName)}</span>
                                    <span>{formatTimeDifference(ele?.createdDate, ele?.createdTime)}</span>
                                </div>
                            </a>
                            <button>
                                <BsThreeDots size={25} />
                            </button>
                        </SharedActor>

                        <Description>{ele?.description}</Description>

                        <SharedImage>
                            <a>
                                {ele?.fileType.split("/")[0] === "image" ? (
                                    <img src={ele?.fileURL} alt="" />
                                ) : ele?.fileType.includes("/") ? (
                                    <video src={ele?.fileURL} controls>
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <ReactPlayer url={ele?.fileURL} width={"100%"} />
                                )}
                            </a>
                        </SharedImage>

                        <Impressions>
                            <Icons role="list">
                                <li>
                                    <BiLike size={18} color="var(--clr-primary-color)" />
                                </li>
                                <li>
                                    <BsFillChatHeartFill size={18} color="red" />
                                </li>
                                <li>
                                    <IoIosBulb size={18} color="green" />
                                </li>
                                <li data-hover="true">75</li>
                            </Icons>

                            <Comments>
                                <span data-hover="true">22</span>
                                <p data-hover="true">comments</p>
                            </Comments>
                        </Impressions>

                        <Reactions>
                            <ul role="list">
                                <li>
                                    <BiLike size={20} />
                                    <span>Like</span>
                                </li>
                                <li>
                                    <LiaCommentSolid size={20} />
                                    <span>Comment</span>
                                </li>
                                <li>
                                    <VscLiveShare size={20} />
                                    <span>Repost</span>
                                </li>
                                <li>
                                    <LuSend size={20} />
                                    <span>Send</span>
                                </li>
                            </ul>
                        </Reactions>
                    </Article>
                ))
            )}

            {loading && <Loader />}




            {showModel && <PostModel handleToggleModel={handleToggleModel} userDetails={userDetails} setData={setData} />}
        </Container >
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
const Reactions = styled.div`
 border-top: 2px solid var(--bg-clr-greyish);
  
 ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        padding: 12px 18px;
    }

    li:hover{
        background-color: var(--bg-clr-greyish);
    }


    @media (max-width: 30em) {
        span {
             display: none;
        }  
    }
    
 }
`
const Impressions = styled.div`
 /* border: 2px solid black; */
 padding: 8px 15px;
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
gap: 4px;
`


const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
overflow : hidden

`

const SharedImage = styled.div`
margin-top: 12px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;

& img, video {
    width: 100%;
    max-height: 40rem;
    object-fit: cover;

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
    display: flex;
    justify-content: end;
    align-items: center;
}

& > a img {
    width: 80%;
    /* height: 100%; */
    border-radius: 50%;
    /* object-fit: contain; */
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

@media (max-width: 50em) {
    gap: 0.3rem;
    
    & input {
    padding-block: .5rem;
}

    & > a{
    width: 40px;
    height: 40px;
}
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
