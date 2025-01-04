import React from 'react';
import styled from 'styled-components';
import { LogOutService } from '../../firebase';
import DownIcon from "../assets/images/down-icon.svg";
import LinkedinLogo from "../assets/images/linkedin.png";
import Nav_Home from "../assets/images/nav-home.svg";
import Nav_Job from "../assets/images/nav-jobs.svg";
import Nav_Messaging from "../assets/images/nav-messaging.svg";
import Nav_Network from "../assets/images/nav-network.svg";
import Nav_Notification from "../assets/images/nav-notifications.svg";
import SearchIcon from "../assets/images/search-icon.svg";
import UserImage from "../assets/images/user.svg";
import { useNavigate } from 'react-router-dom';

const Header = ({ userDetails }) => {
    const navigate = useNavigate();



    return (
        <header style={{ backgroundColor: "var(--bg-clr-white)" }}>
            <div className='container'>
                <Wrapper>
                    <div className='header_logo'>
                        {/* Logo */}
                        <a href="">
                            <img src={LinkedinLogo} alt="" />
                        </a>

                        {/* search */}
                        <Search>
                            <img src={SearchIcon} alt="" />
                            <input type="text" placeholder="Search" />
                        </Search>
                    </div>


                    {/* <GiHamburgerMenu size={30} color='black' className='open_icon' /> */}


                    {/* Nav*/}
                    <nav className='nav'>
                        <ul role='list' className='header_nav_list' data-devices="large">
                            <li><a href="#">
                                <img src={Nav_Home} alt="" />
                            </a><span>Home</span></li>
                            <li><a href="#">
                                <img src={Nav_Network} alt="" />
                            </a><span>My Network</span></li>
                            <li><a href="#">
                                <img src={Nav_Job} alt="" />
                            </a><span> Jobs</span></li>
                            <li><a href="#">
                                <img src={Nav_Messaging} alt="" />
                            </a><span> Messaging</span></li>
                            <li><a href="#">
                                <img src={Nav_Notification} alt="" />
                            </a><span> Notifications</span></li>

                            <li className="user_header" data-nav="setting" style={{ position: "relative" }}><a href="#">
                                {userDetails && userDetails?.photoURL ? (
                                    <img className="userimage" src={userDetails?.photoURL} alt="" />
                                ) : (
                                    <img className="userimage" src={UserImage} alt="" />
                                )}
                            </a><span><h5>Me</h5>
                                    <img src={DownIcon} alt="" />
                                </span>
                                <SignOut className='signOut' onClick={() => LogOutService(navigate)} top={"100%"}>
                                    Sign Out
                                </SignOut>
                            </li>
                        </ul>
                    </nav>

                    <NavSmall className="nav_small">
                        <ul role='list' className='header_nav_list' data-devices="small" >
                            <li><a href="#">
                                <img src={Nav_Home} alt="" />
                            </a></li>
                            <li><a href="#">
                                <img src={Nav_Network} alt="" />
                            </a></li>
                            <li><a href="#">
                                <img src={Nav_Job} alt="" />
                            </a></li>
                            <li><a href="#">
                                <img src={Nav_Messaging} alt="" />
                            </a></li>
                            <li><a href="#">
                                <img src={Nav_Notification} alt="" />
                            </a></li>
                            <li className="user_header" data-nav="setting"><a href="#" style={{ position: "relative" }}>
                                {userDetails && userDetails?.photoURL ? (
                                    <img className="userimage" src={userDetails?.photoURL} alt="" />
                                ) : (
                                    <img className="userimage" src={UserImage} alt="" />
                                )}
                            </a>
                                <SignOut className='signOut' onClick={() => LogOutService(navigate)} bottom={"90%"}>
                                    Sign Out
                                </SignOut>
                            </li>

                        </ul>
                    </NavSmall>

                </Wrapper>
            </div>
        </header>
    )
}


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    
    @media (max-width: 65em)  {
        padding-block: 0.8rem;
        & > .nav li span {
            display: none;
        }
}  
    @media (max-width: 50em) {

        & > .nav li {
            display: none;
        }
}  
`

const Search = styled.div`
    display: inline-flex;
    height: fit-content;
    column-gap: 0.5rem;
    border: 2px solid transparent;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: rgba(236,241,247,1);
    box-shadow: 2px 1px 20px -3px rgba(114, 114, 114, 0.75);
-webkit-box-shadow: 2px 1px 20px -3px rgba(114, 114, 114, 0.75);
-moz-box-shadow: 2px 1px 20px -3px rgba(114, 114, 114, 0.75);
    flex: 1;

    &:hover {
        border: 2px solid var( --clr-primary-color);
    }

    & img{
        width: 20px;
        height: auto;
    }


& input {
    border: none;
    font-weight: bold;
    width: 90%;
    background: transparent;
    }

    & input:focus, input:active{
        outline: none;
    }
 
`

const NavSmall = styled.nav`
    display: none;
    z-index: 999;
    background-color: aliceblue;

    @media (max-width: 50em) {
        display: block;
    }
`
const SignOut = styled.div`
    position: absolute;
    top: ${(props) => (props.top ? props.top : null)};
    bottom: ${(props) => (props.bottom ? props.bottom : null)};
    z-index: 1;
    display: none;
    right: ${(props) => (props.top ? "10%" : "5%")};
    border-radius: 7px;
    padding-block: 8px;
    width: max(7rem, 2rem);
    font-size: 18px;
    border: 2px solid var(--bg-clr-greyish);
    background-color: var(--bg-clr-white);

    &:hover {
        border: 2px solid var(--f-clr-grey);
    }
`

export default Header
