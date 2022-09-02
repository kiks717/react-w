import React from 'react'
import { useState } from 'react'
import {SliderData} from './file'
import { 
      LeftArrow,
      RightArrow,
      SliderImage,
      SliderSection,
      SliderContent,
      SliderWrapper,
      SlidePrice,
      SlideTitle,
      SlideButton,
      SlideDesc
 } from './SliderElements' ;


const Slider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  // const size = slides.length

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }
/* */
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1  : current - 1)
  }

  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }
  //if we don't have data return null, but i have it 

  return (

    <SliderSection id='show'>
      <LeftArrow onClick={prevSlide}/>
      {SliderData.map((slide, index) => {

        return (
          <SliderContent  key={slide.id}

          //  className={index === current ? 'slide active' : 'slide'} 
           >
            {index === current && (
              <SliderWrapper>
          <SliderImage src={slide.image} alt={slide.alt}/>
              <SlideTitle>{slide.title}</SlideTitle>
              <SlideDesc>{slide.desc}.</SlideDesc>
             <SlidePrice>${slide.price}</SlidePrice>
             <SlideButton >{slide.button}</SlideButton>
              </SliderWrapper>
          )
          }
          </SliderContent>
        )
      })}
    <RightArrow onClick={nextSlide}/>
    </SliderSection>

  )
}

export default Slider
