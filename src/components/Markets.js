import React from 'react'
import styled from 'styled-components'
function Markets() {
    return (
        <Container>
            <Wrap>
            <MainTwo>
                <Detail>
                    <h1>Markets</h1>
                    <p>You can trade Long or Short Turbos 24/7 on every market we offer including forex, crypto, commodities and energy with no limits or restrictions! All underlying prices are delivered securely by trustless Chainlink oracles.</p>
                    <p>To learn more visit our Trading academy to develop your knowledge. Remember every deposit into your trading balance is matched with a 100% deposit bonus in BLZ.</p>
                    <button>START TRADING</button>
                </Detail>
                <Image>
                <img src="/images/mob3.png"/>
                </Image>
            </MainTwo>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;

margin-top: 200px;

@media only screen and (max-width: 600px) {
    margin-top: 10px;
}
`

const Wrap = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
margin: 0;

`

const MainTwo = styled.div`
width: 100%;
display: flex;

@media only screen and (max-width: 600px) {
    flex-direction: column;
}

`

const Detail = styled.div`
  width: 40%;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media only screen and (max-width: 600px) {
    width: 100%;
}

  h1{
    font-family: "Conthrax Sb";
    color: #CDD6F5;
    font-weight: 600;
font-size: 30px;
line-height: 40px;
text-align: left;
letter-spacing: 0.04em;
border-bottom: 1px solid rgba(205, 214, 245, 1);
padding-bottom: 20px;
margin-bottom: 30px;


@media only screen and (max-width: 600px) {
    font-size: 20px;
line-height: 24px;
}
  }

  P{
    font-size: 20px;
    line-height: 30px;
    color: #CDD6F5;
    text-align: left;
    margin-bottom: 30px;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
    
  }

  button{
    width: 286px;
    height: 54px;
    background: #51AD5F;
    font-weight: 600;
font-size: 14px;
line-height: 17px;
justify-content: flex-start;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #175610;
border-radius: 4px;
border: none;
outline: none;
cursor: pointer;

@media only screen and (max-width: 600px) {
    font-size: 14px;
line-height: 17px;
width: 100%;

  }
`

const Image = styled.div`
width: 60%;

@media only screen and (max-width: 600px) {
    width: 100%;
}

 img{
     width: 80%;
     margin-left: 80px;

     @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0;
        margin-top: 30px;
    }
     
 }
`

export default Markets
