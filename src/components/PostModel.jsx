import React, { useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import UserImage from "../assets/images/user.svg";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";
import ReactPlayer from 'react-player/lazy'
import { getAllDocuments, getUloadedFileURL, savePostDB } from '../appwrite';
import { ID } from 'appwrite';
import Loader from './loader';
import { extractCurrentDate, extractCurrentTime } from '../helperFunctions';

const PostModel = ({ handleToggleModel, userDetails, setData }) => {
    const [editorText, setEditorText] = useState('');
    // store the uploaded image on this state
    const [shareImage, setShareImage] = useState(null);
    // store the external image url on this state.
    const [externalURL, setExternalURL] = useState(null);
    const [loader, setLoader] = useState(false);
    const inputFile = useRef(null);


    // Open the file dialog
    const OpenFileDialog = (type) => {

        if (type) inputFile.current.setAttribute("accept", `${type}/*`);
        inputFile.current.click();
    }


    const handleChange = (e) => {
        const image = e.target.files[0];

        // handling error
        if (image == "undefined") {
            alert(`not an image, the file is a ${typeof image}`);
            return;
        }

        setShareImage(image);
    }

    const StyledUploadImage = styled.div`
     img, video {
        width: 100%;
        margin-top: 1rem;
        object-fit: cover;
        height: max(22rem, 10rem);

        @media (max-width: 50em) {
            height: max(10rem, 5rem);
        }
    }
`;

    const UploadImage = useCallback(() => {
        return (
            <StyledUploadImage> {/* This refers to the renamed styled component */}
                {shareImage ? (
                    shareImage?.type?.split("/")[0] === "video" ? (
                        <video
                            src={URL.createObjectURL(shareImage)}
                            controls
                            width="600"
                        >
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={URL.createObjectURL(shareImage)} alt="Shared" />
                    )
                ) : null}
            </StyledUploadImage>
        );
    }, [shareImage]);


    // handlePost

    const handlePost = async (file) => {
        try {
            // getting URL Ready
            setLoader(true);
            let fileURL = typeof file == "object" ? await getUloadedFileURL(file, setLoader) : file

            const postData = {
                description: editorText,
                fileURL: fileURL || "",
                fileType: shareImage?.type ? shareImage?.type : "video",
                createdTime: extractCurrentTime(),
                createdDate: extractCurrentDate()
            };

            await savePostDB(userDetails, postData, setLoader).then(() => {
                getAllDocuments(userDetails, setData);
            }).finally(() => {
                setLoader(false);
                handleToggleModel();
            });

        } catch (error) {
            setLoader(false);
            console.log(error, "error uploading ")
        }


    }



    return (
        <Container>
            <Content>
                {loader ? <Loader /> : null}
                <Header>
                    <h2>Create a Post</h2>
                    {/* <button> */}
                    <IoMdClose size={22} onClick={handleToggleModel} />
                    {/* </button> */}
                </Header>

                <SharedContent>
                    <UserInfo>
                        {userDetails && userDetails?.photoURL ? (
                            <img src={userDetails?.photoURL} style={{ objectFit: "cover" }} alt="userimage" />
                        ) : (
                            <img src={UserImage} alt="" />
                        )}

                        <span>{userDetails?.displayName}</span>
                    </UserInfo>
                    <Editor>
                        <textarea value={editorText} onChange={e => setEditorText(e.target.value)}
                            placeholder='What do you want to talk about?'
                            autoFocus={false}
                        />


                        {/* External Upload */}
                        <ExternalUpload>
                            <h5>OR</h5>
                            <input type="text" disabled={shareImage ? true : false} placeholder='Enter a Video URL' value={externalURL} onChange={e => setExternalURL(e.target.value)} />
                        </ExternalUpload>
                        {externalURL && <ReactPlayer style={{ marginTop: "12px" }} height={200} onError={() => setExternalURL(null)} url={externalURL} width={"100%"} />}
                        <UploadImage />
                    </Editor>
                </SharedContent>

                <ShareCreation>
                    <AttachAssets>
                        <AssetButton disabled={externalURL ? true : false} onClick={() => OpenFileDialog("image")}>
                            <IoImageOutline size={25} color="" />
                        </AssetButton>
                        <AssetButton disabled={externalURL ? true : false} onClick={() => OpenFileDialog("video")}>
                            <MdOutlineOndemandVideo size={25} />
                        </AssetButton>
                    </AttachAssets>

                    <ShareComment>
                        <AssetButton disabled={externalURL ? true : false} onClick={OpenFileDialog}>
                            <FaRegCommentDots size={18} />
                            Anyone
                        </AssetButton>
                    </ShareComment>

                    <PostButton onClick={() => handlePost(externalURL ? externalURL : shareImage)} disabled={!editorText ? true : false}>
                        Post
                    </PostButton>
                </ShareCreation>
                <input type="file" ref={inputFile} style={{ display: "none" }} onChange={handleChange} />
            </Content>
        </Container >
    )
}

const Container = styled.section`
    position: fixed;
    overflow-y: scroll;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: var(--f-clr-black);
    animation: fadeIn 0.3s;
`
const Content = styled.div`
    width: min(552px, 100%);
    background-color: #ffff;
    position: relative;
    top: 100px; 
    margin-inline: auto;
    border-radius: 4px;
`
const ExternalUpload = styled.div`
    text-align: center;

    & > *:not(:first-child) {
        margin-top: 8px;
    }

    input {
        padding: 8px 5px;
        width: 100%;
        border: 1px solid var(--bg-clr-greyish);

        &:focus,  &:active {
            outline: 1px solid var(--bg-clr-greyish);
        }
    }
`
const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid var(--f-clr-grey);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & :nth-child(2) {
        cursor: pointer;
    }


`

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;

    img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }

    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;

    }

`
const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;

`

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    gap: 1px;
    justify-content: center;
    height: 40px;
    min-width: auto;
    cursor: pointer;
    background: none;
    border: none;
    

`
const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;

    ${AssetButton} {
        width: 40px;
    }
`

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton} {
        padding-inline: 6px;
        background-color: var(--bg-clr-greyish);
        border: 1px solid rgba(0, 0, 0, 0.15);
        /* border: 2px solid var( ); */
        svg {
            margin-right: 5px;
            
        }
    }
`
// const UploadImage = styled.div`

//      img, video {
//         width: 100%;
//         object-fit: cover;
//         height: max(22rem, 10rem);

//         @media (max-width: 50em) {
//             height: max(10rem, 5rem);
//         }
//     }



// `

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: ${props => props.disabled ? "rgba(0,0,0, 0.8)" : "#0a66c2"}  ;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    transition-duration: 0.25s;

    &:hover {
        background: ${props => props.disabled ? null : "#004182"} ;
    }
`

const Editor = styled.div`
    padding: 12px 24px;

    textarea{
        width: 100%;
         
        resize: none;
        padding: 8px;
        border: 1px solid var(--bg-clr-greyish);

        &:focus,  &:active {
            outline: 1px solid var(--bg-clr-greyish);
        }

        @media (min-width: 50em) {
            min-height: 100px;
        }
    }
`

export default PostModel
