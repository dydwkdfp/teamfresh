import React from 'react'
import { Displayhr, NoticeBoardContainer, NoticeBoardContentDate, NoticeBoardContenthr, NoticeBoardContentPlus, NoticeBoardContentTextWrapper, NoticeBoardContentText, NoticeBoardContentTextContainer, NoticeBoardContentTitle, NoticeBoardContentWrapper, NoticeBoardTitle, NoticeBoardTitleContainer, NoticeBoardWrapper, NoticeContainer, NoticeWrapper, NoticeBoardContentTextDivider, NoticeSNSContainer, NoticeSNSTitle, NoticeSNSLinkContainer } from '../styles/NoticeStyle'
import {HiPlus} from 'react-icons/hi';
import {FaRegClock} from 'react-icons/fa';
import {BsFacebook, BsYoutube} from 'react-icons/bs';
import {GrFacebook} from 'react-icons/gr';
const ContentNotice = () => {
    return (
        <NoticeContainer>
            <NoticeWrapper>
                <NoticeBoardContainer>
                    <NoticeBoardWrapper>
                        <NoticeBoardTitle>
                            공지사항
                        </NoticeBoardTitle>
                        <NoticeBoardContentWrapper>
                            <NoticeBoardTitleContainer>
                            <NoticeBoardContentTitle>
                                Notice
                            </NoticeBoardContentTitle>
                            <HiPlus size="25" color="#DADADA" className='plus'/>
                            </NoticeBoardTitleContainer>
                            <NoticeBoardContenthr/>
                            <NoticeBoardContentTextContainer>
                                <NoticeBoardContentTextDivider>
                            <NoticeBoardContentText>
                            [공고] 신주발행 공고(제3자 배정방식)
                            </NoticeBoardContentText>
                            </NoticeBoardContentTextDivider>
                                <NoticeBoardContentTextWrapper>
                                    <FaRegClock  size="15" color="#DADADA" className='history'/>
                            <NoticeBoardContentDate>
                                2021-09-15
                            </NoticeBoardContentDate>
                                </NoticeBoardContentTextWrapper>
                            </NoticeBoardContentTextContainer>
                            <NoticeBoardContentTextContainer>
                                <NoticeBoardContentTextDivider>
                            <NoticeBoardContentText>
                            [공고] 신주발행 공고(제3자 배정방식)
                            </NoticeBoardContentText>
                            </NoticeBoardContentTextDivider>
                                <NoticeBoardContentTextWrapper>
                                    <FaRegClock  size="15" color="#CACACA" className='history'/>
                            <NoticeBoardContentDate>
                                2021-09-08
                            </NoticeBoardContentDate>
                                </NoticeBoardContentTextWrapper>
                            </NoticeBoardContentTextContainer>
                            <NoticeBoardContentTextContainer>
                                <NoticeBoardContentTextDivider>
                            <NoticeBoardContentText>
                            [공고] 신주발행 공고(제3자 배정방식)
                            </NoticeBoardContentText>
                            </NoticeBoardContentTextDivider>
                                <NoticeBoardContentTextWrapper>
                                    <FaRegClock  size="15" color="#CACACA" className='history'/>
                            <NoticeBoardContentDate>
                                2021-08-31
                            </NoticeBoardContentDate>
                                </NoticeBoardContentTextWrapper>
                            </NoticeBoardContentTextContainer>
                        </NoticeBoardContentWrapper>
                    </NoticeBoardWrapper>
                    <NoticeBoardWrapper>
                        <NoticeBoardTitle>
                            보도자료
                        </NoticeBoardTitle>
                        <NoticeBoardContentWrapper>
                            <NoticeBoardTitleContainer>
                            <NoticeBoardContentTitle>
                                TimF News
                            </NoticeBoardContentTitle>
                            <HiPlus size="25" color="#CACACA" className='plus'/>
                            </NoticeBoardTitleContainer>
                            <NoticeBoardContenthr>

                            </NoticeBoardContenthr>
                            <NoticeBoardContentTextContainer>
                            <NoticeBoardContentText>

                            </NoticeBoardContentText>
                            <NoticeBoardContentDate>

                            </NoticeBoardContentDate>
                            </NoticeBoardContentTextContainer>
                        </NoticeBoardContentWrapper>
                    </NoticeBoardWrapper>
                </NoticeBoardContainer>
            </NoticeWrapper>
                <Displayhr/>
        <NoticeSNSContainer>
            <NoticeSNSTitle>
                Connect
            </NoticeSNSTitle>
            <NoticeSNSLinkContainer>
                <a href="https://www.facebook.com/teamfresh.timf">
                    <GrFacebook size={'60px'} className='facebookl'/>
                </a>
                <a href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
                    <BsYoutube size={'60px'} className='youtubel'/>
                </a>
            </NoticeSNSLinkContainer>
        </NoticeSNSContainer>
        </NoticeContainer>
    )
}

export default ContentNotice
