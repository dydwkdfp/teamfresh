import styled from "styled-components";

export const DisplayContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column;
`

export const DisplayTitleWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column;
`
export const DisplayTitle = styled.p`
    font-weight:650;
    font-size:35px;
    text-align:center;
    color:#343638;
`

export const DisplayTitlehr = styled.hr`
    border:none;
    height:2px;
    width:70%;
    background-color:#B4B4B4;
    margin-top:0;
`

export const Displayhr = styled.hr`
    border:none;
    height:1px;
    width:95%;
    background-color:#B4B4B4;
`
export const DisplayContentContainer = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:row;
    width:100%;
    margin-top:50px;
    margin-bottom:70px;
    
    @media screen and (max-width:780px){
        flex-direction:column;
    }
`
export const DisplayContentWrapper = styled.div`
    width:90%;
    margin:20px;
`
export const DisplayContentImageContainer = styled.div`
    width:100%;
    overflow:hidden;
`
export const DisplayContentImage = styled.img`
    width:100%;
`
export const DisplayContentTextWrapper = styled.div`
    width:90%;
    margin-left:5%;
`
export const DisplayContentTitle = styled.p`
    font-size:20px;
    font-weight:600;
    color:#343638;
`
export const DisplayContentContent = styled.p`
    font-size:15px;
    color:#343638;
    line-height:150%;
`
export const DisplayContentButton = styled.button`
    margin-top:10px;
    background:#fff;
    border-radius:20px;
    font-size:13px;
    border:1px solid #888;
    color:#888;
    padding:5px 10px;
    font-weight:600;
    margin-left:5%;

    &:hover{
        transition:background 0.5s, color 0.5s;
        background:#888;
        color:#fff;
        cursor:pointer;
    }
`