import styled from 'styled-components';

export const FooterContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width: 100%;
    background:#31353E;
`

export const FooterWrapper = styled.div`
    display:flex;
    justify-content:flex;
    align-items:flex;
    width:100%;
    
    @media screen and (max-width:780px){
        flex-direction:column;
    }
`
export const FooterItems = styled.div`
    margin: 30px 30px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex;
    flex-direction:column;

    
    @media screen and (max-width:780px){
        margin:40px 0 0 0;
    }
    
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
    margin:30px 0 0 0;
`
export const FooterContent = styled.p`
    font-size:12px;
    color:#D5D5D5;
    text-align:center;
`

export const FooterContentLink = styled.p`
    font-size:12px;
    color:#D5D5D5;
    text-align:center;

    &:hover{
        cursor:pointer;
        text-decoration:underline;
    }
`

export const FooterTitle = styled.h5`
    color:#D5D5D5;
    text-align:center;
    line-height:0px;
    font-size:13px;
`