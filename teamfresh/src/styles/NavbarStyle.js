import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #F8F9FA;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items:center;
    position:sticky;
    top:0;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    
`;

export const NavLogo = styled(LinkS)`
    color: #03214C;
    justify-self: flex-start;
    cursor:pointer;
    font-size: 25px;
    display: flex;
    align-items: center;
    margin-left:10px;
    font-weight: bold;
    text-decoration:none;
`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 20px;
    @media screen and (max-width:980px){
        display:none;
    }

`

export const NavItem = styled.li`
    height: 50px;
`

export const NavLinks = styled(LinkS)`
    color: #606060;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:11px;
    text-decoration: none;
    padding: 0 15px;
    height: 100%;
    cursor: pointer;

    &:hover {
        font-weight:bold;
    }
`

export const NavPhoneMenu = styled.div`
display:none;
align-items:center;


@media screen and (max-width:980px){
    display:flex;
}
`