import React from 'react';
import {Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks} from '../styles/NavbarStyle.js';

const Navbar = () => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home' smooth={true} duration={500} spy={true}>Jaemin</NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="empty" smooth={true} duration={500} spy={true}>
                                회사소개
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="empty" smooth={true} duration={500} spy={true}>
                                사업소개
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="empty" smooth={true} duration={500} spy={true}>
                                공지사항
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="empty" smooth={true} duration={500} spy={true}>
                                보도자료
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="early" smooth={true} duration={500} spy={true}>
                                새벽배송
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
