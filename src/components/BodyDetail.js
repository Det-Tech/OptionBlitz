import React from 'react'
import styled from 'styled-components'
function BodyDetail() {
    return (
        <Container>
            <Wrap>
                <BoxWrap>
                <Box>
                    <img src="/images/shield.svg"/>
                    <p>Optionblitz is a completely transparent and fully accountable solution for derivatives traders, offering          a suite of trading products and tools. </p>
                </Box>
                <Box>
                    <img src="/images/Star2.svg"/>
                    <p>Price feeds are guaranteed by Chainlink oracles and layer 2 solution Arbitrum, slashes Ethereum network costs to zero for traders while remaining fully decentralised</p>
                </Box>
                <Box>
                    <img src="/images/Openicon.svg"/>
                    <p>Participation in yield farming  is also possible due to staking support. Stake USDC and earn a revenue share, combine it with BLX to supercharge your rewards and achieve marketbeating APY.</p>
                </Box>
                </BoxWrap>
                <DetailWrap>
                    <h1>Transactions and funds</h1>
                    <p>All trades inside the platform are in USDT stablecoin, clients interact with our secure portal and can register with dapp wallets like metamask or optional email/social authentication.</p>
                    <p>All funds are held inside the blockchain making Optionblitz 100% non-custodian. Crypto deposits such as BTC, ETH  
and hundreds more supported by changenow integration partner and fiat deposits like credit/debit card by Banxa</p>
                </DetailWrap>
                
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  

`

const Wrap = styled.div`
width: 90%;
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;
margin-top: 30px;
flex-direction: column;

@media only screen and (max-width: 600px) {
    margin-top: 30px;
    flex-direction: column; 
  }
`
const BoxWrap = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    margin-top: 30px;
    flex-direction: column; 
  }
`
const Box = styled.div`
  width: 400px;
  padding: 10px;
  margin: 0 30px; 

  
@media only screen and (max-width: 600px) {
    margin: 0;
    width: 100%; 
  }

  img{
      width: 30%;

      @media only screen and (max-width: 600px) {
        width: 15%;
      }
  }

  p{
    font-size: 16px;
    line-height: 22px;
    color: #CDD6F5;
    margin-top: 20px;
    text-align: center;

    @media only screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
      }
  }
`

const DetailWrap = styled.div`
  width: 70%;
  margin-top: 90px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 30px;
  }

  h1{
    font-weight: 600;
    font-size: 34px;
    line-height: 46px;
    letter-spacing: 0.04em;
    color: #00CD86;
    font-family: "Conthrax Sb";
    text-transform: uppercase;
    margin-bottom: 30px;

    @media only screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 20px;
      }
  }
  P{
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #CDD6F5;
    padding: 8px;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
      }
  }
`

const SlideWrap = styled.div`
  display: flex;
  margin-top: 60px;
`

const Slide = styled.div`
  width: 390px;
  height: 299px;
  background: url('/images/1.png');
  background-size: cover;
  text-align: left;

  h1{
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.04em;
   text-transform: uppercase;
   color: #FFFFFF;
   font-family: "Conthrax Sb";
  }

  p{
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
  }
`
const SlideTwo = styled(Slide)`
background: url('/images/2.png');
`

const SlideThree = styled(Slide)`
background: url('/images/3.png');
`

export default BodyDetail
