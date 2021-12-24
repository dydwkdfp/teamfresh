import styled from "styled-components";
import {BiSearch} from 'react-icons/bi'

export const AutodeliveryContainer = styled.div`
    width:100%;
`
export const AutodeliveryWrapper = styled.div`
    padding:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
export const AutodeliveryTopContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;


`
export const AutodeliveryTitle = styled.p`
    font-size:25px;
    font-weight:550;
`
export const AutodeliveryLogo = styled.img`
    width:120px;
`
export const AutodeliveryHr = styled.hr`
    width:80%;
    height:1px;
    border:none;
    background-color:#555555;
`
export const AutoSearchIcon = styled(BiSearch)`
font-size:30px;
color:#02204B;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
transition: 0.5s;

`
export const AutodeliverySearchbar = styled.input`
width:40px;
height:40px;
transition: .5s;
outline: none;
border: 4px solid #02204B;
border-radius: 40px;
font-size:30px;
text-align:center;

&:focus{
    width:700px;
    border-radius: 10px;
}

`
export const AutodeliverySearchbarContainer = styled.div`
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    &:hover ${AutodeliverySearchbar}{
        width:700px;
        border-radius: 10px;
    }
    &:hover ${AutoSearchIcon}{
        opacity:0;
        z-index:-1;
    }
`
export const AutodeliveryExplanationContainer = styled.div`
    margin-top:5px;
`
export const AutodeliveryExplanation = styled.p`
    line-height:0;
    text-align:center;
`
export const AutodeliveryResult = styled.p`
    font-size:40px;
    font-weight:700;
    text-align:center;
    color:${props => props.colorprops === '1' ? '#8888FF':'#FF8888'};
`
export const AutodeliveryExplanationExample = styled.p`
    color:#5555FF;
    text-align:center;
`
export const AutodeliveryCheckButton = styled.button`
margin-top:30px;
width:150px;
height:40px;
transition: .5s;
outline: none;
border: 4px solid #02204B;
border-radius: 10px;
background:#ffffff;
font-weight:700;

&:hover{
    background:#02204B;
    color:#ffffff;
}

`