import React from 'react'
import ContentDisplay from './ContentDisplay.js';
import ContentIntro from './ContentIntro.js';
import ContentNotice from './ContentNotice.js';

const Body = () => {
    return (
        <>
        <ContentIntro/>
        <ContentDisplay/>
        <ContentNotice/>
        </>
    )
}

export default Body
