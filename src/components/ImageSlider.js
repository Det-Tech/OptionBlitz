import React from 'react'
import Styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <Container>
        <Carousel {...settings}>
            
            <Wrap>
            <Sliders>
                        <h1>Exotic instruments</h1>
                        <p>Binary, touch, no-touch and classic American style options trading plus our ground-breaking Turbos.</p>
            </Sliders> 
            </Wrap>
            <Wrap>
            <Sliders>
                        <h1>Exotic instruments</h1>
                        <p>Binary, touch, no-touch and classic American style options trading plus our ground-breaking Turbos.</p>
            </Sliders>
            </Wrap>
            <Wrap>
            <Sliders>
                        <h1>Exotic instruments</h1>
                        <p>Binary, touch, no-touch and classic American style options trading plus our ground-breaking Turbos.</p>
            </Sliders>
            </Wrap>
            <Wrap>
            <Sliders>
                        <h1>Exotic instruments</h1>
                        <p>Binary, touch, no-touch and classic American style options trading plus our ground-breaking Turbos.</p>
            </Sliders>
            </Wrap>
            
        </Carousel>
        </Container>
    )
}

export default ImgSlider

const Container = Styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 overflow: hidden;
 margin-top: 80px;

 @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
 
`

const Carousel = Styled(Slider)`
  margin-top: 20px;
  width: 34%;
  height: 10%;
  margin-bottom: 60px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  @media (max-width: 768px) {
    width: 100%;
  height: 100%;
 }

   ul li button{
    &:before{
        font-size: 10px;
        color: rgb(150, 158, 171);

        @media (max-width: 768px) {
          display: none;
         }
    }

}

li.slick-active button:before{
    color: white;
}

.slick-list{
    overflow: visible;

    @media only screen and (max-width: 600px) {
        overflow: hidden;
      }
   
}

button{
    z-index: 1;
}

`

const Wrap = Styled.div`
 display: flex;
 align-items: center;
 justify-content: center;

 
`

const Sliders = Styled.div`
width: 390px;
height: 299px;
background: url('/images/1.png');
margin-left: 100px;
background-size: cover;
background-repeat: none;
  text-align: left;

  @media only screen and (max-width: 600px) {
    margin-left: 20px;
  }
h1{
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #FFFFFF;
    font-family: "Conthrax Sb";
    padding-top: 120px;
    padding-left: 50px;
   }
 
   p{
     font-size: 16px;
     line-height: 22px;
     color: #FFFFFF;
     padding-left: 50px;
   }
`

