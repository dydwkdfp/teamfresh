import React from 'react'
import ContentDisplay from './ContentDisplay.js';
import ContentIntro from './ContentIntro.js';
import ContentNotice from './ContentNotice.js';
import { Dataobj } from '../components/DisplayData.js'

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
