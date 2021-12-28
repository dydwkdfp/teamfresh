import {useState,React} from 'react';
import {Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavPhoneMenu,
    NavMenuItemli,
    NavMenuItem,
    NavMenuItemul,
    NavPhoneMenuContainer,
    NavMenuMobileItem,
    NavMenuMobileItemli,
    NavMenuMobileItemul,
    NavMenuMobileItemText,
    NavMenuMobileItemlitwo,
    NavMenuMobileItemultwo} from '../styles/NavbarStyle.js';

import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [mobilemenu, setMobilemenu] = useState(0);


    const openMenu = () =>{
        mobilemenu===0?setMobilemenu(1):setMobilemenu(0);
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Jaemin</NavLogo>
                        <NavPhoneMenu>
                            <AiOutlineMenu className='menuicon' size={'30px'} onClick={openMenu}/>
                            <NavPhoneMenuContainer active={mobilemenu}>
                                    <NavMenuMobileItemul>
                                        <NavMenuMobileItemli>
                                            <NavMenuMobileItemText>
                                            회사소개
                                            </NavMenuMobileItemText>
                                            <NavMenuMobileItem>
                                                <NavMenuMobileItemultwo>
                                                    <NavMenuMobileItemlitwo>
                                                        회사소개
                                                    </NavMenuMobileItemlitwo>
                                                    <NavMenuMobileItemlitwo>
                                                        협력사 소개
                                                    </NavMenuMobileItemlitwo>
                                                    <NavMenuMobileItemlitwo>
                                                        고객사 소개
                                                    </NavMenuMobileItemlitwo>
                                                    <NavMenuMobileItemlitwo>
                                                        오시는 길
                                                    </NavMenuMobileItemlitwo>
                                                </NavMenuMobileItemultwo>
                                            </NavMenuMobileItem>
                                        </NavMenuMobileItemli>
                                        <NavMenuMobileItemli>
                                            <NavMenuMobileItemText>
                                            사업소개
                                            </NavMenuMobileItemText>
                                            <NavMenuMobileItem>
                                                <NavMenuMobileItemultwo>
                                                    <NavMenuMobileItemlitwo>
                                                        새벽배송
                                                    </NavMenuMobileItemlitwo>
                                                    <NavMenuMobileItemlitwo>
                                                        화물주선
                                                    </NavMenuMobileItemlitwo>
                                                    <NavMenuMobileItemlitwo>
                                                        풀필먼트
                                                    </NavMenuMobileItemlitwo>
                                                    <NavMenuMobileItemlitwo>
                                                        그로서리
                                                    </NavMenuMobileItemlitwo>
                                                </NavMenuMobileItemultwo>
                                            </NavMenuMobileItem>
                                        </NavMenuMobileItemli>
                                        <NavMenuMobileItemli>
                                            <NavMenuMobileItemText>
                                            공지사항
                                            </NavMenuMobileItemText>
                                            <NavMenuMobileItem>
                                                <NavMenuMobileItemultwo>
                                                    <NavMenuMobileItemlitwo>
                                                        공지사항
                                                    </NavMenuMobileItemlitwo>
                                                    <NavMenuMobileItemlitwo>
                                                        인턴채용
                                                    </NavMenuMobileItemlitwo>
                                                    <NavMenuMobileItemlitwo>
                                                        서비스 소개
                                                    </NavMenuMobileItemlitwo>
                                                </NavMenuMobileItemultwo>
                                            </NavMenuMobileItem>
                                        </NavMenuMobileItemli>
                                        <NavMenuMobileItemli>
                                            <NavMenuMobileItemText>
                                            보도자료
                                            </NavMenuMobileItemText>
                                        </NavMenuMobileItemli>
                                    </NavMenuMobileItemul>
                            </NavPhoneMenuContainer>
                        </NavPhoneMenu>
                    <NavMenu>
                        <NavItem>
                            <NavMenuItem>
                                <NavMenuItemul>
                                    <NavMenuItemli>
                                        회사소개
                                    </NavMenuItemli>
                                    <NavMenuItemli>
                                        협력사 소개
                                    </NavMenuItemli>
                                    <NavMenuItemli>
                                        고객사 소개
                                    </NavMenuItemli>
                                    <NavMenuItemli>
                                        오시는 길
                                    </NavMenuItemli>
                                </NavMenuItemul>
                            </NavMenuItem>
                            <NavLinks to="empty">
                                회사소개
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavMenuItem>
                                <NavMenuItemul>
                                    <NavMenuItemli>
                                        새벽배송
                                    </NavMenuItemli>
                                    <NavMenuItemli>
                                        화물주선
                                    </NavMenuItemli>
                                    <NavMenuItemli>
                                        풀필먼트
                                    </NavMenuItemli>
                                    <NavMenuItemli>
                                        그로서리
                                    </NavMenuItemli>
                                </NavMenuItemul>
                            </NavMenuItem>
                            <NavLinks to="empty">
                                사업소개
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavMenuItem>
                                <NavMenuItemul>
                                    <NavMenuItemli>
                                        공지사항
                                    </NavMenuItemli>
                                    <NavMenuItemli>
                                        인턴채용
                                    </NavMenuItemli>
                                    <NavMenuItemli>
                                        서비스 소개
                                    </NavMenuItemli>
                                </NavMenuItemul>
                            </NavMenuItem>
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
