import styled from 'styled-components';

export const NoticeContainer = styled.div`
    width:100%;
    height: 700px;
`

export const NoticeWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const NoticeBoardContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:flex;
    margin:20px 40px 70px 40px;
`
export const NoticeBoardWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`
export const NoticeBoardTitle = styled.p`
    margin-bottom:30px;
    font-size:18px;
    font-weight:700;
`
export const NoticeBoardContentWrapper = styled.div`
    width:80%;
    background:#FAFAFA;
    border: 1px solid #EAEAEA;
    padding:20px 30px 20px 30px;
`
export const NoticeBoardContentTitle = styled.p`
    font-size:18px;
    font-weight:600;

`
export const NoticeBoardContentPlus = styled.button`
    margin:20px;
`
export const NoticeBoardContenthr = styled.hr`
    border:none;
    height:1px;
    background: #EAEAEA;
    margin:0 0 0 0;
`
export const NoticeBoardContentText = styled.p`
`
export const NoticeBoardContentDate = styled.p`
`

export const Displayhr = styled.hr`
    border:none;
    height:1px;
    width:95%;
    background-color:#B4B4B4;
`
export const NoticeBoardTitleContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:flex;
align-items:center;


`
export const NoticeBoardContentTextContainer = styled.div`
display:flex;
flex-direction:row;
width:100%;

&:hover ${NoticeBoardContentText}{
        text-decoration:underline;
}
&:hover {
    cursor:pointer;
}

`
export const NoticeBoardContentTextDivider = styled.div`
justify-content:flex;
align-items:center;
width:70%;
`

export const NoticeBoardContentTextWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    width:30%;
`

export const NoticeSNSContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`
export const NoticeSNSTitle = styled.p`
    font-size:35px;
    font-weight:400;
`
export const NoticeSNSLinkContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`