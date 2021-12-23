import React from 'react'
import { DisplayContentTextWrapper, Displayhr,DisplayContainer,DisplayContentContainer ,DisplayContentButton, DisplayContentContent, DisplayContentImage, DisplayContentTitle, DisplayContentWrapper, DisplayTitle, DisplayTitlehr, DisplayTitleWrapper, DisplayContentImageContainer } from '../styles/DisplayStyle'
import { Dataobj } from '../components/DisplayData.js';

const DisplayItem = ({items}) =>{
    return(
        <>
        {items.data.map((item, id)=> {
            return(
            <DisplayContentWrapper>
                <DisplayContentImageContainer>
            <DisplayContentImage src={item.img}/>
            </DisplayContentImageContainer>
            <DisplayContentTextWrapper>
            <DisplayContentTitle>
                {item.title}
            </DisplayContentTitle>
            <DisplayContentContent>
                {item.content}
            </DisplayContentContent>
            </DisplayContentTextWrapper>
            <DisplayContentButton>
                더 알아보기
            </DisplayContentButton>
        </DisplayContentWrapper>
            )
        })}
        </>
    )
}

const ContentDisplay = () => {


    return (
        <DisplayContainer>
            <DisplayTitleWrapper>
                <DisplayTitle>
                    TIMF BUSINESS
                </DisplayTitle>
                <DisplayTitlehr/>
            </DisplayTitleWrapper>
            <DisplayContentContainer>
                <DisplayItem items={Dataobj}/>
            </DisplayContentContainer>
            <Displayhr/>
        </DisplayContainer>
    )
}

export default ContentDisplay
