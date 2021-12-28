import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #F8F9FA;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items:center;
    position:sticky;
    top:0;
    z-index:3;

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

export const NavLogo = styled(Link)`
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
export const NavMenuItem = styled.div`
    position:absolute;
    top:50px;
    display:none;
    align-items:center;
    justify-content:flex;
    background:#EFF0F1;
    width:170px;

    &:hover{
        display:flex;
    }

    box-shadow:0 5px 10px 1px #858585;
`

export const NavMenuItemul = styled.ul`
list-style: none;
margin: 0 0 0 20px;
padding :0px;
text-align:flex;
`
export const NavMenuItemli = styled.li`
margin-top:20px;
margin-bottom:20px;
display:flex;

&:hover {
    cursor: pointer;
}
`
export const NavItem = styled.li`
    height: 50px;
    position:relative;

    &:hover ${NavMenuItem}{
        display:flex;
    }
`

export const NavLinks = styled(Link)`
    color: #606060;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
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
export const NavPhoneMenuContainer = styled.div`
    display:${props=>props.active === 1 ? 'flex' : 'none'};
    position:absolute;
    left:0%;
    top:60px;
    background: #F8F9FA;
    width:100vw;

`


export const NavMenuMobileItem = styled.div`
    display:none;
    align-items:flex;
    background:#EFF0F1;
    width:85vw;

    &:hover{
        display:flex;
    }

    box-shadow:0 2px 10px 5px #D5D5D5;
`

export const NavMenuMobileItemul = styled.ul`
list-style: none;
margin: 10px 40px 10px 40px;
padding :0px;
`

export const NavMenuMobileItemli = styled.li`
margin-top:20px;
margin-bottom:20px;
color:#666666;

&:hover {
    cursor: pointer;
}
&:hover ${NavMenuMobileItem}{
    display:flex;
}
`
export const NavMenuMobileItemText = styled.p`
    font-size:12px;
    color:#666666;
`

export const NavMenuMobileItemlitwo = styled.li`
padding:10px 20px 10px 20px;
color:#666666;

&:hover {
    cursor: pointer;
    background:#DDDDDD;
    font-weight:600;
}
`

export const NavMenuMobileItemultwo = styled.ul`
list-style: none;
margin: 10px 0 10px 0;
width:100%;
padding:0;

`