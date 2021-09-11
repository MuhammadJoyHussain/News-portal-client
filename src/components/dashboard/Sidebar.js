import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [burgerNav, setBurgerNav] = useState(false);

    return (
        <div style={{ marginTop: "100px" }}>
                <GiHamburgerMenu onClick={() => setBurgerNav(true)} style={{ cursor: "pointer", marginLeft: "158px" }} />
            <BurgerNav show={burgerNav} style={{marginTop: "100px"}}>
                <FaTimes onClick={() => setBurgerNav(false)} style={{ cursor: "pointer", margin: "10px 0 0 170px" }} />
                <ul className="list-unstyled">
                    <li className="nav-item">
                        <Link to="/makeAdmin" className="nav-link">Make An Admin</Link>
                    </li>
                </ul>
            </BurgerNav>
        </div>
    );
};

export default Sidebar;


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