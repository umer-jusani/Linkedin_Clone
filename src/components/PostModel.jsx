import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import UserImage from "../assets/images/user.svg";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";

const PostModel = () => {
    const [editorText, setEditorText] = useState('')
    const inputFile = useRef(null);

    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a Post</h2>
                    {/* <button> */}
                    <IoMdClose size={22} />
                    {/* </button> */}
                </Header>

                <SharedContent>
                    <UserInfo>
                        <img src={UserImage} alt="" />
                        <span>Name</span>
                    </UserInfo>
                    <Editor>
                        <textarea value={editorText} onChange={e => setEditorText(e.target.value)}
                            placeholder='What do you want to talk about?'
                            autoFocus={false}
                        ></textarea>
                    </Editor>
                </SharedContent>

                <ShareCreation>
                    <AttachAssets>
                        <AssetButton>
                            <IoImageOutline size={25} />
                        </AssetButton>
                        <AssetButton>
                            <MdOutlineOndemandVideo size={25} />
                        </AssetButton>
                    </AttachAssets>


                    <ShareComment>
                        <AssetButton>
                            <FaRegCommentDots size={18} />
                            Anyone
                        </AssetButton>
                    </ShareComment>

                    <PostButton>
                        Post
                    </PostButton>



                </ShareCreation>

                <input type="file" ref={inputFile} style={{ display: "none" }} />

            </Content>
        </Container>
    )
}

const Container = styled.section`
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: var(--f-clr-black);
`
const Content = styled.div`
    width: min(552px, 100%);
    background-color: #ffff;
    position: relative;
    top: 100px;
    margin-inline: auto;
    border-radius: 4px;
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
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    

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
        svg {
            margin-right: 5px;
            
        }
    }
`

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: #0a66c2;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    transition-duration: 0.25s;


    &:hover {
        background: #004182;
    }
`

const Editor = styled.div`
    padding: 12px 24px;

    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
        padding: 8px;
        border: 1px solid var(--bg-clr-greyish);

        &:focus,  &:active {
            outline: 1px solid var(--bg-clr-greyish);
        }
    }
`

export default PostModel
