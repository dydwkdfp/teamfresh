import React from 'react'
import Carousel from './Carousel.js';
import ContentDisplay from './ContentDisplay.js';
import ContentIntro from './ContentIntro.js';
import ContentNotice from './ContentNotice.js';
import {SliderData} from './SliderData.js';

const Body = () => {
    return (
        <>
        <Carousel slides={SliderData}/>
        <ContentIntro/>
        <ContentDisplay/>
        <ContentNotice/>
        </>
    )
}

export default Body
