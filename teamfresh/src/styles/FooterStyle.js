import styled from 'styled-components';

export const FooterContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width: 100vw;
    height: 375px;
    background:#31353E;
    max-width:100%;
`

export const FooterWrapper = styled.div`
    display:flex;
    justify-content:flex;
    align-items:flex;
    width:100%;
    height:300px;
`
export const FooterItems = styled.div`
    margin: 30px 30px;
    width:33vw;
    display:flex;
    align-items:center;
    justify-content:flex;
    flex-direction:column;
`
export const Footerhr = styled.hr`
    background-color:#fff;
    width:80%;
    border:none;
    height:1px;
    margin:0 0 0 0;
`
export const Footerhr2 = styled.hr`
    background-color:#fff;
    width:95%;
    border:none;
    height:1px;
    margin:0 0 0 0;
`
export const FooterContent = styled.p`
    font-size:12px;
    color:#D5D5D5;
    text-align:center;
    
    @media screen and (max-width:800px){
        font-size: 12px;
    }
    @media screen and (max-width:640px){
        font-size: 10px;
    }
`

export const FooterContentLink = styled.p`
    font-size:12px;
    color:#D5D5D5;
    text-align:center;

    &:hover{
        cursor:pointer;
    }
    
    @media screen and (max-width:800px){
        font-size: 12px;
    }
    @media screen and (max-width:640px){
        font-size: 10px;
    }
`

export const FooterTitle = styled.h5`
    color:#D5D5D5;
    text-align:center;
    line-height:0px;
    font-size:11px;

    @media screen and (max-width:800px){
        font-size: 12px;
    }
    @media screen and (max-width:640px){
        font-size: 10px;
    }
`