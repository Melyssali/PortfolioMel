
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/mel/newlogo/white-logo.png';

// import home from '../../assets/images/icons/home.svg'
import { ReactComponent as Home } from '../../assets/images/icons/maison.svg';
import { ReactComponent as Profile } from '../../assets/images/icons/profile-female.svg';
import { ReactComponent as Envelope } from '../../assets/images/icons/mail.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss';

const Sidebar = () => {

    return (
        <>


            <div className="navbar">
                <Link className="logo" to="/">
                    <img src={logo} alt='logo' />
                </Link>

                <nav>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        to="/">
                        <Home className="home-icon" />
                        {/* <img src={home} /> */}
                        {/* <BsHouse className="test" color="#4d4d4e" /> */}
                        {/* <FontAwesomeIcon icon={faHome} color="#4d4d4e" /> */}
                    </NavLink>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        className="about-link"
                        to="/about">
                        <Profile className="profile-icon" />
                        {/* <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> */}
                    </NavLink>
                    <NavLink
                        exact="true"
                        activeclassname="active"
                        className="contact-link"
                        to="/contact">
                        <Envelope className="mail-icon" />
                        {/* <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> */}
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                color="#4d4d4e"
                                className="anchor-icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                color="#4d4d4e"
                                className="anchor-icon"
                            />
                        </a>
                    </li>

                </ul>



            </div>
        </>
    )
};

export default Sidebar;
