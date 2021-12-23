import React from 'react'
import { FooterContentLink, FooterContainer, FooterWrapper,FooterItems,FooterTitle,FooterContent, Footerhr,Footerhr2 } from '../styles/FooterStyle.js'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterItems>
                        <Footerhr/>
                        <FooterTitle>
                            Timf
                        </FooterTitle>
                        <Footerhr/>
                        <FooterContent>
                            상호명: (주)팀프레시
                        </FooterContent>
                        <FooterContent>
                            사업자등록번호: 561-88-01138
                        </FooterContent>
                        <FooterContent>
                            대표자: 이성일
                        </FooterContent>
                    </FooterItems>
                    <FooterItems>
                        <Footerhr/>
                        <FooterTitle>
                            Contact us
                        </FooterTitle>
                        <Footerhr/>
                        <FooterContent>
                            Fax: 02-3432-0525
                        </FooterContent>
                        <FooterContent>
                            E-mail: info@timf.co.kr
                        </FooterContent>
                        <FooterContent>
                            서울특별시 송파구 위례성대로 12길 15-1
                        </FooterContent>
                        <FooterContent>
                            영업 및 제휴 문의:
                        </FooterContent>
                        <FooterContent>
                            E-mail: sales@timf.co.kr
                        </FooterContent>
                    </FooterItems>
                    <FooterItems>
                        <Footerhr/>
                        <FooterTitle>
                            Others
                        </FooterTitle>
                        <Footerhr/>
                        <FooterContentLink>
                            인재채용
                        </FooterContentLink>
                        <FooterContentLink>
                            서비스 소개
                        </FooterContentLink>
                        <FooterContentLink>
                            개인정보 처리방침
                        </FooterContentLink>
                        <FooterContentLink>
                            위치기반 서비스 이용약관
                        </FooterContentLink>
                    </FooterItems>
                </FooterWrapper>
                        <Footerhr2/>
                        <FooterContent>
                            ⓒ TeamFresh All right reserved
                        </FooterContent>
            </FooterContainer>
        </>
    )
}

export default Footer
