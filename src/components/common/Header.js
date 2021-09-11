import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import {
    Container,
    Nav,
    Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { FaSignOutAlt } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import styled from 'styled-components';
import { UserContext } from './../../AppRouter';
import { handleSignout, initializeLoginFramework } from '../Login/LoginManager';

const Header = () => {
    const [burgerNav, setBurgerNav] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { isSignedIn } = loggedInUser;
    const [admin, setAdmin] = useState(false);
    initializeLoginFramework();

    useEffect(() => {
        axios.post(`http://localhost:4000/api/admin/email`, { email: loggedInUser.email })
          .then(res => setAdmin(res.data))
      }, [loggedInUser?.email]);

    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <div className="py-3">
                <Container>
                    <Link className="navbar-brand" to="/">News Portal</Link>
                </Container>
            </div>


            <BurgerNav show={burgerNav}>
                <FaTimes onClick={() => setBurgerNav(false)} style={{ cursor: "pointer", margin: "10px 0 0 170px" }} />
                <ul className="mt-4 list-unstyled">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/topnews" className="nav-link">Top News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bangladesh">Bangladesh</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/international">International</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sport">Sport</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/opinion">Opinion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/youth">Youth</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/lifestyle">Lifestyle</Link>
                    </li>
                </ul>
            </BurgerNav>

            <Container>
                <GiHamburgerMenu onClick={() => setBurgerNav(true)} style={{ cursor: "pointer" }} />
                <Navbar.Toggle className="d-none" aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="gap-3 py-2" style={{ marginLeft: "150px" }}>
                        <Nav.Item>
                            <Link className="nav-link" to="/bangladesh">Bangladesh</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/international">International</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/sport">Sport</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/opinion">Opinion</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/business">Business</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/youth">Youth</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/lifestyle">Lifestyle</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <User>
                <li className="btn">
                    <Link to="/login">
                        <BiUser />
                    </Link>
                    <p>User</p>
                </li>
                { admin ?
                    <li className="btn">
                        <Link to="/makeAdmin">
                            <RiAdminLine />
                        </Link>
                        <p>Admin</p>
                    </li> : null
                }
                {
                    isSignedIn || localStorage.getItem('token') ?
                        <>
                            <li className="btn" onClick={() => handleSignout()}>
                                <FaSignOutAlt />
                                <p>logout</p>
                            </li>
                        </> : null
                }
            </User>
        </Navbar>
    );
};

export default Header;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    background: #fff;
    width: 200px;
    transform: ${props => props.show ? 'translateX(0px)' : 'translateX(-200px)'};
    transition: transform 0.9s;
        li{
            padding: 5px 0;
            border-bottom: 1px solid rgba(0, 0, 0, .2);
            
            a{
                color: black;
                font-weight: 600;
            }
        }
        a:hover {
            background-color: #e2e2e2;
        }

`

const User = styled.div`
        display: flex;
        p {
            font-size: 10px;
        }

        a {
            color: black;
        }
`