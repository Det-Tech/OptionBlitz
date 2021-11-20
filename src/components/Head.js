import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
function Head() {
    return (
        <Container>
            <Nav />
            <Wrapper>
            <Wrap>
                <Left>
                    <DetailBox>
                    <h1>TRADE ON <br /> OPTIONBLITZ NOW</h1>
                    <p>Decentralised options and leveraged trading platform    <br /> powered by  Ethereum Layer 2 protocol  Arbitrum.</p>
                    <button>START TRADING NOW</button>
                    </DetailBox>
                </Left>
                <Right>
                    <ImageBox>
                        <img src='/images/devices.png'/>
                    </ImageBox>
                </Right>
            </Wrap>
            </Wrapper>
        </Container>
    ) 
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/1234.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 600px) {
    height: 120vh;
  }
  
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Wrap = styled.div`
  width: 90%;
  display: flex;
  overflow: hidden;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 95%;
  }
`

const Left = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  
  @media only screen and (max-width: 600px) {
    flex: 0.8;
  }

  
`
const DetailBox = styled.div`

  text-align: left;
  @media only screen and (max-width: 600px) {
      text-align: center; 
  }

  h1{
    font-size: 40px;
    font-weight: 600;
    line-height: 54px;
    font-family: Conthrax;
    color: #CDD6F5;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-family: "Conthrax Sb";

    @media only screen and (max-width: 600px) {
        font-size: 28px;
        line-height: 40px;
        letter-spacing: 0.04em; 
    }
    
}

p{
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: #CDD6F5;
    margin-bottom: 30px;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
}

button{
  background: #51AD5F;
  border-radius: 4px;
  width: 286px;
  height: 54px;
  border: none;
  outline: none;
  font-size: 15px;
  letter-spacing: 1.1px;

  @media only screen and (max-width: 600px) {
    width: 100%;
}
}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
 
`

const ImageBox = styled.div`
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 600px) {
    flex: 0.8;
  }
img{
    width: 100%;
    object-fit: cover;

    @media only screen and (max-width: 600px) {
        width: 120%; 
        margin-right: 30px;
    }
}
`
export default Head
