import React from 'react'
import {useState, useEffect, useRef} from 'react';
import {CarouselImageTextContainer, CarouselContentEmptyContainer, CarouselContentNavbar,CarouselContentNavbarCurrenthr,CarouselContentNavbarhr ,CarouselContainer, CarouselContentBarrow, CarouselContentContainer, CarouselContentFarrow, CarouselContentTextContainer, CarouselContentTextContent, CarouselContentTextTitle, CarouselImage, CarouselImageContainer, CarouselWrapper, CarouselDataContainer } from '../styles/CarouselStyle';
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md';

const Carousel = ({slides}) => {

    const getWidth= () => window.innerWidth

    const [curwidth, setCurwidth] = useState(getWidth())

    const [state, setState] = useState({
        current:0,
        translate: 0
    })
    const [autoPlay, setautoPlay] = useState(6)

    const length = slides.length

    const { translate, current } = state

    const handleResize = () => {
        setCurwidth(getWidth())
    }

    
  const autoPlayRef = useRef()
    
  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    if (autoPlay !== null) {
      const interval = setInterval(play, autoPlay * 1000)
      return () => clearInterval(interval)
    }
  }, [autoPlay])

    useEffect(() => {
        window.addEventListener('resize',handleResize);
        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    },[])

    if(!Array.isArray(slides)||slides.length <=0){
        return null;
    }


    const nextSlide = () => {
        if(current === length-1){
            return(setState({
            ...state,
            translate:0,
            current:0
            })
            )
        }

        
            setState({
                ...state,
                translate:(current+1) * getWidth(),
                current:current+1
            })
        }


    const prevSlide = () => {
        if(current === 0){
            return(
                setState({
                ...state,
                translate:length-1 * getWidth(),
                current:length-1
            })
            )
        }

            setState({
                ...state,
                translate:(current-1) * getWidth(),
                current:current-1
            })
        }

    console.log(current);
    console.log(getWidth());

    return (
        <CarouselContainer>
            <CarouselWrapper>
                        <CarouselDataContainer>
                        <CarouselImageContainer width={curwidth*length} translate={translate}>
                {slides.map((slide,index) => {
                    return (
                            <CarouselImageTextContainer>
                            <CarouselImage src={slide.image} alt="Carousel images"     width={curwidth}/>
                                    <CarouselContentTextContainer>
                                        <CarouselContentTextTitle>
                                            {slide.title}
                                        </CarouselContentTextTitle>
                                        <CarouselContentTextContent>
                                            {slide.text}
                                        </CarouselContentTextContent>
                                    </CarouselContentTextContainer>
                            </CarouselImageTextContainer>
                    )
                })}
                </CarouselImageContainer>
                                <CarouselContentContainer>
                                    <CarouselContentBarrow onClick={prevSlide} className='barrowcontainer'>
                                        <MdArrowBackIos className='barrow' size={'30px'}/>
                                    </CarouselContentBarrow>
                                    <CarouselContentEmptyContainer>

                                    </CarouselContentEmptyContainer>
                                    <CarouselContentFarrow onClick={nextSlide} className='farrowcontainer'>
                                        <MdArrowForwardIos className='farrow' size={'30px'}/>
                                    </CarouselContentFarrow>
                                </CarouselContentContainer>
                                <CarouselContentNavbar>
                                    {slides.map((slide,i) => {
                                        return(
                                            i===current ? <CarouselContentNavbarCurrenthr/>: <CarouselContentNavbarhr/>
                                        )
                                    })}
                                </CarouselContentNavbar>
                        </CarouselDataContainer>
            </CarouselWrapper>
        </CarouselContainer>
    )
}

export default Carousel
