import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    height: 375px;
    background:#31353E;
    max-width:100%;
`

export const FooterWrapper = styled.div`
    display:flex;
    justify-content:flex;
    align-items:flex;
    margin: 0 40px;
    width:100%;
    height:300px;
`
export const FooterItems = styled.div`
    margin: 30px 30px;
    width:20vw;
    display:flex;
    align-items:center;
    justify-content:flex;
    flex-direction:column;
`
export const FooterTitle = styled.h1`
    font-size:15px;
    color:#fff;
    font-family: 'Poppins', sans-serif;
    font-weight:300;

    border-bottom: 2px solid #aaa;
`
export const FooterContent = styled.text`
    font-size:15px;
    color:#D5D5D5;
    font-weight:300;
    
    @media screen and (max-width:800px){
        font-size: 12px;
    }
    @media screen and (max-width:640px){
        font-size: 10px;
    }

`