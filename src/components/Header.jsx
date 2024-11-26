import React from 'react'
import LinkedinLogo from "../assets/images/linkedin.png";
import SearchIcon from "../assets/images/search-icon.svg";
import Nav_Home from "../assets/images/nav-home.svg";
import Nav_Network from "../assets/images/nav-network.svg";
import Nav_Job from "../assets/images/nav-jobs.svg";
import Nav_Messaging from "../assets/images/nav-messaging.svg";
import Nav_Notification from "../assets/images/nav-notifications.svg";
import UserImage from "../assets/images/user.svg";
import Work from "../assets/images/nav-work.svg";
import DownIcon from "../assets/images/down-icon.svg";
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <header style={{ backgroundColor: "var(--bg-clr-white);" }}>
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


                    <GiHamburgerMenu size={30} color='black' className='open_icon' />


                    {/* Nav*/}
                    <nav className='nav'>
                        <ul role='list' className='header_nav_list'>
                            <li><a href="#">
                                <img src={Nav_Home} alt="" />
                            </a> Home</li>
                            <li><a href="#">
                                <img src={Nav_Network} alt="" />
                            </a>My Network</li>
                            <li><a href="#">
                                <img src={Nav_Job} alt="" />
                            </a>Jobs</li>
                            <li><a href="#">
                                <img src={Nav_Messaging} alt="" />
                            </a>Messaging</li>
                            <li><a href="#">
                                <img src={Nav_Notification} alt="" />
                            </a>Notifications</li>



                            <li data-nav="setting"><a href="#">
                                <img src={UserImage} alt="" />
                            </a><span><h5>Me</h5>
                                    <img src={DownIcon} alt="" />
                                </span> </li>


                            <li data-nav="setting"><a href="#">
                                <img src={Work} alt="" />
                            </a><span><h5>work</h5>
                                    <img src={DownIcon} alt="" />
                                </span> </li>

                        </ul>


                    </nav>



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
    
    @media (max-width: 67em) {
        padding-block: 0.6rem;

        & > nav {
            display: none;
        }
}  
     
`

const Search = styled.div`
    display: inline-flex;
    height: fit-content;
    column-gap: 0.5rem;
    border: 2px solid black;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: rgba(236,241,247,1);
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
    }

    & input:focus, input:active{
        outline: none;
    }
 
`

export default Header