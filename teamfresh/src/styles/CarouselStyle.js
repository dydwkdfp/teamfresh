import styled from "styled-components";

export const CarouselContainer = styled.div`
    width:100%;
`
export const CarouselWrapper = styled.div`
    width:100%;
    overflow:hidden;
`
export const CarouselImageContainer = styled.div`
    display:flex;
    flex-direction:row;
    transition: transform ease-out 0.5s;
    transform: translateX(-${props => props.translate}px);
    width: ${props => props.width}px;
`
export const CarouselImage = styled.img`
    width:${props => props.width}px;
`
export const CarouselDataContainer = styled.div`
    position:relative;
`
export const CarouselContentContainer = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:50%;
    left:0;
    transform:translate(0, -50%);
    display:flex;
`
export const CarouselImageTextContainer = styled.div`
    position:relative;
`
export const CarouselContentFarrow = styled.div`
    width:15%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover{
        cursor:pointer;
    }
`
export const CarouselContentBarrow = styled.div`
    width:15%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover{
        cursor:pointer;
    }
`
export const CarouselContentNavbar = styled.div`
    position:absolute;
    width:20%;
    height:5%;
    top:95%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    align-items:center;
    justify-content:center;
    
`
export const CarouselContentTextContainer = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
export const CarouselContentEmptyContainer = styled.div`
    width:70%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
export const CarouselContentTextTitle = styled.p`
    color:#fff;
    text-align:center;
    font-size:30px;
    margin:0 0 0 0;
    @media screen and (max-width:780px){
        font-size:19px;
    }
`
export const CarouselContentTextContent = styled.p`
    color:#fff;
    text-align:center;
    font-size:50px;
    font-weight:500;
    margin:10px 0 0 0;
    @media screen and (max-width:780px){
        font-size:22px;
    }
`
export const CarouselContentNavbarCurrenthr = styled.hr`
    border:none;
    height: 3px;
    background-color:#FFFFFF;
    width:30px;
    margin:5px;
`
export const CarouselContentNavbarhr = styled.hr`
    border:none;
    height: 3px;
    background-color:#777777;
    width:30px;
    margin:5px;
`