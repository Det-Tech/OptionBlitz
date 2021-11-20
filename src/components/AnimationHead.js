import React from 'react'
import styled from 'styled-components'
function AnimationHead() {
    return (
        <Container>
            <h1>WHY USE OPTIONBLITZ?</h1>
            <Wrap>
                
                <Box>
                    <h1>10% EXPIRATION</h1>
                    <p>Trade windows as low as 10 seconds 
for digital options trading.</p>
                </Box>

                <Box>
                    <h1>100% deposit bonus</h1>
                    <p>Get 100% of every deposit you make matched with BLZ tokens. </p>
                </Box>

                <Box>
                    <h1>24/7 support</h1>
                    <p>Prompt multilingual support.
🇰🇲 🇩🇰 🇪🇨 🇬🇶 🇫🇴 🇩🇪 🇬🇷 🇬🇼</p>
                </Box>

                <Box>
                    <h1>0 network fees</h1>
                    <p>Clients do not have to pay any 
blockchain network/gas costs to trade.</p>
                </Box>

                <BoxTwo>
                    <h1>$1</h1>
                    <p>Minimum trade size</p>
                </BoxTwo>

                
                <BoxTwo>
                    <h1>100% non-custodian</h1>
                    <p>You control your funds at all times.</p>
                </BoxTwo>

                <BoxTwo>
                    <h1>25 Trading pairs</h1>
                    <p>Forex, Crypto, Commodities, Energy</p>
                </BoxTwo>

                <BoxTwo>
                    <h1>1:200</h1>
                    <p>Leverage</p>
                </BoxTwo>

               
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    font-family: "Conthrax Sb";
    color: #CDD6F5;
    margin: 70px 0;

    @media only screen and (max-width: 600px) {
      margin: 30px 0;
      font-size: 20px;
line-height: 24px;
  }
  }
`

const Wrap = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;

 
`
const Box = styled.div`
  width: 25%;
  height: 200px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #222237;
  border-right: 1px solid #222237;

  @media only screen and (max-width: 600px) {
    width: 50%;
}

  h1{
    color: #59648A;
    font-weight: 600;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.04em;
font-family: "Conthrax Sb";
margin-bottom: 10px;
text-transform: uppercase;

@media only screen and (max-width: 600px) {
  font-size: 14px;
line-height: 17px;
}

  }
  p{
    font-size: 16px;
    line-height: 22px;
    color: #CDD6F5;

    @media only screen and (max-width: 600px) {
      font-size: 14px;
line-height: 20px
  }
  }
  
`

const BoxTwo = styled.div`
  width: 25%;
  height: 200px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid #222237;

  @media only screen and (max-width: 600px) {
    width: 50%;
}

  h1{
    color: #59648A;
    font-weight: 600;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.04em;
font-family: "Conthrax Sb";
margin-bottom: 10px;
text-transform: uppercase;

@media only screen and (max-width: 600px) {
  font-size: 14px;
line-height: 17px;
}

  }
  p{
    font-size: 16px;
    line-height: 22px;
    color: #CDD6F5;

    @media only screen and (max-width: 600px) {
      font-size: 14px;
line-height: 20px
  }
  }
  
`
export default AnimationHead
