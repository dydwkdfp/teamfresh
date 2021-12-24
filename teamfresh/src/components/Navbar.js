import React from 'react';
import {Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavPhoneMenu} from '../styles/NavbarStyle.js';

import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Jaemin</NavLogo>
                        <NavPhoneMenu>
                            <AiOutlineMenu className='menuicon' size={'30px'}/>
                        </NavPhoneMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="empty">
                                회사소개
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="empty">
                                사업소개
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="empty">
                                공지사항
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="empty">
                                보도자료
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Delivery">
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
