import styled from 'styled-components';

export const IntroContainer = styled.div`
    width:100%;
    background-color:#172D4C;
    height:330px;
    margin:-10px 0 0 0;
    
    @media screen and (max-width:580px){
        background-color:#FFFFFF;
    }
`
export const IntroWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:60px;
`

export const IntroTitle = styled.p`
    text-align:center;
    font-size:25px;
    color:#fff;
    border-size:1px;
    font-weight:700;
    line-height:0;
    margin-top:50px;
    @media screen and (max-width:780px){
        font-size:19px;
    }
    @media screen and (max-width:580px){
        color:#172D4C;
    }
`
export const IntroContent = styled.p`
text-align:center;
color:#fff;
font-size:20px;
@media screen and (max-width:780px){
    font-size:14px;
    line-height:1.8;
}
@media screen and (max-width:580px){
    color:#172D4C;
}

`