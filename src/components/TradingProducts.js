import React from 'react'
import styled from 'styled-components'

function TradingProducts() {
    return (
        <Container>
            <Wrap>
                <Left>
                    <h1>Classic options: <br />American style</h1>
                    <p>Optionblitz also offers American style options with flexible premium prices so you can set a trade amount as low as $1. You can set expiration from 10 minutes to 24 hours and also configure take profit triggers.</p>
                    <p>American style means you can exercise the option at any time until maturity.</p>
                    <p>Pricing is completely transparent and powered by smart contracts encoded on the blockchain.</p>
                    <p>All prices are delivered by Chainlink oracles and fees are fixed. All you pay is the 0.1% transaction fee which can be discounted by 25% if paid in BLX plus the option premium.</p>
                </Left>
                <Right>
                    <Boxes>
                        <Box>
                            <img src="/images/icon1.svg"/>
                            <h1>10m to 24h expiration</h1>
                        </Box>

                        <Box>
                            <img src="/images/icon2.svg"/>
                            <h1>Exercise at any time</h1>
                        </Box>

                        <Box>
                            <img src="/images/icon3.svg"/>
                            <h1>Forex, Crypto, Commodity, Energy markets</h1>
                        </Box>

                        <Box>
                            <img src="/images/icon4.svg"/>
                            <h1>Transparent pricing</h1>
                        </Box>
                    </Boxes>
                    <Image>
                        <img src="/images/lapview2.png"/>
                    </Image>
                </Right>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: url("/images/background2.png");
background-size: cover;
background-repeat: no-repeat;
`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
margin-top: 400px;

@media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 100px;
}
`

const Right = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100%;
}
`

const Left = styled.div`

width: 45%;
text-align: left;

@media only screen and (max-width: 600px) {
    width: 100%;
}
  h1{
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #CDD6F5;
    font-family: "Conthrax Sb";
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(205, 214, 245, 1);
    margin-bottom: 30px;

    @media only screen and (max-width: 600px) {
        font-size: 20px;
        line-height: 24px;
    }
  }

  p{
    font-size: 20px;
    line-height: 30px;
    color: #CDD6F5;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
  }
`
const Boxes = styled.div`
width: 70%;
display: flex;
flex-wrap: wrap;

@media only screen and (max-width: 600px) {
    width: 100%;
}
`

const Box = styled.div`
margin: 20px;
display: flex;
width: 43%;
border: 1px solid #222237;
border-radius: 8px;
padding: 10px 0;
@media only screen and (max-width: 600px) {
    width: 100%;
}

h1{
    font-weight: 600;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #00CD86;
margin: 10px;
}

img{
    width: 24px;
    height: 24px;
    margin: 10px;
}
`

const Image = styled.div`
width: 100%;

img{
    width: 100%;
    margin-top: 30px;

    
}
`

export default TradingProducts
